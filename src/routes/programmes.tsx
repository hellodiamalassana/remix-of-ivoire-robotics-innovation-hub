import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import imgFormations from "@/assets/prog-formations.webp";
import imgCompetitions from "@/assets/prog-competitions.webp";
import imgStem from "@/assets/prog-stemcamp.webp";
import { CtaBand, Fill, PageHeader } from "@/components/site/blocks";
import { PROGRAM_PATHS, PROGRAMS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/programmes")({
  head: () =>
    seo({
      title: "Nos programmes",
      description:
        "Formations en robotique, compétitions et STEM Camp Vacances : comparez les programmes IvoiRobot et choisissez celui qui convient à votre enfant.",
      path: "/programmes",
    }),
  component: ProgramsPage,
});

const images = { formations: imgFormations, competitions: imgCompetitions, "stem-camp": imgStem } as const;

function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Choisissez l'aventure de votre enfant"
        intro="Trois programmes complémentaires pour découvrir, progresser et se dépasser en robotique et en sciences."
      />
      <section className="container-site space-y-8 py-20">
        {PROGRAMS.map((p, i) => (
          <article
            key={p.slug}
            className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card md:grid-cols-2"
          >
            <img
              src={images[p.slug]}
              alt=""
              width={1024}
              height={768}
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full min-h-60 w-full object-cover ${i % 2 ? "md:order-2" : ""}`}
            />
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="eyebrow">Programme 0{i + 1}</p>
              <h2 className="mt-2 text-3xl font-bold">{p.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.short}</p>
              <dl className="mt-6 grid gap-2 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold">Public :</dt>
                  <dd className="text-muted-foreground">{p.audience}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold">Âge :</dt>
                  <dd className="text-muted-foreground">
                    <Fill>{p.age}</Fill>
                  </dd>
                </div>
              </dl>
              <Link
                to={PROGRAM_PATHS[p.slug]}
                className="mt-8 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-ink px-6 font-semibold text-ink-foreground hover:bg-ink-soft"
              >
                Voir la fiche complète <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <CtaBand title="Vous hésitez entre deux programmes ?" text="Dites-nous l'âge et les envies de votre enfant, nous vous conseillons." />
    </>
  );
}
