import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { contact, solutionGroups } from "@/data/site";
import logo from "@/assets/logo-flar-branco.png.asset.json";

const institutional = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Casos de Sucesso", to: "/casos-de-sucesso" },
  { label: "Hub de Inteligência", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

export function Footer() {
  const solutions = solutionGroups.flatMap((g) => g.items);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo.url} alt="Flar Consulting" className="h-8 w-auto" width={160} height={32} />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Tecnologia estratégica, inteligência artificial e cibersegurança para operações
            corporativas de médias e grandes empresas.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              24+ anos de mercado
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" />
              Parceira Oficial Anthropic
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Soluções</h2>
          <ul className="mt-4 space-y-2.5">
            {solutions.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Institucional
          </h2>
          <ul className="mt-4 space-y-2.5">
            {institutional.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Ação & Contato
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={contact.phoneHref} className="transition-colors hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{contact.hours}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{contact.address}</span>
            </li>
          </ul>
          <Link
            to="/contato"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar reunião
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Flar Consulting. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/termos-de-uso" className="transition-colors hover:text-primary">
              Termos de Uso
            </Link>
            <Link to="/politica-de-privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
