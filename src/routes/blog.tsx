import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SolutionCta } from "@/components/site/SolutionPage";
import { solutionGroups } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Hub de Inteligência: Insights para C-Level | Flar Consulting" },
      {
        name: "description",
        content:
          "Artigos técnicos e estratégicos sobre ERP, hiperautomação, IA generativa, cibersegurança e governança para CEOs, CIOs, CTOs, CFOs e CISOs.",
      },
      { property: "og:title", content: "Hub de Inteligência | Flar Consulting" },
      {
        property: "og:description",
        content: "Conteúdo estratégico de tecnologia corporativa para decisores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

const topics = solutionGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.group })),
);

function Page() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Hub de Inteligência" }]} />

      <section className="hero-surface relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Insights</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
            Hub de Inteligência Flar
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Artigos técnicos e estratégicos direcionados para decisores C-Level: CEOs, CIOs, CTOs,
            CFOs e CISOs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Temas em pauta</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Nossos conteúdos acompanham os quatro pilares de atuação da Flar. Os primeiros artigos
          serão publicados em breve.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.to}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {topic.group}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
              <span className="mt-6 text-xs font-medium text-muted-foreground">Em breve</span>
            </article>
          ))}
        </div>
      </section>

      <SolutionCta
        title="Quer Discutir Esses Temas com Nossos Especialistas?"
        subtitle="Agende uma conversa e receba uma leitura aplicada ao cenário tecnológico da sua empresa."
        label="Falar com um Especialista"
      />
    </div>
  );
}
