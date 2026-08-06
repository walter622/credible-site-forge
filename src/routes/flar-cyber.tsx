import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/flar-cyber")({
  beforeLoad: () => {
    throw redirect({ href: "https://lp.flar.com.br/" });
  },
  component: () => null,
});


function Page() {
  return (
    <SolutionPage
      breadcrumb="Flar Cyber"
      eyebrow="Proteção & Conformidade"
      title="Flar Cyber: Cibersegurança Estratégica e Proteção do Código à Nuvem"
      subtitle="Proteja a continuidade operacional, os dados e a reputação do seu negócio. Soluções completas em gestão de vulnerabilidades, segurança em nuvem, proteção de APIs e governança."
      primaryCta="Solicitar Assessoria Gratuita de 1 Hora"
      secondaryCta="Conhecer Pilares Flar Cyber"
      contextTitle="Cibersegurança Como Pilar de Continuidade do Negócio"
      contextText="A cibersegurança deixou de ser uma pauta exclusiva do departamento de TI e tornou-se um tema de governança e faturamento corporativo. A Flar Cyber atua de forma preventiva para identificar, priorizar e corrigir vulnerabilidades no seu ambiente digital antes que elas afetem a sua operação."
      cardsTitle="Pilares de Atuação Flar Cyber"
      cards={[
        {
          icon: Radar,
          title: "Gestão de Vulnerabilidades e Superfície de Ataque Externa",
          description:
            "Mapeamento contínuo de portas abertas, falhas em nuvem e aplicações web com a visão de um potencial atacante.",
        },
        {
          icon: ScanSearch,
          title: "Segurança de APIs e Proteção de Código",
          description:
            "Identificação de falhas no código de sistemas corporativos e proteção de interfaces de programação que conectam sua empresa a parceiros.",
        },
        {
          icon: ShieldAlert,
          title: "Operações de Segurança Gerenciadas (SecOps com IA)",
          description:
            "Monitoramento e resposta a incidentes com apoio de Inteligência Artificial para conter ameaças com agilidade.",
        },
        {
          icon: ShieldCheck,
          title: "Segurança em Nuvem e Dispositivos Finais",
          description:
            "Proteção para infraestruturas de nuvem pública, híbrida e ambientes de trabalho corporativos, garantindo controle rígido de acessos.",
        },
      ]}
      highlightsTitle="Abordagem Preventiva e Estratégica"
      highlights={[
        {
          title: "Visão do Todo",
          description: "Segurança integrada aos ERPs, sistemas web, aplicativos e infraestrutura.",
        },
        {
          title: "Atuação Diagnóstica",
          description:
            "Foco na eliminação dos riscos reais de paralisação e exposição de dados.",
        },
        {
          title: "Governança Contínua",
          description:
            "Identificação, priorização e correção de vulnerabilidades antes que afetem a operação.",
        },
      ]}
      ctaTitle="Sua Empresa Conhece as Vulnerabilidades Expostas no Seu Ambiente Externo?"
      ctaSubtitle="Solicite uma Assessoria Gratuita de 1 Hora com nossos especialistas em cibersegurança e receba uma análise inicial da exposição externa do seu negócio."
      ctaLabel="Solicitar Assessoria Gratuita de 1h"
    />
  );
}
