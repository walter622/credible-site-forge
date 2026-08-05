# Site Institucional Flar Consulting — Reestruturação

Site institucional premium em português, com 10 páginas, seguindo exatamente a arquitetura de informação e o copy do documento da Omnia. Identidade visual herdada da LP oficial (lp.flar.com.br).

## Identidade visual

Tokens extraídos da LP de referência:

- Fundo: verde-escuro quase preto (`oklch(18% .012 160)`), superfícies em `22%` e `26%`
- Primária: verde-limão `oklch(84% .17 128)` com glow `oklch(92% .2 128)`
- Texto: `oklch(97% .005 150)`, secundário `oklch(72% .012 160)`
- Tipografia: **Space Grotesk** (títulos) + **Inter** (corpo), via `<link>` no root
- Raio 0.75rem, animações sutis (fade/slide on scroll, marquee de setores, hover em cards)
- Logo branco enviado no header e footer; favicon gerado a partir dele

## Arquitetura de páginas

| URL | Página |
| --- | --- |
| `/` | Home |
| `/erp-sap` | ERP SAP |
| `/erp-oracle` | ERP Oracle |
| `/salesforce` | Salesforce |
| `/hiperautomacao` | Hiperautomação & IA |
| `/talentos-e-desenvolvimento` | Talentos & Desenvolvimento |
| `/flar-cyber` | Flar Cyber |
| `/governanca-e-fiscal` | Governança & Fiscal |
| `/quem-somos` | Quem Somos |
| `/casos-de-sucesso` | Casos de Sucesso |
| `/blog` | Hub de Inteligência |
| `/contato` | Contato |

## Navegação

- Header fixo com logo, megamenu **Soluções** em 3 grupos (Plataformas Estratégicas / Automação & Engenharia / Proteção & Conformidade), links Sobre a Flar, Casos de Sucesso, Insights, e CTA fixo **Agendar Reunião Estratégica**. Menu mobile em drawer.
- Breadcrumbs em todas as páginas internas.
- Footer em 4 colunas (Sobre + selo 24+ anos e Parceria Anthropic | Soluções | Institucional | Contato) e linha final com direitos, Termos e Privacidade.
- Botão flutuante de WhatsApp/contato sempre visível.

## Home (ordem dos blocos)

1. **Hero** — H1 "Tecnologia Estratégica, Inteligência Artificial e Cibersegurança para Operações Corporativas", subtítulo dos 24 anos, CTA primário e secundário, painel tático flutuante (Sistemas Online, Processos Automatizados por IA, Proteção de Perímetro Ativa) e selo de autoridade.
2. **Barra institucional** — slider contínuo de setores atendidos (Varejo, Indústria, Logística, Serviços, Finanças).
3. **Matriz de desafios** — grid de 4 cards Desafio → Solução → Impacto.
4. **Ecossistema de soluções** — 4 pilares com ícones e links, CTA "Conhecer Nossas Soluções".
5. **Diferenciais competitivos** — grid de 4 destaques (24+ anos, Parceria Anthropic/CCAF, Visão integrada Flar Cyber, Atendimento sênior com SLA).
6. **Casos de sucesso** — carrossel de cards executivos (3 projetos do documento).
7. **Números institucionais** — 24+ anos, +6.100 projetos, +250 empresas, Parceria Anthropic.
8. **CTA final + formulário executivo** — Nome, E-mail Corporativo, Empresa, Cargo, Solução de Interesse, nota de privacidade.

## Páginas de solução (7)

Todas seguem o mesmo esqueleto do documento, com o copy literal:
Hero (H1 + subtítulo + 2 CTAs) → bloco de contexto → grid de cards de serviços → bloco de diferenciais/benefícios → seção de conversão com CTA próprio. Flar Cyber destaca a oferta de **Assessoria Gratuita de 1 Hora**; Hiperautomação inclui o diagrama de fluxo (Captura → Análise IA → Execução no ERP); Talentos inclui a tabela comparativa dos dois modelos e as 4 especialidades técnicas.

## Institucional

- **Quem Somos** — história, números de impacto em destaque, princípios de atuação, CTA.
- **Casos de Sucesso** — filtro por categoria (Todos / ERPs & Plataformas / Hiperautomação & IA / Flar Cyber / Talentos) e os 3 projetos em formato Desafio / Atuação / Resultado.
- **Hub de Inteligência (/blog)** — layout de listagem estático com cards de artigos direcionados a C-Level, pronto para receber conteúdo real depois.
- **Contato** — formulário executivo (visual, sem backend) + dados reais:
  (11) 4557-4888 · contato@flarconsulting.com.br · Seg–Sex 8:30–17:30 · The Square, Bloco E, Sala 603 — Parque Frondoso, Cotia/SP, 06709-015.

## Técnico

- Rotas TanStack em `src/routes/`, cada uma com `head()` próprio (title, description, og:title, og:description, canonical).
- Tokens em `src/styles.css` (`@theme inline` + `:root`), sem cores hardcoded nos componentes.
- Componentes reutilizáveis: `Header`, `MegaMenu`, `Footer`, `Breadcrumbs`, `Hero`, `SolutionCard`, `StatsBand`, `CaseCard`, `CTASection`, `ExecutiveForm`, `SectorMarquee`.
- Ícones Lucide, animações leves em CSS/Motion, hierarquia H1/H2/H3 correta, imagens com alt, foco visível e contraste AA.
- Formulários são visuais nesta etapa (sem envio real); podemos ligar ao Lovable Cloud depois.
- Conteúdo 100% derivado do documento — nada inventado.
