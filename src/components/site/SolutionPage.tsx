import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export type ServiceCard = { title: string; description: string; icon: LucideIcon };
export type Highlight = { title: string; description: string };

export type SolutionPageProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  contextTitle: string;
  contextText: string;
  cardsTitle: string;
  cards: ServiceCard[];
  highlightsTitle: string;
  highlights: Highlight[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaLabel: string;
  children?: React.ReactNode;
};

export function SolutionPage(props: SolutionPageProps) {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Soluções" }, { label: props.breadcrumb }]} />

      <section className="hero-surface relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {props.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
            {props.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {props.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {props.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {props.secondaryCta && (
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {props.secondaryCta}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">{props.contextTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{props.contextText}</p>
        </div>
      </section>

      {props.children}

      <section id="servicos" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl">{props.cardsTitle}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {props.cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50 hover:bg-surface-2"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">{props.highlightsTitle}</h2>
          <ul className="mt-9 grid gap-5 md:grid-cols-3">
            {props.highlights.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SolutionCta title={props.ctaTitle} subtitle={props.ctaSubtitle} label={props.ctaLabel} />
    </div>
  );
}

export function SolutionCta({
  title,
  subtitle,
  label,
}: {
  title: string;
  subtitle: string;
  label: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="hero-surface relative overflow-hidden rounded-3xl border border-border p-9 text-center lg:p-16">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
          <Link
            to="/contato"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
