export const contact = {
  phone: "(11) 4557-4888",
  phoneHref: "tel:+551145574888",
  whatsappHref: "https://wa.me/551145574888",
  email: "contato@flarconsulting.com.br",
  hours: "Seg–Sex: 8:30 às 17:30",
  address: "The Square - Bloco E, Sala 603 - Parque Frondoso, Cotia - SP, 06709-015",
};

export type SolutionLink = { title: string; to: string; description: string };

export const solutionGroups: { group: string; items: SolutionLink[] }[] = [
  {
    group: "Plataformas Estratégicas",
    items: [
      {
        title: "ERP SAP",
        to: "/erp-sap",
        description: "Sustentação, AMS, migração e evolução do ecossistema SAP.",
      },
      {
        title: "ERP Oracle",
        to: "/erp-oracle",
        description: "DBA, OCI, migração e modernização do Oracle ERP.",
      },
      {
        title: "Salesforce",
        to: "/salesforce",
        description: "Integração nativa entre CRM Salesforce e ERPs centrais.",
      },
    ],
  },
  {
    group: "Automação & Engenharia",
    items: [
      {
        title: "Hiperautomação & IA",
        to: "/hiperautomacao",
        description: "RPA e IA Generativa com parceria oficial Anthropic.",
      },
      {
        title: "Talentos & Desenvolvimento",
        to: "/talentos-e-desenvolvimento",
        description: "Alocação de especialistas e squads dedicadas.",
      },
    ],
  },
  {
    group: "Proteção & Conformidade",
    items: [
      {
        title: "Flar Cyber",
        to: "https://lp.flar.com.br/",
        description: "Cibersegurança estratégica, vulnerabilidades e SecOps.",
      },
      {
        title: "Governança & Fiscal",
        to: "/governanca-e-fiscal",
        description: "Inteligência tributária, compliance e gestão de riscos.",
      },
    ],
  },
];

export const institutionalStats = [
  { value: "24+", label: "Anos de mercado em tecnologia corporativa" },
  { value: "+6.100", label: "Projetos entregues em múltiplos setores" },
  { value: "+250", label: "Grandes empresas atendidas" },
  { value: "Anthropic", label: "Parceira oficial · Claude Partner Network (CCAF)" },
];

import gol from "@/assets/clients/gol.asset.json";
import senac from "@/assets/clients/senac.asset.json";
import motz from "@/assets/clients/motz.asset.json";
import deloitteClient from "@/assets/clients/deloitte-client.asset.json";
import automationHub from "@/assets/clients/automation-hub.asset.json";
import timbro from "@/assets/clients/timbro.asset.json";

export type CaseItem = {
  client: string;
  logo: string;
  category: string;
  title: string;
  text: string;
};

export const cases: CaseItem[] = [
  {
    client: "GOL",
    logo: gol.url,
    category: "BU – Inovação",
    title: "Automação para Balanceamento de Passageiros em Aeronaves",
    text: "Automatizamos o balanceamento de passageiros em aeronaves com RPA e IA, otimizando cálculos e relatórios. A solução aumentou a eficiência em 85%, reduziu 24 FTEs e melhorou a segurança e pontualidade dos voos. O resultado foi uma operação mais precisa, ágil e econômica.",
  },
  {
    client: "Senac",
    logo: senac.url,
    category: "BU – APPS",
    title: "AMS Oracle EBS e Synchro – Sustentação e Projetos em 88 filiais",
    text: "Com uma equipe especializada de 13 consultores Oracle e Synchro, enfrentamos um backlog de 600 chamados com 1.400 horas de baseline. Em 5 meses, reduzimos mais de 50% dos chamados e zeramos os do ano corrente. Ao final do primeiro ano, eliminamos o backlog com 98% de aprovação dos usuários.",
  },
  {
    client: "Motz",
    logo: motz.url,
    category: "BU – Fábrica de Tecnologias",
    title: "SQUADS Multidisciplinar",
    text: "Estruturamos SQUADS de alto nível de expertise em até 10 dias, com flexibilidade para ajustar perfis conforme a demanda. Essa agilidade viabilizou mais de 40 projetos de média e alta complexidade, acelerando a escalabilidade dos nossos produtos, receitas e valor de mercado.",
  },
  {
    client: "Deloitte",
    logo: deloitteClient.url,
    category: "BU – Inovação",
    title: "Alocação de Recursos Especialistas",
    text: "Em parceria com a Deloitte há mais de 20 anos, alocamos mais de 200 especialistas em projetos estratégicos. Atuamos com consultores SAP, Sychro, Oracle, Microsoft e Thomson Reuters. Uma colaboração sólida que impulsiona resultados em diversas frentes.",
  },
  {
    client: "Automation Hub",
    logo: automationHub.url,
    category: "Soluções Flar",
    title: "O Produto da FLAR que Virou Referência no Brasil",
    text: "Empresas com processos manuais e ineficientes transformaram suas operações com o Automation Hub da FLAR Consulting. A solução automatiza a gestão de contas e documentos com zero intervenção humana, reduzindo mais de 90% do esforço manual e eliminando erros. Com resultados imediatos, tornou-se um divisor de águas em eficiência e controle.",
  },
  {
    client: "Timbro",
    logo: timbro.url,
    category: "BU – Inovação",
    title: "Automação para Desembaraço Aduaneiro",
    text: "Automatizamos a análise de documentos de desembaraço aduaneiro com IA e RPA, reduzindo erros e atrasos em operações de comércio exterior. A solução aumentou a eficiência em 65% e eliminou 4 FTEs. Resultado: mais agilidade, precisão e economia no processo.",
  },
];

