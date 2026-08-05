import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { contact } from "@/data/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Flar Consulting" },
      {
        name: "description",
        content:
          "Como a Flar Consulting trata os dados enviados pelos formulários e canais de contato do site institucional.",
      },
      { property: "og:title", content: "Política de Privacidade | Flar Consulting" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais no site da Flar Consulting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Os dados informados nos formulários deste site estão seguros e serão utilizados
            exclusivamente para o nosso contato inicial com a sua empresa.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Dados coletados</h2>
          <p>
            Coletamos nome, e-mail corporativo, empresa, cargo e a solução de interesse indicada no
            formulário executivo.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Finalidade do uso</h2>
          <p>
            As informações são utilizadas para retorno comercial e agendamento de reuniões
            estratégicas com nossos consultores.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Seus direitos</h2>
          <p>
            Para solicitar acesso, correção ou exclusão dos seus dados, entre em contato pelo e-mail{" "}
            <a href={`mailto:${contact.email}`} className="text-primary">
              {contact.email}
            </a>{" "}
            ou pelo telefone {contact.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}
