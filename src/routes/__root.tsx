import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";
import { CONTACT, LINKS } from "@/lib/site";

function NotFoundComponent() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">Cette page s'est perdue en chemin</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        La page demandée n'existe pas ou a changé d'adresse. Voici où vous voulez probablement aller :
      </p>
      <ul className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {([
          { to: "/stem-camp", label: "STEM Camp Vacances" },
          { to: "/formations", label: "Formations" },
          { to: "/competitions", label: "Compétitions" },
          { to: "/contact", label: "Nous contacter" },
        ] as const).map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="flex min-h-14 items-center justify-between rounded-2xl border border-border bg-card px-5 font-semibold shadow-card hover:border-leaf"
            >
              {l.label} <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-cta px-6 font-semibold text-cta-foreground"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas pu s'afficher
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-input bg-background px-5 text-sm font-medium text-foreground"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "IvoiRobot",
  description:
    "Formations en robotique et STEM pour les jeunes ivoiriens : formations, compétitions et STEM Camp Vacances à Abidjan.",
  email: CONTACT.email,
  telephone: "+2250747355636",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressRegion: "Cocody",
    addressCountry: "CI",
  },
  sameAs: [LINKS.facebook, LINKS.linkedin],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0F1E33" },
      { property: "og:site_name", content: "IvoiRobot" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationJsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </QueryClientProvider>
  );
}
