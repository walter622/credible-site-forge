import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/flar-cyber")({
  beforeLoad: () => {
    throw redirect({ href: "https://lp.flar.com.br/" });
  },
  component: () => null,
});
