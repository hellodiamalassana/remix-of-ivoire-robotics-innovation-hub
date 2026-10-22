import { createFileRoute } from "@tanstack/react-router";

import img from "@/assets/prog-formations.webp";
import { Fill } from "@/components/site/blocks";
import { ProgramPage } from "@/components/site/ProgramPage";
import { PROGRAMS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/formations")({
  head: () =>
    seo({
      title: "Formations en robotique et programmation",
      description:
        "Formations IvoiRobot en robotique et programmation à Abidjan, de l'initiation au perfectionnement, le week-end et dans les écoles partenaires.",
      path: "/formations",
    }),
  component: FormationsPage,
});

const program = PROGRAMS.find((p) => p.slug === "formations")!;

function FormationsPage() {
  return (
    <ProgramPage
      program={program}
      eyebrow="Programme · Formations"
      title="Apprendre la robotique, pas à pas"
      intro="Des formations en robotique et programmation adaptées à tous les niveaux, de l'initiation au perfectionnement."
      image={img}
      imageAlt="Des élèves programment un robot sur un ordinateur portable en classe"
    >
      <h2>Pour qui ?</h2>
      <p>
        Pour les enfants et adolescents curieux qui veulent comprendre comment fonctionnent les robots, et pour les
        écoles, centres de formation et centres de loisirs qui souhaitent proposer la robotique à leurs élèves.
      </p>
      <h2>Comment ça se passe ?</h2>
      <p>
        Chaque séance part d'un projet concret. Les participants conçoivent, assemblent et programment leurs robots,
        en commençant par des outils visuels avant de passer au code. Les sessions ont lieu le week-end, pour
        s'adapter à l'emploi du temps scolaire.
      </p>
      <h2>Dans votre école</h2>
      <p>
        IvoiRobot intervient aussi directement dans les établissements, sous forme de club ou d'atelier intégré au
        programme. <Fill>[Préciser les formules proposées aux écoles : nombre de séances, effectif, tarif]</Fill>
      </p>
    </ProgramPage>
  );
}
