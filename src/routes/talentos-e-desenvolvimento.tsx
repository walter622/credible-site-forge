import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, ShieldCheck, Users } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/talentos-e-desenvolvimento")({
  head: () => ({
    meta: [
      { title: "Alocação de TI e Fábrica de Software | Flar Consulting" },
      {
        name: "description",
        content:
          "Profissionais de TI seniores alocados (staff augmentation) e squads ágeis dedicadas ao desenvolvimento de software corporativo.",
      },
      {
        property: "og:title",
        content: "Alocação Especializada de TI & Engenharia de Software | Flar Consulting",
      },
      {
        property: "og:description",
        content: "Escale sua capacidade tecnológica com agilidade e governança.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/talentos-e-desenvolvimento" },
    ],
    links: [{ rel: "canonical", href: "/talentos-e-desenvolvimento" }],
  }),
  component: Page,
});

const models = [
  {
    title: "Alocação de profissionais",
    text: "Profissionais seniores integrados à sua equipe interna, sob sua liderança e com início rápido das atividades.",
  },
  {
    title: "Squads dedicadas & fábrica",
    text: "Equipes multidisciplinares gerenciadas pela Flar, focadas na entrega de projetos específicos.",
  },
];

function Page() {
  return (
    <SolutionPage
      breadcrumb="Talentos & Desenvolvimento"
      eyebrow="Automação & Engenharia"
      title="Alocação Especializada de TI & Engenharia de Software Sob Medida"
      subtitle="Escale sua capacidade tecnológica com agilidade. Oferecemos desde profissionais de TI seniores alocados (Staff Augmentation) até Squads Ágeis dedicadas ao desenvolvimento de softwares corporativos."
      primaryCta="Solicitar Profissionais de TI"
      secondaryCta="Ver Serviços de Fábrica"
      contextTitle="O Modelo Ideal para Cada Necessidade Tecnológica"
      contextText="Encontrar e reter talentos técnicos qualificados é fundamental para o sucesso de novos projetos. A Flar Consulting apoia sua empresa com dois modelos flexíveis e voltados a resultados."
      cardsTitle="Especialidades Técnicas Atendidas"
      cards={[
        {
          icon: Code2,
          title: "Desenvolvimento & Arquitetura",
          description:
            "Programadores Full-Stack, Java, Python, .NET, Node.js, React e Arquitetos de Nuvem.",
        },
        {
          icon: Database,
          title: "Especialistas em ERP & CRM",
          description:
            "Consultores para sustentação e desenvolvimento em SAP, Oracle e Salesforce.",
        },
        {
          icon: Users,
          title: "Dados & IA",
          description:
            "Engenheiros de dados, especialistas em automação RPA e Inteligência Artificial.",
        },
        {
          icon: ShieldCheck,
          title: "Qualidade & Segurança",
          description:
            "Profissionais de testes (QA), DevSecOps e analistas de segurança da informação.",
        },
      ]}
      highlightsTitle="Diferenciais da Alocação Flar"
      highlights={[
        {
          title: "Agilidade na Seleção",
          description: "Apresentação de profissionais validados em prazos reduzidos.",
        },
        {
          title: "Rigor Técnico",
          description:
            "Processo de avaliação conduzido por especialistas experientes em tecnologia corporativa.",
        },
        {
          title: "Estabilidade das Equipes",
          description:
            "Acompanhamento contínuo para garantir o alinhamento das entregas e a retenção do profissional.",
        },
      ]}
      ctaTitle="Precisa Acelerar Seus Projetos de Tecnologia?"
      ctaSubtitle="Conte-nos quais perfis profissionais ou projetos sua empresa precisa e nós montaremos a equipe."
      ctaLabel="Solicitar Perfil ou Squad"
    >
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Modelos de atuação em talentos
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.title}
              className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SolutionPage>
  );
}
