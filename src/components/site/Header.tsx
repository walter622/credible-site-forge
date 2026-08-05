import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { solutionGroups, contact } from "@/data/site";
import logo from "@/assets/logo-flar-branco.png.asset.json";

const primaryLinks = [
  { label: "Sobre a Flar", to: "/quem-somos" },
  { label: "Casos de Sucesso", to: "/casos-de-sucesso" },
  { label: "Insights", to: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Flar Consulting — Home">
          <img src={logo.url} alt="Flar Consulting" className="h-8 w-auto" width={160} height={32} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button
              type="button"
              aria-expanded={mega}
              onClick={() => setMega((v) => !v)}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              Soluções
              <ChevronDown className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`} />
            </button>
            {mega && (
              <div className="absolute left-1/2 top-full w-[min(58rem,90vw)] -translate-x-1/2 pt-3">
                <div className="animate-rise grid gap-6 rounded-2xl border border-border bg-surface p-6 shadow-elevated md:grid-cols-3">
                  {solutionGroups.map((group) => (
                    <div key={group.group}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                        {group.group}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              onClick={() => setMega(false)}
                              className="block rounded-lg p-3 transition-colors hover:bg-surface-2"
                            >
                              <span className="block text-sm font-semibold">{item.title}</span>
                              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <Button asChild className="rounded-full font-semibold">
            <Link to="/contato">Agendar Reunião Estratégica</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] overflow-y-auto border-border bg-surface p-6">
            <img src={logo.url} alt="Flar Consulting" className="h-7 w-auto" />
            <nav className="mt-8 space-y-6" aria-label="Navegação mobile">
              {solutionGroups.map((group) => (
                <div key={group.group}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {group.group}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-md py-2 text-sm font-medium"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="space-y-1 border-t border-border pt-5">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md py-2 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link to="/contato" onClick={() => setOpen(false)}>
                  Agendar Reunião Estratégica
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
