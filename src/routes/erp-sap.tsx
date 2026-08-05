import { createFileRoute } from "@tanstack/react-router";
import { Cloud, DatabaseZap, FileCheck2, LifeBuoy } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/erp-sap")({
  head: () => ({
    meta: [
      { title: "Consultoria SAP: Sustentação, AMS e Evolução | Flar Consulting" },
      {
        name: "description",
        content:
          "Sustentação, AMS, migração e otimização do seu ambiente SAP com alta disponibilidade e conformidade fiscal brasileira.",
      },
      { property: "og:title", content: "Consultoria Especializada SAP | Flar Consulting" },
      {
        property: "og:description",
        content: "Da sustentação à evolução estratégica do seu ERP SAP.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/erp-sap" },
    ],
    links: [{ rel: "canonical", href: "/erp-sap" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SolutionPage
      breadcrumb="ERP SAP"
      eyebrow="Plataformas Estratégicas"
      title="Consultoria Especializada SAP: Sustentação, Evolução e Otimização para Seu ERP"
      subtitle="Garanta alta disponibilidade, estabilidade e performance contínua do seu ambiente SAP. A Flar Consulting atua da sustentação à evolução estratégica de sistemas centrais."
      primaryCta="Falar com Consultor SAP"
      secondaryCta="Solicitar Análise de Ambiente"
      contextTitle="Eficiência Operacional em Ambientes SAP Críticos"
      contextText="Manter um ecossistema SAP funcionando com alta performance exige mais do que simples suporte técnico. Exige conhecimento de arquitetura de processos corporativos, regras tributárias e capacidade de melhoria contínua. A Flar Consulting atua na sustentação e evolução da sua operação SAP, garantindo que o seu ERP seja um motor de eficiência para o negócio."
      cardsTitle="Nossos Serviços SAP"
      cards={[
        {
          icon: LifeBuoy,
          title: "Sustentação & AMS Especializado",
          description:
            "Atendimento alinhado a SLAs rígidos de negócio, garantindo manutenção preventiva, suporte a usuários e evolução contínua do sistema.",
        },
        {
          icon: DatabaseZap,
          title: "Migração e Modernização de Ambientes",
          description:
            "Planejamento e execução de projetos de migração de versões e infraestrutura com foco em zerar riscos de paralisação.",
        },
        {
          icon: FileCheck2,
          title: "Integração Fiscal e Governança",
          description:
            "Integração e ajuste de soluções fiscais ao seu ERP SAP, assegurando conformidade com as exigências tributárias brasileiras.",
        },
        {
          icon: Cloud,
          title: "Otimização de Performance e Nuvem",
          description:
            "Análise e ajuste de desempenho do banco de dados, gestão de acessos e transição segura para ambientes em nuvem.",
        },
      ]}
      highlightsTitle="Por Que Escolher a Flar para Sua Operação SAP?"
      highlights={[
        {
          title: "24+ Anos de Trajetória",
          description:
            "Vasta experiência em projetos de tecnologia para médias e grandes empresas.",
        },
        {
          title: "Equipe Especializada",
          description:
            "Profissionais com sólida bagagem técnica e visão de processos corporativos.",
        },
        {
          title: "Foco em Continuidade",
          description:
            "Metodologia voltada para a estabilidade da operação e cumprimento rigoroso de prazos.",
        },
      ]}
      ctaTitle="Otimize a Performance da Sua Operação SAP"
      ctaSubtitle="Converse com nossos especialistas e descubra como elevar a eficiência do seu ambiente ERP."
      ctaLabel="Agendar Avaliação de Ambiente SAP"
    />
  );
}
