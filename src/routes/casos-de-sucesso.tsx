import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SolutionCta } from "@/components/site/SolutionPage";
import { cases } from "@/data/site";

export const Route = createFileRoute("/casos-de-sucesso")({
  head: () => ({
    meta: [
      { title: "Casos de Sucesso em ERP, Automação e Segurança | Flar Consulting" },
      {
        name: "description",
        content:
          "Projetos reais de modernização de ERP, proteção de perímetro com Flar Cyber e automação inteligente de processos administrativos.",
      },
      { property: "og:title", content: "Casos de Sucesso | Flar Consulting" },
      {
        property: "og:description",
        content: "Histórias de sucesso em tecnologia, automação e segurança.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/casos-de-sucesso" },
    ],
    links: [{ rel: "canonical", href: "/casos-de-sucesso" }],
  }),
  component: Page,
});

const filters = [
  "Todos",
  "BU – Inovação",
  "BU – APPS",
  "BU – Fábrica de Tecnologias",
  "Soluções Flar",
];


function Page() {
  const [active, setActive] = useState("Todos");
  const visible = active === "Todos" ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Casos de Sucesso" }]} />

      <section className="hero-surface relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Autoridade & resultados
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
            Histórias de Sucesso em Tecnologia, Automação e Segurança
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Conheça projetos em que a Flar Consulting ajudou médias e grandes empresas a superarem
            desafios complexos e atingirem novos patamares de eficiência.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="sr-only">Exemplos de projetos e resultados</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtro de projetos">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.category}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-foreground">O desafio</dt>
                  <dd className="mt-1 text-muted-foreground">{item.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">A atuação Flar</dt>
                  <dd className="mt-1 text-muted-foreground">{item.action}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">O resultado</dt>
                  <dd className="mt-1 text-muted-foreground">{item.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            Nenhum caso publicado nesta categoria no momento. Fale conosco para conhecer projetos
            semelhantes.
          </p>
        )}
      </section>

      <SolutionCta
        title="Vamos Estruturar o Próximo Projeto de Sucesso da Sua Empresa?"
        subtitle="Converse com nossos consultores de soluções e receba uma avaliação do seu cenário."
        label="Solicitar Avaliação de Projeto"
      />
    </div>
  );
}
