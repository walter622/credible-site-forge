import { useEffect, useState } from "react";
import {
  Bot,
  Check,
  Clipboard,
  Play,
  Plug,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead/LeadForm";

export const VSL_EMBED_URL = "";

const risks = [
  {
    icon: Clipboard,
    title: "Dados entregues por copiar e colar",
    text: "A IA não precisa invadir nada. Contratos, dados de clientes e números financeiros chegam a ferramentas públicas pela área de transferência, sem passar por nenhum controle.",
  },
  {
    icon: Bot,
    title: "Agentes com acesso demais",
    text: "Um agente de IA conectado ao ERP ou ao CRM é uma identidade digital. Se ninguém define o que ele pode ler e executar, ninguém controla o risco.",
  },
  {
    icon: Plug,
    title: "APIs conectadas a modelos de IA",
    text: "Uma API mal protegida vira o caminho mais curto entre alguém de fora e os sistemas internos da sua empresa.",
  },
  {
    icon: Users,
    title: "Fornecedores usando IA com os seus dados",
    text: "Seus dados saem da empresa pelo contrato com terceiros, e a sua política de segurança nem fica sabendo.",
  },
];

const sessionItems = [
  ["Onde a IA já está sendo usada.", "Quais áreas, quais ferramentas e que tipo de dado está circulando."],
  ["O que está exposto.", "Aplicações, APIs e integrações visíveis de fora da empresa."],
  ["O que corrigir primeiro.", "Os riscos que pedem ação agora e os que podem esperar."],
  ["Quanto está em jogo.", "Uma estimativa, em reais ou em dólares, do dinheiro que pode estar exposto."],
  ["Por onde começar.", "Os primeiros passos para usar IA com governança, seja com a FLAR ou com o seu próprio time."],
];

const faqs = [
  ["É uma reunião de vendas disfarçada?", "Não. Quem conduz é o time de estratégia de cibersegurança, e o foco é o cenário da sua empresa. Se depois fizer sentido continuar, a gente conversa sobre isso em outro momento."],
  ["Preciso liberar acesso aos nossos sistemas?", "Não. A conversa parte do que você nos conta e do que já é visível de fora da sua empresa."],
  ["Ainda não temos política de uso de IA. Faz sentido participar?", "É o melhor momento. Fica muito mais fácil definir as regras antes de a IA se espalhar pela operação."],
  ["Minha empresa já tem equipe de TI. Ainda faz sentido?", "Sim. A FLAR trabalha junto com o time interno. Governança de IA envolve segurança, dados, acessos, jurídico e negócio, e raramente cabe inteira na rotina da TI."],
  ["Como vocês estimam o dinheiro em risco?", "A partir dos riscos identificados, o time traduz a exposição técnica em impacto possível para o negócio: operação parada, dados expostos, multas e contratos. É uma estimativa para apoiar a decisão, não um valor exato."],
  ["Por que pedem e-mail corporativo?", "A sessão é voltada a empresas, e o e-mail corporativo nos ajuda a preparar a conversa para o seu contexto."],
  ["Existe segurança 100%?", "Não, e desconfie de quem prometer isso. O que dá para ter é clareza sobre onde está o risco e o que corrigir primeiro."],
];

function scrollToForm() {
  document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{children}</h2>
    </div>
  );
}

function LeadButton() {
  return (
    <Button onClick={scrollToForm} className="h-auto min-h-12 whitespace-normal rounded-md px-6 py-3 text-base font-bold">
      Agendar minha sessão gratuita
    </Button>
  );
}

function Vsl() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-md border border-border bg-surface">
        {loaded && VSL_EMBED_URL ? (
          <iframe
            src={VSL_EMBED_URL}
            title="Vídeo sobre Shadow AI"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Button
            type="button"
            onClick={() => setLoaded(true)}
            variant="ghost"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-none text-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            aria-label="Reproduzir vídeo"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
            <span className="text-base font-semibold">Vídeo em breve</span>
          </Button>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Assista antes de agendar: em poucos minutos você entende o que é Shadow AI e por que ela já é um risco de segurança.
      </p>
    </div>
  );
}

export function LeadLandingPage() {
  const [formsVisible, setFormsVisible] = useState(true);

  useEffect(() => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, behavior: "instant" });
    const forms = Array.from(document.querySelectorAll<HTMLElement>("[data-lead-form]"));
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
      setFormsVisible(visible.size > 0);
    }, { threshold: 0.12 });
    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lead-theme min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5 lg:px-8">
          <span className="text-lg font-extrabold">FLAR Consulting</span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.72fr)] lg:items-start lg:gap-16">
            <div>
              <Eyebrow>GOVERNANÇA DE IA · CIBERSEGURANÇA</Eyebrow>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
                A IA entrou na sua empresa. <span className="text-primary">A segurança não entrou junto.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Em uma sessão gratuita de 1 hora, o time de estratégia de cibersegurança da FLAR mostra onde o uso de IA está expondo dados, acessos e sistemas da sua empresa, e ajuda a estimar quanto dinheiro isso pode colocar em risco, em reais ou em dólares.
              </p>
              <div className="mt-8"><Vsl /></div>
            </div>
            <aside className="rounded-md border border-border bg-surface p-5 shadow-elevated sm:p-7 lg:sticky lg:top-6">
              <h2 className="text-2xl font-bold">Agende sua sessão gratuita</h2>
              <p className="mb-6 mt-2 text-base leading-relaxed text-muted-foreground">1 hora com especialistas em segurança e IA. Sem apresentação comercial.</p>
              <LeadForm id="hero-form" footerText="Sem compromisso. Nosso time te chama no WhatsApp para marcar o horário." />
            </aside>
          </div>
        </section>

        <section aria-label="Números da FLAR" className="border-y border-border bg-surface">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
            {[["25+", "anos em tecnologia corporativa"], ["6.100+", "projetos entregues"], ["250+", "clientes atendidos"], ["Parceira oficial", "Claude Partner Network · Anthropic"]].map(([value, label]) => (
              <div key={label} className="border-border px-3 py-7 even:border-l lg:border-l lg:px-6 first:lg:border-l-0">
                <dt className="text-xl font-extrabold text-primary sm:text-2xl">{value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="O NOVO PONTO CEGO">Ninguém pediu autorização. A IA já está trabalhando com os dados da sua empresa.</SectionHeading>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Hoje de manhã, alguém do financeiro colou uma planilha em um chat de IA para resumir. O jurídico subiu um contrato para revisar. Um desenvolvedor conectou um modelo de IA a uma API interna para entregar mais rápido.</p>
            <p>Ninguém fez isso por mal. Cada um resolveu um problema. Mas juntos criaram uma parte da empresa que a TI, o CISO e a diretoria não conseguem ver.</p>
          </div>
          <blockquote className="mt-10 max-w-4xl border-l-4 border-primary pl-6 text-2xl font-bold leading-snug sm:text-3xl">O Shadow IT virou Shadow AI. E o que ninguém vê, ninguém protege.</blockquote>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading eyebrow="ONDE ESTÁ O RISCO">As brechas que a IA abre e a segurança tradicional não enxerga</SectionHeading>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {risks.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-md border border-border bg-background p-6 sm:p-8">
                  <Icon className="h-7 w-7 stroke-[1.5] text-primary" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-muted-foreground">Cada uma dessas brechas pode virar vazamento de dados, multa da LGPD, contrato quebrado ou operação parada. E quase nenhuma empresa sabe responder a pergunta que a diretoria vai fazer: quanto isso custaria?</p>
            <div className="mt-7 flex justify-center"><LeadButton /></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="A SESSÃO GRATUITA">Em 1 hora, você sai com respostas que hoje ninguém na sua empresa tem</SectionHeading>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ul className="space-y-6">
              {sessionItems.map(([title, text]) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-primary"><Check className="h-4 w-4" /></span>
                  <p className="text-base leading-relaxed"><strong>{title}</strong> <span className="text-muted-foreground">{text}</span></p>
                </li>
              ))}
            </ul>
            <aside className="rounded-md border border-primary/60 bg-primary/10 p-7 sm:p-9">
              <h3 className="text-2xl font-bold">Risco técnico, traduzido em dinheiro</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">A maioria das empresas discute segurança em termos técnicos, e o assunto nunca chega à diretoria. A FLAR traduz a exposição em impacto financeiro, e é isso que faz a decisão andar.</p>
            </aside>
          </div>
          <div className="mt-9"><LeadButton /></div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading eyebrow="COMO FUNCIONA">Simples, rápido e sem compromisso</SectionHeading>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {[["Você se cadastra.", "Leva menos de 30 segundos."], ["Nosso time te chama no WhatsApp.", "Para marcar o melhor dia e horário para você."], ["Sessão de 1 hora, online.", "Com o time de estratégia de cibersegurança da FLAR."]].map(([title, text], index) => (
                <li key={title} className="relative border-t border-border pt-6 md:border-t-0 md:pt-0">
                  <span className="font-mono text-sm text-primary">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="QUEM VAI CONVERSAR COM VOCÊ">25 anos em ambientes onde parar não é opção</SectionHeading>
          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-muted-foreground">A FLAR trabalha há mais de 25 anos com tecnologia corporativa e já entregou mais de 6.100 projetos em aplicações críticas, nuvem, APIs e cibersegurança. Hoje, governança de IA está no centro do nosso trabalho: ajudamos empresas a usar inteligência artificial em escala sem perder o controle sobre dados, acessos e riscos.</p>
          <div className="mt-10 rounded-md border border-primary/50 bg-primary/10 p-7 sm:p-10">
            <Eyebrow>PARCERIA OFICIAL</Eyebrow>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Parceira oficial da Anthropic</h3>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">A FLAR Consulting é parceira oficial da Claude Partner Network da Anthropic, com arquitetos em certificação CCAF.</p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">A Anthropic desenvolve o Claude, um dos modelos de IA mais usados por empresas no mundo. Fazer parte dessa rede significa trabalhar com IA a partir de quem constrói a tecnologia.</p>
          </div>
          <div className="mt-10">
            <p className="text-sm font-semibold text-muted-foreground">Tecnologias com que trabalhamos</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {["TrendAI", "Snyk", "Cequence", "Proofpoint", "E-trust"].map((name) => <div key={name} className="flex min-h-16 items-center justify-center rounded-md border border-border bg-surface px-3 text-center text-sm font-bold text-muted-foreground">{name}</div>)}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading eyebrow="PARA QUEM É">Essa conversa é para você se…</SectionHeading>
            <ul className="mt-9 max-w-4xl space-y-5">
              {["sua empresa já usa IA ou vai usar em escala nos próximos meses;", "você responde por segurança, tecnologia ou pelo negócio: CISO, CTO, gestor de TI ou diretoria;", "sua operação lida com dados sensíveis, sistemas críticos ou exigências regulatórias."].map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">Atendemos empresas de médio e grande porte, no Brasil e no exterior.</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8 border-t border-border">
            {faqs.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="border-t border-border bg-surface-2">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-24">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Uma hora para enxergar o que hoje ninguém na sua empresa está vendo.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Descubra onde a IA está expondo a sua empresa e quanto isso pode custar, antes que o problema apareça sozinho.</p>
            <div className="mx-auto mt-10 max-w-xl rounded-md border border-border bg-surface p-5 text-left sm:p-8">
              <LeadForm id="final-form" compact footerText="Gratuito e sem compromisso. Seus dados são usados apenas para agendar a sessão." />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 pb-28 text-sm text-muted-foreground md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>FLAR Consulting · Governança de IA e Cibersegurança</p>
          <div className="flex flex-wrap gap-4"><a href="#">Política de Privacidade</a><a href="#">Contato</a></div>
          <p>© 2026 FLAR Consulting. Todos os direitos reservados.</p>
        </div>
      </footer>

      {!formsVisible ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Button onClick={scrollToForm} className="h-12 w-full rounded-md text-base font-bold">Agendar minha sessão gratuita</Button>
        </div>
      ) : null}
    </div>
  );
}