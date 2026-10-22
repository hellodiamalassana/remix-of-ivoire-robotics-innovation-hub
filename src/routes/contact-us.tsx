import { createFileRoute, redirect } from "@tanstack/react-router";

// Ancienne adresse WordPress : redirection permanente (301) vers la nouvelle page.
export const Route = createFileRoute("/contact-us")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", statusCode: 301 });
  },
});
