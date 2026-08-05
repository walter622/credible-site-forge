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
        to: "/flar-cyber",
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

export const cases = [
  {
    category: "ERPs & Plataformas",
    title: "Otimização e Evolução de ERP Corporativo",
    challenge:
      "Necessidade de modernização do ambiente ERP com foco em estabilidade e mantendo a operação em funcionamento contínuo.",
    action:
      "Planejamento arquitetural, otimização de banco de dados e execução coordenada por fases.",
    result:
      "Estabilidade de sistemas, aumento de desempenho e melhoria na rotina de fechamento contábil.",
  },
  {
    category: "Flar Cyber",
    title: "Proteção de Perímetro e Integrações Digitais",
    challenge:
      "Identificação e correção de riscos em interfaces de programação (APIs) e conectividade externa.",
    action:
      "Diagnóstico com a plataforma Flar Cyber, mapeamento da superfície de ataque externa e aplicação de camadas de proteção.",
    result:
      "Proteção ativa do ambiente externo e garantia de continuidade operacional nas integrações.",
  },
  {
    category: "Hiperautomação & IA",
    title: "Automação Inteligente de Processos Administrativos",
    challenge:
      "Alto volume de tarefas manuais de digitação e validação de documentos fiscais e operacionais.",
    action:
      "Implantação de solução de Hiperautomação (RPA + Inteligência Artificial) conectada ao ERP.",
    result:
      "Redução drástica do tempo de processamento de documentos e eliminação de erros manuais.",
  },
];
