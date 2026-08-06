import { createFileRoute } from "@tanstack/react-router";
import { CloudCog, Database, ScrollText, Wallet } from "lucide-react";
import { SolutionPage } from "@/components/site/SolutionPage";

type Line = {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  services: { title: string; items: string[] }[];
};

const lines: Line[] = [
  {
    id: "oracle-cloud",
    name: "Oracle Cloud",
    tagline: "Nuvem corporativa com operação assistida de ponta a ponta",
    intro:
      "Com mais de duas décadas de experiência, entregamos soluções Oracle Cloud com as melhores práticas de mercado — da implementação à evolução contínua, lado a lado com o time do cliente.",
    services: [
      {
        title: "Implementação",
        items: [
          "Especialistas dedicados à implementação eficiente das soluções Oracle Cloud.",
          "Transição para a nuvem sem interrupções na operação.",
        ],
      },
      {
        title: "Suporte",
        items: [
          "Suporte contínuo para manter as soluções operando em desempenho máximo.",
          "Equipe disponível para dúvidas e incidentes do ambiente.",
        ],
      },
      {
        title: "Manutenção",
        items: [
          "Ambiente sempre atualizado e otimizado.",
          "Health checks e atualizações regulares do ambiente Cloud.",
        ],
      },
      {
        title: "Melhorias contínuas",
        items: [
          "Evolução permanente das soluções conforme a mudança do negócio.",
          "Adaptação do ambiente a novas necessidades operacionais.",
        ],
      },
    ],
  },
  {
    id: "oracle-ebs",
    name: "Oracle EBS",
    tagline: "Suporte especializado e personalizado para o E-Business Suite",
    intro:
      "Quando se trata de implementar e otimizar soluções Oracle, experiência e conhecimento especializado fazem toda a diferença. Atuamos como parceira estratégica de longo prazo do seu ambiente EBS.",
    services: [
      {
        title: "Equipe certificada",
        items: [
          "Time experiente e certificado para implementação eficiente e eficaz.",
          "Da configuração inicial à personalização e integração.",
        ],
      },
      {
        title: "Gama completa de serviços",
        items: [
          "Suporte contínuo, manutenção e alocação de recursos.",
          "Treinamento de usuários e sustentação de longo prazo.",
        ],
      },
      {
        title: "Recursos adicionais",
        items: [
          "Ferramentas avançadas de análise e modelos de dados pré-configurados.",
          "Melhores práticas de negócio para decisões mais informadas.",
        ],
      },
      {
        title: "Parceria estratégica",
        items: [
          "Relacionamento de longo prazo com foco em valor contínuo.",
          "Ambiente Oracle operando de forma otimizada ao longo do tempo.",
        ],
      },
    ],
  },
  {
    id: "oracle-jde",
    name: "Oracle JD Edwards",
    tagline: "Implementação, sustentação e evolução do ERP JD Edwards",
    intro:
      "Cobrimos todo o ciclo de vida do JD Edwards, do projeto de implantação à consultoria estratégica, alinhando o ERP aos objetivos de negócio de longo prazo.",
    services: [
      {
        title: "Implementação eficiente",
        items: [
          "Implementação completa e personalizada conforme as necessidades da empresa.",
          "Planejamento e execução de projetos dentro do prazo.",
        ],
      },
      {
        title: "Suporte especializado",
        items: [
          "Suporte técnico abrangente para funcionamento contínuo do sistema.",
          "Resolução rápida e eficaz de problemas técnicos.",
        ],
      },
      {
        title: "Melhorias contínuas",
        items: [
          "Identificação e implementação de melhorias de desempenho e funcionalidade.",
          "Atualizações regulares alinhadas às melhores práticas.",
        ],
      },
      {
        title: "Customizações personalizadas",
        items: [
          "Desenvolvimento de customizações para requisitos exclusivos.",
          "ERP refletindo os processos e fluxos reais do negócio.",
        ],
      },
      {
        title: "Treinamento e capacitação",
        items: [
          "Treinamento de usuários finais e administradores do sistema.",
          "Capacitação contínua sobre novas funcionalidades.",
        ],
      },
      {
        title: "Consultoria estratégica",
        items: [
          "Orientação de estratégia de uso alinhada aos objetivos de negócio.",
          "Recomendações proativas para extrair o máximo do JD Edwards.",
        ],
      },
    ],
  },
];

function OracleLines() {
  return (
    <section id="linhas-oracle" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Linhas de solução
      </span>
      <h2 className="mt-4 max-w-3xl text-2xl font-bold sm:text-3xl">
        Cada Serviço Oracle Detalhado por Plataforma
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Atuamos nas três frentes centrais do ecossistema Oracle, com escopo definido por
        plataforma e times certificados em cada uma delas.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Linhas Oracle">
        {lines.map((line) => (
          <a
            key={line.id}
            href={`#${line.id}`}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {line.name}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {lines.map((line, index) => (
          <article key={line.id} id={line.id} className="scroll-mt-28">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-5">
              <span className="font-display text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold sm:text-2xl">{line.name}</h3>
              <p className="text-sm text-muted-foreground">{line.tagline}</p>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              {line.intro}
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {line.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
                >
                  <h4 className="text-base font-semibold">{service.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


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
    >
      <OracleLines />
    </SolutionPage>

  );
}
