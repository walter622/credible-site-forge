import { createFileRoute } from "@tanstack/react-router";
import { Blocks, Headphones, RefreshCcw, Workflow } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/salesforce")({
  head: () => ({
    meta: [
      { title: "Consultoria Salesforce: Integração CRM + ERP | Flar Consulting" },
      {
        name: "description",
        content:
          "Implementação, integração e evolução do Salesforce conectado a SAP e Oracle para automatizar a operação comercial B2B.",
      },
      { property: "og:title", content: "Consultoria Salesforce | Flar Consulting" },
      {
        property: "og:description",
        content: "Conecte seu CRM aos ERPs e automatize a gestão de clientes de ponta a ponta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/salesforce" },
    ],
    links: [{ rel: "canonical", href: "/salesforce" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SolutionPage
      breadcrumb="Salesforce"
      eyebrow="Plataformas Estratégicas"
      title="Consultoria Salesforce: Integração e Automação para Sua Operação Comercial"
      subtitle="Implementação, integração e evolução contínua da plataforma Salesforce. Conecte seu CRM aos ERPs e automatize a gestão de clientes de ponta a ponta."
      primaryCta="Falar com Consultor Salesforce"
      secondaryCta="Ver Integrações com ERP"
      contextTitle="O CRM Como Elemento Central da Estratégia Comercial"
      contextText="A plataforma Salesforce atinge seu máximo potencial quando integrada aos sistemas de gestão centrais (ERPs) da empresa. A Flar Consulting conecta o seu CRM ao SAP e Oracle, garantindo visibilidade de dados em tempo real, processos automatizados e maior eficiência para as equipes de vendas e atendimento."
      cardsTitle="Serviços para a Plataforma Salesforce"
      cards={[
        {
          icon: Blocks,
          title: "Implantação e Customização",
          description:
            "Ajuste do Salesforce às regras de negócio e processos comerciais específicos da sua empresa.",
        },
        {
          icon: RefreshCcw,
          title: "Integração CRM + ERP",
          description:
            "Conexão entre Salesforce, SAP e Oracle para automação do fluxo de pedidos, faturamento e sincronização de dados.",
        },
        {
          icon: Workflow,
          title: "Automação do Atendimento e Vendas",
          description:
            "Criação de fluxos automáticos para otimizar o ciclo de vendas e melhorar a experiência de atendimento do cliente.",
        },
        {
          icon: Headphones,
          title: "Sustentação e Evolução da Plataforma",
          description:
            "Suporte técnico e consultivo contínuo para acompanhar o crescimento do seu negócio e novos requisitos de uso.",
        },
      ]}
      highlightsTitle="Benefícios Práticos"
      highlights={[
        {
          title: "Visão Unificada",
          description: "Acesso fácil aos dados do cliente em uma única estrutura corporativa.",
        },
        {
          title: "Produtividade Aumentada",
          description: "Eliminação de tarefas manuais de digitação de dados entre sistemas.",
        },
        {
          title: "Dados em Tempo Real",
          description:
            "Visibilidade imediata entre CRM e ERPs para decisões comerciais mais rápidas.",
        },
      ]}
      ctaTitle="Conecte o Salesforce à Inteligência Operacional do Seu Negócio"
      ctaSubtitle="Solicite um diagnóstico de integração e veja como acelerar seus processos comerciais."
      ctaLabel="Agendar Reunião sobre Salesforce"
    />
  );
}
