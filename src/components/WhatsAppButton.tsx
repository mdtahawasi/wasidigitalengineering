import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971569327490"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    >
      <MessageCircle size={28} fill="white" stroke="none" />
    </a>
  );
}
