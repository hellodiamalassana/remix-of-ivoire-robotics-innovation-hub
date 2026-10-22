import { createFileRoute, redirect } from "@tanstack/react-router";

// Ancienne adresse WordPress : redirection permanente (301) vers la nouvelle page.
export const Route = createFileRoute("/stem-camps-vacances")({
  beforeLoad: () => {
    throw redirect({ to: "/stem-camp", statusCode: 301 });
  },
});
