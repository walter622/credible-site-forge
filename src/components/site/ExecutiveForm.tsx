import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { toast } from "sonner";

export function ExecutiveForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="rounded-2xl border border-border bg-surface p-6 lg:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          toast.success("Solicitação registrada", {
            description: "Nossa equipe comercial entrará em contato em breve.",
          });
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail corporativo</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input id="telefone" name="telefone" type="tel" required autoComplete="tel" />
        </div>
      </div>


      <Button
        type="submit"
        disabled={sending}
        className="mt-7 w-full rounded-full py-6 text-sm font-semibold"
      >
        {sending ? "Enviando..." : "Enviar Solicitação"}
      </Button>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        Seus dados estão seguros e serão utilizados exclusivamente para o nosso contato inicial.
      </p>
    </form>
  );
}
