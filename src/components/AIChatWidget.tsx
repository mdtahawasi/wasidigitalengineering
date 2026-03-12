import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Sparkles, Zap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/contexts/LanguageContext";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Something went wrong. Please try again.");
    return;
  }

  if (!resp.body) {
    onError("No response received.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}

const quickActions = [
  { labelKey: "chat.quickBim", icon: Zap },
  { labelKey: "chat.quickProjects", icon: Sparkles },
  { labelKey: "chat.quickContact", icon: Send },
];

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // Prepend language instruction so the bot replies in the active language
    const langInstruction: Msg = {
      role: "user",
      content: `[System: Reply in ${language === "ar" ? "Arabic" : language === "hi" ? "Hindi" : language === "fr" ? "French" : language === "de" ? "German" : language === "es" ? "Spanish" : language === "zh" ? "Chinese" : language === "ja" ? "Japanese" : "English"}. Be concise and helpful.]`,
    };

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [langInstruction, ...messages, userMsg],
        onDelta: upsert,
        onDone: () => setIsLoading(false),
        onError: (msg) => {
          setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
          setIsLoading(false);
        },
      });
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.error") }]);
      setIsLoading(false);
    }
  };

  const send = () => sendMessage(input);

  return (
    <>
      {/* Floating AI Robot Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-24 right-6 z-50 group"
        aria-label="AI Chat Support"
      >
        {/* Animated orbital ring */}
        <motion.span
          className="absolute inset-[-6px] rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        {/* Glow pulse */}
        <span className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary/25 to-accent/25 blur-lg animate-pulse" />

        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground flex items-center justify-center shadow-[0_4px_25px_hsl(var(--primary)/0.4)] transition-all overflow-hidden">
          {/* Subtle circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-3 w-3 h-[1px] bg-primary-foreground" />
            <div className="absolute top-4 right-2 w-2 h-[1px] bg-primary-foreground" />
            <div className="absolute bottom-3 left-4 w-4 h-[1px] bg-primary-foreground" />
            <div className="absolute top-3 left-5 w-[1px] h-3 bg-primary-foreground" />
            <div className="absolute bottom-4 right-5 w-[1px] h-2 bg-primary-foreground" />
          </div>

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="robot-face"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex flex-col items-center"
              >
                {/* Robot antenna */}
                <div className="absolute -top-[10px] w-[2px] h-[6px] bg-primary-foreground/80 rounded-full">
                  <motion.div
                    className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-primary-foreground"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                {/* Robot eyes */}
                <div className="flex gap-[8px] mt-[2px]">
                  <motion.div
                    className="w-[8px] h-[8px] rounded-[3px] bg-primary-foreground"
                    animate={{ scaleY: [1, 0.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, times: [0, 0.05, 0.1] }}
                  />
                  <motion.div
                    className="w-[8px] h-[8px] rounded-[3px] bg-primary-foreground"
                    animate={{ scaleY: [1, 0.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, times: [0, 0.05, 0.1] }}
                  />
                </div>
                {/* Robot mouth - animated smile */}
                <motion.div
                  className="mt-[3px] w-[12px] h-[4px] border-b-[2px] border-primary-foreground/90 rounded-b-full"
                  animate={{ width: ["12px", "8px", "12px"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Online status light */}
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-[2.5px] border-primary shadow-[0_0_6px_rgba(52,211,153,0.6)]">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
          </span>
        </div>

        {/* Tooltip */}
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card border border-border text-foreground text-xs font-medium px-3 py-2 rounded-xl shadow-lg pointer-events-none flex items-center gap-1.5"
          >
            <Sparkles size={12} className="text-primary" />
            {t("chat.askMe")}
            <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-card border-y-[5px] border-y-transparent" />
          </motion.div>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-[10.5rem] right-6 z-50 w-[340px] sm:w-[400px] h-[520px] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold tracking-wide">{t("chat.title")}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                    <p className="text-[11px] opacity-80">{t("chat.online")}</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-4 space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Sparkles size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t("chat.welcome")}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t("chat.welcomeSub")}</p>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2 pt-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.labelKey}
                        onClick={() => sendMessage(t(action.labelKey))}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-muted text-left text-sm text-foreground transition-colors border border-border/40 hover:border-border"
                      >
                        <action.icon size={14} className="text-primary shrink-0" />
                        <span>{t(action.labelKey)}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl rounded-br-md shadow-sm"
                        : "bg-muted/70 text-foreground rounded-2xl rounded-bl-md border border-border/30"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:m-0 [&>ol]:m-0">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={14} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-muted/70 rounded-2xl rounded-bl-md px-4 py-3 border border-border/30">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border/50 bg-muted/20">
              <form
                onSubmit={(e) => { e.preventDefault(); send(); }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("chat.placeholder")}
                  className="flex-1 bg-background rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center disabled:opacity-40 shadow-sm transition-opacity"
                >
                  <Send size={16} />
                </motion.button>
              </form>
              <p className="text-[10px] text-muted-foreground text-center mt-2 opacity-60">
                {t("chat.poweredBy")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
