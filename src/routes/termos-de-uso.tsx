import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { contact } from "@/data/site";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Flar Consulting" },
      {
        name: "description",
        content:
          "Condições de uso do site institucional da Flar Consulting e do conteúdo nele publicado.",
      },
      { property: "og:title", content: "Termos de Uso | Flar Consulting" },
      {
        property: "og:description",
        content: "Condições de uso do site institucional da Flar Consulting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Termos de Uso" }]} />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-bold sm:text-4xl">Termos de Uso</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">Uso do site</h2>
          <p>
            O conteúdo deste site tem caráter institucional e informativo sobre as soluções de
            tecnologia, automação, cibersegurança e governança da Flar Consulting.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Propriedade intelectual</h2>
          <p>
            Marcas, textos, layout e demais elementos aqui publicados pertencem à Flar Consulting e
            não podem ser reproduzidos sem autorização prévia.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser encaminhadas para{" "}
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
