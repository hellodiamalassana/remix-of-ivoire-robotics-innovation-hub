import { createFileRoute, redirect } from "@tanstack/react-router";

// Ancienne adresse WordPress : redirection permanente (301) vers la nouvelle page.
export const Route = createFileRoute("/formations-dans-les-ecoles-partenaires")({
  beforeLoad: () => {
    throw redirect({ to: "/formations", statusCode: 301 });
  },
});
