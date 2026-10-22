import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, Newspaper } from "lucide-react";

import { CtaBand, PageHeader } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/actualites")({
  head: () =>
    seo({
      title: "Actualités",
      description:
        "Les dernières nouvelles d'IvoiRobot : ateliers, STEM Camps, compétitions de robotique et partenariats avec les écoles d'Abidjan.",
      path: "/actualites",
    }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Actualités"
        title="La vie de nos ateliers"
        intro="Retours en images, temps forts des STEM Camps, résultats de compétitions et nouveaux partenariats."
      />
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-border bg-card p-10 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-leaf-soft text-leaf">
            <Newspaper className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-2xl font-bold">Nos premiers articles arrivent bientôt</h2>
          <p className="mt-3 text-muted-foreground">
            En attendant, suivez nos ateliers au quotidien sur nos réseaux sociaux.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="lg">
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook /> Facebook
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
