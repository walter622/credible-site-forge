import { createFileRoute } from "@tanstack/react-router";
import { CloudCog, Database, ScrollText, Wallet } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/erp-oracle")({
  head: () => ({
    meta: [
      { title: "Soluções Oracle: DBA, OCI e Modernização | Flar Consulting" },
      {
        name: "description",
        content:
          "Sustentação, migração e modernização de ecossistemas Oracle ERP e banco de dados, com performance, estabilidade e nuvem.",
      },
      { property: "og:title", content: "Soluções Especializadas Oracle | Flar Consulting" },
      {
        property: "og:description",
        content: "Performance, estabilidade e nuvem para ambientes Oracle críticos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/erp-oracle" },
    ],
    links: [{ rel: "canonical", href: "/erp-oracle" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SolutionPage
      breadcrumb="ERP Oracle"
      eyebrow="Plataformas Estratégicas"
      title="Soluções Especializadas Oracle: Performance, Estabilidade e Nuvem"
      subtitle="Sustentação, migração e modernização de ecossistemas Oracle ERP e Banco de Dados. Mantenha seus processos centrais operando com máxima eficiência e segurança."
      primaryCta="Falar com Especialista Oracle"
      secondaryCta="Solicitar Avaliação Técnica"
      contextTitle="Estabilidade para Ambientes de Dados Críticos"
      contextText="Sistemas Oracle suportam operações essenciais nas maiores empresas. Falhas de configuração ou falta de suporte especializado geram lentidão e custos desnecessários. A Flar Consulting entrega suporte consultivo e gestão contínua para manter seu ecossistema Oracle seguro, estável e atualizado."
      cardsTitle="Escopo de Atuação Oracle"
      cards={[
        {
          icon: Database,
          title: "Sustentação de Banco de Dados & Infraestrutura (OCI e On-Premise)",
          description:
            "Gestão contínua de DBA, ajuste de desempenho, rotinas de backup e alta disponibilidade para bancos de dados Oracle.",
        },
        {
          icon: CloudCog,
          title: "Migração e Projetos em Nuvem",
          description:
            "Planejamento seguro para migração de infraestruturas locais para a nuvem da Oracle, garantindo escalabilidade.",
        },
        {
          icon: Wallet,
          title: "Otimização de Processos Financeiros e Suprimentos",
          description:
            "Ajuste e evolução de fluxos no Oracle ERP para aumentar a agilidade no fechamento contábil e na gestão operacional.",
        },
        {
          icon: ScrollText,
          title: "Governança de Licenciamento",
          description:
            "Análise do uso de licenças para garantir conformidade e otimização dos investimentos em software.",
        },
      ]}
      highlightsTitle="Diferenciais Flar em Ambientes Oracle"
      highlights={[
        {
          title: "Alta Disponibilidade",
          description:
            "Acompanhamento técnico para prevenir gargalos em momentos de alta demanda.",
        },
        {
          title: "Segurança de Dados",
          description:
            "Aplicação de rotinas rigorosas de proteção e controle de acessos aos bancos de dados corporativos.",
        },
        {
          title: "Gestão Contínua",
          description:
            "Suporte consultivo permanente para manter o ecossistema Oracle seguro, estável e atualizado.",
        },
      ]}
      ctaTitle="Maximize o Valor do Seu Investimento em Tecnologia Oracle"
      ctaSubtitle="Fale com nossa equipe e receba uma análise detalhada sobre como otimizar seu ambiente."
      ctaLabel="Solicitar Contato Especializado"
    />
  );
}
