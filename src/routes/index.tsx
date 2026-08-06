import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Layers,
  ShieldCheck,
  Users,
  Wifi,
} from "lucide-react";
import { ExecutiveForm } from "@/components/site/ExecutiveForm";
import { SmartLink } from "@/components/site/SmartLink";
import { institutionalStats, cases } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Flar Consulting: Tecnologia, IA e Cibersegurança Corporativa",
      },
      {
        name: "description",
        content:
          "Há 24+ anos sustentando, automatizando e protegendo a infraestrutura digital de médias e grandes empresas: ERP SAP e Oracle, Salesforce, hiperautomação com IA e Flar Cyber.",
      },
      {
        property: "og:title",
        content: "Flar Consulting: Tecnologia Estratégica, IA e Cibersegurança",
      },
      {
        property: "og:description",
        content:
          "24+ anos, +6.100 projetos e +250 grandes empresas atendidas. Ecossistema completo de tecnologia e segurança corporativa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Flar Consulting",
          description:
            "Tecnologia estratégica, inteligência artificial e cibersegurança para operações corporativas.",
          telephone: "+55 11 4557-4888",
          email: "contato@flarconsulting.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "The Square - Bloco E, Sala 603 - Parque Frondoso",
            addressLocality: "Cotia",
            addressRegion: "SP",
            postalCode: "06709-015",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const panel = [
  { icon: Wifi, label: "Sistemas online", value: "Monitoramento contínuo" },
  { icon: Bot, label: "Processos automatizados por IA", value: "RPA + Claude" },
  { icon: ShieldCheck, label: "Proteção de perímetro ativa", value: "Flar Cyber" },
];

const sectors = ["Varejo", "Indústria", "Logística", "Serviços", "Finanças"];

const challenges = [
  {
    challenge: "Nossos ERPs (SAP/Oracle) exigem sustentação contínua e evolução.",
    solution: "Sustentação, migração e otimização de arquitetura de sistemas centrais.",
    impact: "Eficiência operacional sem risco de paralisação e otimização do TCO.",
  },
  {
    challenge: "Processos manuais travam o crescimento da empresa.",
    solution: "Hiperautomação com RPA e IA Generativa integrada aos sistemas corporativos.",
    impact: "Ganho de produtividade e redução drástica de custos operacionais.",
  },
  {
    challenge: "Riscos cibernéticos ameaçam a continuidade do negócio.",
    solution: "Cibersegurança preditiva, SecOps e governança contínua (Flar Cyber).",
    impact: "Proteção ativa do código à nuvem, garantindo a continuidade operacional.",
  },
  {
    challenge: "Falta de profissionais qualificados para acelerar projetos.",
    solution: "Alocação de especialistas de alta performance e engenharia sob medida.",
    impact: "Formação rápida de equipes e entregas garantidas com governança.",
  },
];

const pillars = [
  {
    icon: Layers,
    title: "Plataformas Estratégicas",
    text: "ERP SAP, ERP Oracle e Salesforce.",
    to: "/erp-sap",
  },
  {
    icon: BrainCircuit,
    title: "Automação & Desenvolvimento",
    text: "Hiperautomação (RPA + IA) e Engenharia de Software.",
    to: "/hiperautomacao",
  },
  {
    icon: ShieldCheck,
    title: "Flar Cyber & Governança",
    text: "Cibersegurança estratégica, governança e inteligência fiscal.",
    to: "https://lp.flar.com.br/",
  },
  {
    icon: Users,
    title: "Talentos & Alocação Especializada",
    text: "Profissionais seniores e squads prontas para impulsionar seus projetos.",
    to: "/talentos-e-desenvolvimento",
  },
];

const differentials = [
  {
    title: "24+ Anos de Trajetória Corporativa",
    text: "Domínio profundo das exigências e complexidades do mercado brasileiro, com mais de 6.100 projetos entregues.",
  },
  {
    title: "Parceria Oficial Anthropic (Claude Partner Network)",
    text: "Vanguarda em Inteligência Artificial Generativa com profissionais em certificação CCAF para criar soluções seguras e eficientes.",
  },
  {
    title: "Visão Integrada de Cibersegurança (Flar Cyber)",
    text: "Proteção estratégica conectada ao código, à nuvem e aos ERPs, reduzindo exposição a riscos antes que virem crises.",
  },
  {
    title: "Atendimento Sênior Focado em Resultados",
    text: "Equipes altamente capacitadas e compromisso com o cumprimento de SLAs de negócio.",
  },
];

function Home() {
  return (
    <div>
      {/* BLOCO 1 — Hero */}
      <section className="hero-surface relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Activity className="h-3.5 w-3.5" />
              Ecossistema integrado de tecnologia e cibersegurança
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[3.4rem]">
              Tecnologia Estratégica, Inteligência Artificial e Cibersegurança para Operações
              Corporativas
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Há mais de 24 anos sustentando, automatizando e protegendo a infraestrutura digital das
              maiores empresas do Brasil.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar Reunião Estratégica
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://lp.flar.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Solicitar Assessoria Gratuita de 1 Hora
              </a>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              24+ Anos de Mercado • +6.100 Projetos Entregues • +250 Clientes Atendidos • Parceira
              Oficial Anthropic (Claude Partner Network — Certificação CCAF)
            </p>
          </div>

          <div className="animate-rise rounded-3xl border border-border bg-surface/80 p-6 shadow-elevated backdrop-blur-sm lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Painel operacional
            </p>
            <ul className="mt-6 space-y-4">
              {panel.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                    <span
                      className="animate-pulse-soft ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* BLOCO 2 — Barra institucional */}
      <section className="border-y border-border bg-surface py-10">
        <h2 className="mx-auto max-w-7xl px-5 text-center text-sm text-muted-foreground lg:px-8">
          Experiência comprovada em projetos de alta complexidade para médias e grandes empresas
        </h2>
        <div className="mt-7 overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-14 pr-14">
            {[...sectors, ...sectors, ...sectors, ...sectors].map((sector, i) => (
              <span
                key={`${sector}-${i}`}
                className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground/70"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 3 — Matriz de desafios */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
          Os Desafios na Gestão Tecnológica Moderna
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Identifique o momento da sua empresa e veja como a Flar atua.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {challenges.map((item) => (
            <article
              key={item.challenge}
              className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50 hover:bg-surface-2"
            >
              <h3 className="font-display text-lg font-semibold leading-snug">
                “{item.challenge}”
              </h3>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Solução estratégica Flar
                  </dt>
                  <dd className="mt-1">{item.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Impacto gerado
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{item.impact}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* BLOCO 4 — Ecossistema */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
            Um Ecossistema Completo para a Evolução do Seu Negócio
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Quatro pilares de atuação integrados para acelerar e proteger sua corporação.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <SmartLink
                  key={pillar.title}
                  to={pillar.to}
                  className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-primary/60"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Conhecer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </SmartLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOCO 5 — Diferenciais */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
          Por Que a Flar Consulting é a Parceira Certa para o Seu Negócio?
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Unimos mais de duas décadas de tradição corporativa à vanguarda em tecnologia e segurança.
        </p>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-border bg-surface p-7">
              <span className="font-display text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BLOCO 6 — Casos de sucesso */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
                Resultados Reais para a Alta Gestão
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Conheça histórias de sucesso de empresas que evoluíram sua tecnologia e segurança com
                a Flar.
              </p>
            </div>
            <Link
              to="/casos-de-sucesso"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Ver todos os casos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {cases.map((item) => (
              <article
                key={item.title}
                className="w-[86vw] shrink-0 snap-start rounded-2xl border border-border bg-background p-7 sm:w-[24rem] lg:w-auto"
              >
                <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.category}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.challenge}
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-primary">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Números institucionais */}
      <section className="hero-surface relative overflow-hidden border-y border-border">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
            Números que Comprovam Nossa Autoridade
          </h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-primary/25 bg-surface/80 p-8 shadow-elevated backdrop-blur-sm transition-colors hover:border-primary/60"
              >
                <dt className="font-display text-4xl font-bold leading-none text-primary lg:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Parceiros estratégicos */}
      <Partners />


      {/* BLOCO 7 — CTA final + formulário */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Pronto para Elevar a Eficiência e a Segurança da Sua Operação?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Fale com nossos consultores ou solicite uma Assessoria Gratuita de 1 Hora com análise
              do seu ambiente externo. O próximo passo para a evolução e proteção da sua tecnologia
              começa aqui.
            </p>
          </div>
          <ExecutiveForm />
        </div>
      </section>
    </div>
  );
}
