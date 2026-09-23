import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Cadastro recebido | FLAR Consulting" },
      { name: "description", content: "Cadastro recebido para a sessão de governança de IA e cibersegurança da FLAR Consulting." },
      { property: "og:title", content: "Cadastro recebido | FLAR Consulting" },
      { property: "og:description", content: "Nosso time vai entrar em contato para agendar sua sessão de 1 hora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="lead-theme flex min-h-screen items-center bg-background px-5 py-16 text-foreground">
      <main className="mx-auto w-full max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 stroke-[1.5] text-primary" />
        <h1 className="mt-7 text-4xl font-extrabold sm:text-5xl">Recebemos seu cadastro.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Nosso time vai te chamar no WhatsApp para agendar sua sessão de 1 hora.</p>
        <section className="mt-10 rounded-md border border-border bg-surface p-6 text-left sm:p-8">
          <h2 className="text-xl font-bold">Para aproveitar melhor a conversa, pense em:</h2>
          <ul className="mt-6 space-y-4">
            {["quais áreas da empresa já usam IA, mesmo que informalmente;", "se existe alguma integração de IA com sistemas internos (ERP, CRM, atendimento);", "se já existe uma política de uso de IA, mesmo que em rascunho."].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{item}</li>
            ))}
          </ul>
        </section>
        <Button asChild className="mt-8 h-12 rounded-md px-7 text-base font-bold"><Link to="/">Voltar para o site</Link></Button>
      </main>
    </div>
  );
}