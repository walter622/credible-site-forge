import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Target, Trophy } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SolutionCta } from "@/components/site/SolutionPage";
import { institutionalStats } from "@/data/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos: 24+ Anos em Tecnologia Corporativa | Flar Consulting" },
      {
        name: "description",
        content:
          "Conheça a história, o propósito e os números da Flar Consulting: 24+ anos, +6.100 projetos e +250 grandes empresas atendidas.",
      },
      { property: "og:title", content: "Quem Somos | Flar Consulting" },
      {
        property: "og:description",
        content: "Mais de 24 anos de trajetória em tecnologia e inovação corporativa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: Page,
});

const principles = [
  {
    icon: Target,
    title: "Foco no Resultado do Cliente",
    text: "Entregas estruturadas para gerar eficiência, segurança e valor ao faturamento.",
  },
  {
    icon: Trophy,
    title: "Qualidade e Rigor Técnico",
    text: "Adoção constante das melhores práticas de engenharia de software e segurança corporativa.",
  },
  {
    icon: Handshake,
    title: "Parceria Continuada",
    text: "Relações transparentes e de longo prazo com executivos e equipes de tecnologia.",
  },
];

function Page() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Quem Somos" }]} />

      <section className="hero-surface relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Institucional
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
            Mais de 24 Anos de Trajetória em Tecnologia e Inovação Corporativa
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Conheça a história, o propósito e a equipe que sustentam, automatizam e protegem as
            operações digitais de grandes empresas.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">Nossa História e Escala de Atuação</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Fundada com o compromisso de transformar a tecnologia em um recurso estratégico para o
            crescimento das empresas, a Flar Consulting evoluiu ao longo de mais de duas décadas.
            Atuamos como parceira de médias e grandes corporações, unindo sólida tradição em
            governança e ERPs ao pioneirismo em Inteligência Artificial Generativa e Cibersegurança.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Números Institucionais de Impacto</h2>
        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {institutionalStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-surface p-7">
              <dt className="font-display text-3xl font-bold text-primary lg:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">Nossos Princípios de Atuação</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="rounded-2xl border border-border bg-background p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <SolutionCta
        title="Saiba Como a Flar Consulting Pode Ajudar Sua Empresa a Crescer"
        subtitle="Converse com nossa liderança sobre os desafios de tecnologia, automação e segurança do seu negócio."
        label="Agendar Reunião Institucional"
      />
    </div>
  );
}
