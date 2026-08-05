import { createFileRoute } from "@tanstack/react-router";
import { Bot, Brain, FileSearch, GitBranch, ArrowRight } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/hiperautomacao")({
  head: () => ({
    meta: [
      { title: "Hiperautomação & IA Generativa (RPA + Claude) | Flar Consulting" },
      {
        name: "description",
        content:
          "RPA e IA Generativa integradas aos seus ERPs para eliminar processos manuais, com parceria oficial Anthropic (Claude Partner Network).",
      },
      { property: "og:title", content: "Hiperautomação & IA Generativa | Flar Consulting" },
      {
        property: "og:description",
        content: "Orquestre fluxos de trabalho com RPA e IA Generativa corporativa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hiperautomacao" },
    ],
    links: [{ rel: "canonical", href: "/hiperautomacao" }],
  }),
  component: Page,
});

const flow = [
  { step: "Captura de dados", detail: "Leitura de notas e e-mails por OCR." },
  { step: "Análise com IA generativa", detail: "Processamento de texto e dados via Anthropic/Claude." },
  { step: "Execução no ERP", detail: "Lançamento automático no SAP/Oracle via RPA." },
];

function Page() {
  return (
    <SolutionPage
      breadcrumb="Hiperautomação & IA"
      eyebrow="Automação & Engenharia"
      title="Hiperautomação & IA Generativa: Elimine Processos Manuais na Sua Empresa"
      subtitle="Combinação estratégica de RPA (Automação Robótica de Processos) e Inteligência Artificial Generativa para orquestrar fluxos de trabalho e aumentar a produtividade operacional."
      primaryCta="Solicitar Mapeamento de Automação"
      secondaryCta="Conhecer Soluções em IA"
      contextTitle="Processos Inteligentes e Conectados de Ponta a Ponta"
      contextText="A automação isolada resolve tarefas pontuais. A Hiperautomação une robôs de software (RPA) à Inteligência Artificial para transformar processos completos — desde a leitura automática de documentos até a atualização direta de dados nos seus sistemas de gestão centrais."
      cardsTitle="Pilares da Hiperautomação Flar"
      cards={[
        {
          icon: Bot,
          title: "RPA Enterprise (Robotic Process Automation)",
          description:
            "Desenvolvimento de robôs virtuais para executar rotinas repetitivas com precisão, agilidade e funcionamento 24/7.",
        },
        {
          icon: Brain,
          title: "IA Generativa Corporativa (Parceria Anthropic / Claude)",
          description:
            "Aplicação de modelos de IA para análise de documentos, suporte inteligente e automação de decisões operacionais com total governança.",
        },
        {
          icon: GitBranch,
          title: "Mapeamento e Otimização de Processos",
          description:
            "Análise detalhada dos fluxos de trabalho da empresa para identificar os pontos de maior retorno com a automação.",
        },
        {
          icon: FileSearch,
          title: "Processamento Inteligente de Documentos",
          description:
            "Extração e organização de dados contidos em arquivos físicos e digitais (PDFs, relatórios e comprovantes).",
        },
      ]}
      highlightsTitle="Diferenciais da Flar"
      highlights={[
        {
          title: "Parceira Oficial Anthropic",
          description:
            "Claude Partner Network / CCAF: soluções avançadas em Inteligência Artificial com arquitetura segura e controle de dados.",
        },
        {
          title: "Retorno Objetivo",
          description:
            "Foco em projetos de automação que trazem ganhos claros de tempo e redução de custos.",
        },
        {
          title: "Integração Nativa",
          description:
            "Automação conectada diretamente aos sistemas de gestão centrais SAP e Oracle.",
        },
      ]}
      ctaTitle="Descubra Quais Processos da Sua Empresa Podem Ser Automatizados"
      ctaSubtitle="Agende uma sessão de mapeamento com nossos especialistas em Hiperautomação e IA."
      ctaLabel="Agendar Mapeamento de Automação"
    >
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Fluxo de hiperautomação Flar
        </p>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {flow.map((item, index) => (
            <div key={item.step} className="contents">
              <article className="rounded-2xl border border-border bg-surface p-6">
                <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-3 text-base font-semibold">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
              {index < flow.length - 1 && (
                <div className="flex items-center justify-center" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 rotate-90 text-primary lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </SolutionPage>
  );
}
