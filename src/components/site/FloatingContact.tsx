import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function FloatingContact() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Flar Consulting"
      className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale com um especialista</span>
    </a>
  );
}
