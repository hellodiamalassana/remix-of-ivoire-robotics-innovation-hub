import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, GraduationCap, Sparkles, HeartHandshake } from "lucide-react";

import presentation from "@/assets/ivoirobot-presentation.webp.asset.json";
import { CtaBand, Fill, PageHeader, SectionTitle } from "@/components/site/blocks";
import { LEGAL } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    seo({
      title: "Qui sommes-nous",
      description:
        "IvoiRobot éveille la passion des sciences chez les jeunes ivoiriens grâce à la robotique et aux STEM. Notre mission, notre vision et nos valeurs.",
      path: "/a-propos",
    }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Nous encourageons l'exploration, l'expérimentation et la créativité." },
  { icon: HeartHandshake, title: "Inclusion", text: "Nous nous engageons à rendre l'éducation STEM accessible à tous les jeunes." },
  { icon: Sparkles, title: "Excellence", text: "Nous visons l'excellence dans tous nos programmes et services." },
  { icon: GraduationCap, title: "Éducation", text: "Nous croyons au pouvoir transformateur de l'éducation pour changer des vies." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="Inspirer la prochaine génération d'innovateurs"
        intro="IvoiRobot forme les jeunes ivoiriens à la robotique, aux sciences, à la technologie, à l'ingénierie et aux mathématiques (STEM), pour éveiller leur passion des sciences."
      />

      <section className="container-site grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle eyebrow="Notre mission" title="Rendre la robotique accessible à tous" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Nous proposons des programmes d'initiation adaptés aussi bien aux jeunes élèves qu'aux étudiants qui
              souhaitent développer leurs compétences techniques.
            </p>
            <p>
              Nous intervenons auprès des familles, des écoles, des centres de formation et des centres de loisirs :
              conception et programmation, assemblage de robots, prise en main de plateformes robotiques populaires et
              organisation de STEM Camps.
            </p>
          </div>
          <blockquote className="mt-8 border-l-4 border-cta pl-5 font-display text-xl font-medium leading-snug">
            « Nous aspirons à devenir le leader de l'éducation STEM en Afrique de l'Ouest, en formant des milliers de
            jeunes capables de relever les défis locaux et mondiaux grâce à la science et à la technologie. »
          </blockquote>
        </div>
        <img
          src={presentation.url}
          alt="Visuel de présentation IvoiRobot : des enfants construisent des robots, avec le message « Stimuler la curiosité intellectuelle et inspirer la prochaine génération d'innovateurs »"
          width={900}
          height={819}
          loading="lazy"
          className="w-full rounded-3xl shadow-lift"
        />
      </section>

      <section className="bg-paper bg-dots py-20">
        <div className="container-site">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui guide chacun de nos ateliers" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-leaf-soft text-leaf">
                  <v.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site grid gap-8 py-20 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="L'équipe" title="Des formateurs passionnés" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Notre équipe d'animateurs est composée de professionnels et d'enseignants qualifiés dans les disciplines
            STEM.
          </p>
          <p className="mt-4 text-muted-foreground">
            <Fill>[Présenter ici 2 à 4 membres de l'équipe : photo, prénom, rôle, une phrase]</Fill>
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="text-xl font-bold">IvoiRobot en quelques faits</h2>
          <dl className="mt-5 divide-y divide-border text-sm">
            <div className="grid grid-cols-[9rem_1fr] gap-3 py-3">
              <dt className="font-semibold">Création</dt>
              <dd className="text-muted-foreground">{LEGAL.foundedYear}, à Abidjan</dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 py-3">
              <dt className="font-semibold">Statut</dt>
              <dd className="text-muted-foreground">
                <Fill>{LEGAL.status}</Fill>
              </dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 py-3">
              <dt className="font-semibold">Immatriculation</dt>
              <dd className="text-muted-foreground">
                <Fill>{LEGAL.registration}</Fill>
              </dd>
            </div>
            <div className="grid grid-cols-[9rem_1fr] gap-3 py-3">
              <dt className="font-semibold">Zone d'action</dt>
              <dd className="text-muted-foreground">Abidjan et Côte d'Ivoire</dd>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
