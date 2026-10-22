import { createFileRoute } from "@tanstack/react-router";

import img from "@/assets/prog-competitions.webp";
import { Fill } from "@/components/site/blocks";
import { ProgramPage } from "@/components/site/ProgramPage";
import { PROGRAMS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/competitions")({
  head: () =>
    seo({
      title: "Compétitions de robotique",
      description:
        "Les compétitions de robotique IvoiRobot : des défis en équipe pour mettre en pratique ses compétences et rencontrer d'autres jeunes passionnés.",
      path: "/competitions",
    }),
  component: CompetitionsPage,
});

const program = PROGRAMS.find((p) => p.slug === "competitions")!;

function CompetitionsPage() {
  return (
    <ProgramPage
      program={program}
      eyebrow="Programme · Compétitions"
      title="Relever des défis en équipe"
      intro="Participez à nos compétitions de robotique pour mettre en pratique vos compétences et rencontrer d'autres passionnés."
      image={img}
      imageAlt="Une équipe de jeunes encourage son robot sur une piste de compétition"
    >
      <h2>Pourquoi participer ?</h2>
      <p>
        Une compétition, c'est l'occasion de transformer ce que l'on a appris en résultat concret. Les jeunes
        travaillent en équipe, apprennent à gérer la pression, à corriger leurs erreurs et à présenter leur travail.
      </p>
      <h2>Comment ça fonctionne ?</h2>
      <p>
        Les équipes sont préparées et encadrées par nos formateurs, puis s'affrontent sur des défis techniques :
        parcours, missions et épreuves de programmation.
      </p>
      <p>
        <Fill>[Présenter la prochaine compétition : nom, date, lieu, catégories, règlement à télécharger]</Fill>
      </p>
      <h2>Écoles : inscrivez une équipe</h2>
      <p>
        Vous souhaitez engager une équipe de votre établissement ? Contactez-nous pour connaître les modalités
        d'inscription et de préparation.
      </p>
    </ProgramPage>
  );
}
