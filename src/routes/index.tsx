import { createFileRoute } from "@tanstack/react-router";
import { LeadLandingPage } from "@/components/lead/LeadLandingPage";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Governança de IA e Cibersegurança | FLAR Consulting",
      },
      {
        name: "description",
        content:
          "A IA entrou na sua empresa. A segurança entrou junto? Sessão gratuita de 1 hora com o time de estratégia de cibersegurança da FLAR.",
      },
      {
        property: "og:title",
        content: "A IA entrou na sua empresa. A segurança não entrou junto.",
      },
      {
        property: "og:description",
        content:
          "A IA entrou na sua empresa. A segurança entrou junto? Sessão gratuita de 1 hora com o time de estratégia de cibersegurança da FLAR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LeadLandingPage,
});
