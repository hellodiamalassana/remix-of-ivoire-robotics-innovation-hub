import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Gift, School, Trophy } from "lucide-react";

import { Fill, PageHeader, SectionTitle } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { CONTACT, mailtoUrl, whatsappUrl } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/nous-soutenir")({
  head: () =>
    seo({
      title: "Nous soutenir",
      description:
        "Écoles, entreprises, fondations : soutenez IvoiRobot pour rendre la robotique et les STEM accessibles aux jeunes ivoiriens. Partenariats, mécénat, matériel.",
      path: "/nous-soutenir",
    }),
  component: SupportPage,
});

const ways = [
  {
    icon: School,
    title: "Devenir école partenaire",
    text: "Accueillez nos ateliers ou un club de robotique dans votre établissement.",
  },
  {
    icon: Trophy,
    title: "Parrainer une compétition",
    text: "Associez votre marque à un événement qui met en avant les talents de demain.",
  },
  {
    icon: Gift,
    title: "Offrir du matériel",
    text: "Kits robotiques, ordinateurs, composants : chaque équipement permet à plus de jeunes d'apprendre.",
  },
  {
    icon: Building2,
    title: "Financer des places",
    text: "Permettez à des jeunes de familles modestes de participer au STEM Camp. [Modalités à confirmer]",
  },
];

function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nous soutenir"
        title="Construisons ensemble les innovateurs de demain"
        intro="Notre ambition : rendre l'éducation STEM accessible à tous les jeunes ivoiriens. Votre soutien rend cela possible."
      >
        <Button asChild variant="cta" size="lg">
          <a href={mailtoUrl("Partenariat IvoiRobot")}>
            Proposer un partenariat <ArrowRight />
          </a>
        </Button>
      </PageHeader>

      <section className="container-site py-20">
        <SectionTitle eyebrow="Comment agir" title="Quatre façons de nous soutenir" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {ways.map((w) => (
            <li key={w.title} className="flex gap-5 rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-soft text-leaf">
                <w.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold">{w.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  <Fill>{w.text}</Fill>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper bg-dots py-20">
        <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionTitle eyebrow="Transparence" title="Ce que votre soutien permet" />
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>
                <Fill>[Exemple chiffré : « X FCFA = un kit robotique pour un groupe de 4 élèves »]</Fill>
              </li>
              <li>
                <Fill>[Exemple chiffré : « X FCFA = une place au STEM Camp pour un enfant »]</Fill>
              </li>
              <li>
                <Fill>[Lien vers le rapport d'activité annuel]</Fill>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
            <h2 className="text-2xl font-bold">Parlons de votre projet</h2>
            <p className="mt-3 text-muted-foreground">
              Écrivez-nous et nous vous enverrons notre présentation partenaires.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="leaf" size="lg">
                <a href={mailtoUrl("Partenariat IvoiRobot")}>{CONTACT.email}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={whatsappUrl("Bonjour IvoiRobot, je représente une structure intéressée par un partenariat.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
