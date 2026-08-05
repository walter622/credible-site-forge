import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ExecutiveForm } from "@/components/site/ExecutiveForm";
import { contact } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato: Agende uma Reunião Estratégica | Flar Consulting" },
      {
        name: "description",
        content:
          "Fale com os consultores da Flar Consulting em Cotia/SP ou solicite a assessoria gratuita de 1 hora em cibersegurança.",
      },
      { property: "og:title", content: "Contato | Flar Consulting" },
      {
        property: "og:description",
        content: "Agende uma reunião estratégica com nossos consultores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Page,
});

function Page() {
  const details = [
    { icon: Phone, label: "Telefone / WhatsApp", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "E-mail corporativo", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: "Horário de atendimento", value: contact.hours },
    { icon: MapPin, label: "Endereço", value: contact.address },
  ];

  return (
    <div>
      <Breadcrumbs items={[{ label: "Contato" }]} />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Fale com a Flar
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.14] sm:text-4xl">
              Pronto para Elevar a Eficiência e a Segurança da Sua Operação?
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Fale com nossos consultores ou solicite uma Assessoria Gratuita de 1 Hora com análise
              do seu ambiente externo.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed">
                        {item.href ? (
                          <a href={item.href} className="transition-colors hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-bold">Formulário executivo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha os dados e nossa equipe retornará com o próximo passo.
            </p>
            <div className="mt-6">
              <ExecutiveForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
