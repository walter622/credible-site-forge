import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, KeyRound, Landmark, Lock } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/governanca-e-fiscal")({
  head: () => ({
    meta: [
      { title: "Governança Corporativa, Compliance e Fiscal | Flar Consulting" },
      {
        name: "description",
        content:
          "Inteligência tributária integrada aos ERPs, matriz de segregação de funções, governança de dados e gestão de riscos para o C-Level.",
      },
      { property: "og:title", content: "Governança, Compliance e Inteligência Fiscal" },
      {
        property: "og:description",
        content: "Conformidade tributária e regulatória integrada aos seus ERPs centrais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/governanca-e-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/governanca-e-fiscal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SolutionPage
      breadcrumb="Governança & Fiscal"
      eyebrow="Proteção & Conformidade"
      title="Governança Corporativa, Compliance e Inteligência Fiscal"
      subtitle="Assegure a conformidade da sua empresa com as exigências tributárias e regulatórias. Integre a inteligência fiscal e a gestão de riscos aos seus ERPs centrais."
      primaryCta="Falar com Especialista em Governança"
      secondaryCta="Ver Soluções Fiscais"
      contextTitle="Conformidade e Controle para a Alta Gestão"
      contextText="O ambiente tributário e regulatório brasileiro exige atenção contínua. Para diretorias e conselhos de administração, inconsistências fiscais ou falhas na gestão de permissões trazem riscos operacionais e financeiros. A Flar Consulting entrega soluções tecnológicas que automatizam a conformidade e protegem a empresa."
      cardsTitle="Soluções Integradas de Governança e Fiscal"
      cards={[
        {
          icon: Landmark,
          title: "Inteligência e Conformidade Fiscal (Tax Compliance)",
          description:
            "Automação de apurações, validação de obrigações acessórias e auditoria fiscal preventiva integrada aos ERPs SAP e Oracle.",
        },
        {
          icon: KeyRound,
          title: "Governança de Acessos e Matriz de Segregação de Funções (SoD)",
          description:
            "Mapeamento e controle dos perfis de acesso em sistemas corporativos para evitar desvios de conduta e uso indevido de permissões.",
        },
        {
          icon: Lock,
          title: "Governança de Dados Corporativos",
          description:
            "Organização de processos e regras internas para a proteção de dados pessoais e gestão segura de informações sensíveis.",
        },
        {
          icon: AlertTriangle,
          title: "Gestão de Riscos Tecnológicos e Processos",
          description:
            "Mapeamento de pontos vulneráveis na operação tecnológica com relatórios voltados para a diretoria e comitês de auditoria.",
        },
      ]}
      highlightsTitle="Benefícios Concretos"
      highlights={[
        {
          title: "Tranquilidade Tributária",
          description: "Redução do risco de divergências fiscais e autuações.",
        },
        {
          title: "Controle Operacional",
          description: "Processos transparentes, organizados e auditáveis.",
        },
        {
          title: "Visão para o C-Level",
          description:
            "Relatórios voltados para a diretoria e comitês de auditoria, com riscos priorizados.",
        },
      ]}
      ctaTitle="Fortaleça a Governança e a Gestão Fiscal da Sua Empresa"
      ctaSubtitle="Agende uma conversa com nossos consultores especializados em processos fiscais e governança."
      ctaLabel="Solicitar Contato de Governança"
    />
  );
}
