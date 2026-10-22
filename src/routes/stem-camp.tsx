import { createFileRoute } from "@tanstack/react-router";
import { Bot, Code2, FlaskConical, Users } from "lucide-react";

import img from "@/assets/prog-stemcamp.webp";
import flyer from "@/assets/flyer-stem-camp.webp.asset.json";
import { Fill, SectionTitle, StemCampCta } from "@/components/site/blocks";
import { ProgramPage } from "@/components/site/ProgramPage";
import { StemFaq } from "@/components/site/StemFaq";
import { CONTACT, PROGRAMS, STEM_CAMP } from "@/lib/site";
import { seo } from "@/lib/seo";

function eventJsonLd() {
  if (!STEM_CAMP.startDate) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "STEM Camp Vacances IvoiRobot",
    description:
      "Camp de vacances STEM : robotique, programmation, pilotage de drone et sciences expérimentales pour les jeunes de 10 ans au lycée.",
    startDate: STEM_CAMP.startDate,
    endDate: STEM_CAMP.endDate ?? STEM_CAMP.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "IvoiRobot",
      address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressRegion: "Cocody", addressCountry: "CI" },
    },
    organizer: { "@type": "EducationalOrganization", name: "IvoiRobot", email: CONTACT.email },
  };
}

export const Route = createFileRoute("/stem-camp")({
  head: () => {
    const base = seo({
      title: "STEM Camp Vacances à Abidjan",
      description:
        "STEM Camp Vacances IvoiRobot à Abidjan : robotique, code, drones et sciences pour les 10 ans au lycée. Dates, tarif, FAQ parents et liste d'attente.",
      path: "/stem-camp",
    });
    const ev = eventJsonLd();
    return {
      ...base,
      scripts: ev ? [{ type: "application/ld+json", children: JSON.stringify(ev) }] : [],
    };
  },
  component: StemCampPage,
});

const program = PROGRAMS.find((p) => p.slug === "stem-camp")!;

const discover = [
  { icon: Bot, title: "Robotique", text: "Conception, construction et programmation de robots, avec des défis amusants." },
  { icon: Code2, title: "Programmation", text: "Les bases du code avec des outils visuels et textuels adaptés à chaque niveau." },
  { icon: FlaskConical, title: "Sciences expérimentales", text: "Des expériences pour comprendre la physique et la chimie en s'amusant." },
  { icon: Users, title: "Projets collaboratifs", text: "Travail en équipe pour développer créativité, communication et esprit d'équipe." },
];

function StemCampPage() {
  return (
    <>
      <ProgramPage
        program={program}
        eyebrow={STEM_CAMP.registrationOpen ? "STEM Camp · Inscriptions ouvertes" : "STEM Camp · Inscriptions bientôt ouvertes"}
        title="Des vacances pour inventer, coder et piloter"
        intro="Un programme intensif et ludique où votre enfant découvre la robotique, la programmation, les drones et les sciences par la pratique."
        image={img}
        imageAlt="Des enfants pilotent un drone dans une cour lors du STEM Camp"
        headerActions={<StemCampCta />}
      >
        <p>
          <strong className="text-foreground">
            <Fill>{STEM_CAMP.sessionLabel}</Fill>
          </strong>
          {!STEM_CAMP.registrationOpen &&
            " — rejoignez la liste d'attente sur WhatsApp : vous serez prévenu dès l'ouverture des inscriptions."}
        </p>
        <h2>Un programme adapté à chaque âge</h2>
        <p>
          Les activités sont conçues pour les jeunes à partir de 10 ans et jusqu'au lycée, avec des projets adaptés à
          chaque tranche d'âge. Chaque participant progresse à son rythme.
        </p>
        <h2>Apprendre en faisant</h2>
        <p>
          Les participants travaillent sur des projets concrets de robotique, de programmation et de sciences
          expérimentales. Nos méthodes privilégient l'expérimentation et la réalisation de projets.
        </p>
        <h2>Un encadrement de qualité</h2>
        <p>
          Notre équipe d'animateurs est composée de professionnels et d'enseignants qualifiés dans les disciplines
          STEM, avec un accompagnement personnalisé.
        </p>
      </ProgramPage>

      <section className="bg-paper bg-dots py-20">
        <div className="container-site">
          <SectionTitle eyebrow="Au programme" title="Ce que votre enfant va découvrir" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {discover.map((d) => (
              <li key={d.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-cta-soft text-foreground">
                  <d.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionTitle eyebrow="FAQ parents" title="Vos questions, nos réponses" />
          <div className="mt-8">
            <StemFaq />
          </div>
        </div>
        <figure className="lg:col-span-5">
          <img
            src={flyer.url}
            alt="Affiche du STEM Camp Vacances IvoiRobot : à partir de 10 ans jusqu'au lycée, robotique, informatique, programmation, pilotage de drone et codage, places limitées"
            width={900}
            height={1248}
            loading="lazy"
            className="w-full rounded-3xl border border-border shadow-lift"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">Affiche officielle du STEM Camp Vacances.</figcaption>
        </figure>
      </section>
    </>
  );
}
