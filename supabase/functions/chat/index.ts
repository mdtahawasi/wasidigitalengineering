import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid request: 'messages' must be an array." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const rawMessages = body.messages;
    if (rawMessages.length === 0 || rawMessages.length > 20) {
      return new Response(
        JSON.stringify({ error: "Invalid request: message count must be between 1 and 20." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const messages: Array<{ role: string; content: string }> = [];
    for (const m of rawMessages) {
      if (!m || typeof m !== "object") {
        return new Response(
          JSON.stringify({ error: "Invalid message format." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const role = m.role;
      const content = m.content;
      if (role !== "user" && role !== "assistant") {
        return new Response(
          JSON.stringify({ error: "Invalid role: only 'user' and 'assistant' are allowed." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (typeof content !== "string" || content.length === 0 || content.length > 2000) {
        return new Response(
          JSON.stringify({ error: "Invalid content: each message must be a string of 1-2000 characters." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      messages.push({ role, content });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are WASI BIM Assistant — a friendly, knowledgeable support bot for WASI BIM Consultancy. You help visitors learn about our BIM services, projects, and expertise.

About WASI:
- We are a BIM consultancy specializing in Building Information Modeling across Architecture, Structure, MEP, Façade, Landscape, and Infrastructure disciplines.
- We work on projects across UAE, India, and Saudi Arabia.
- Our expertise spans LOD 100 to LOD 500, covering residential, commercial, industrial, and infrastructure projects.
- Key projects include Al Habtoor Grand Residency (72,292 SQ.M), Godrej & Boyce Industrial Campus (34,000 SQ.M), Pearl Centre Dalma Island, and more.
- We use software like Revit, Navisworks, AutoCAD, BIM 360, and Civil 3D.
- Services: BIM Modeling, Clash Detection, 4D/5D Simulation, Digital Twins, Scan-to-BIM, and BIM Consultation.

Keep answers concise, professional, and helpful. If asked something outside WASI's scope, politely redirect to our services. For project inquiries or quotes, suggest contacting us via WhatsApp or the Contact page.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
