import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Fill } from "@/components/site/blocks";
import { STEM_CAMP } from "@/lib/site";

export const STEM_FAQ: { q: string; a: string }[] = [
  {
    q: "Mon enfant n'a jamais fait de robotique. Peut-il participer ?",
    a: "Oui. Aucun prérequis n'est demandé : les activités sont adaptées à chaque tranche d'âge et chaque participant progresse à son rythme.",
  },
  {
    q: "Quel âge faut-il avoir ?",
    a: `${STEM_CAMP.age}. Les groupes sont constitués par tranche d'âge.`,
  },
  {
    q: "Où et quand se déroule le camp ?",
    a: `${STEM_CAMP.place}. ${STEM_CAMP.dates}. ${STEM_CAMP.duration}.`,
  },
  {
    q: "Combien coûte le STEM Camp ?",
    a: `${STEM_CAMP.price}. [Préciser les modalités de paiement : Mobile Money, espèces, virement, paiement en plusieurs fois].`,
  },
  {
    q: "Faut-il apporter un ordinateur ou du matériel ?",
    a: "[À confirmer par l'équipe : matériel fourni par IvoiRobot ou à apporter].",
  },
  {
    q: "Qui encadre les enfants ?",
    a: "Des animateurs, professionnels et enseignants qualifiés en STEM, avec un accompagnement personnalisé. [Préciser le nombre d'encadrants par groupe].",
  },
  {
    q: "Le goûter ou le déjeuner sont-ils prévus ?",
    a: "[À confirmer par l'équipe].",
  },
  {
    q: "Comment inscrire mon enfant ?",
    a: "Par le formulaire d'inscription en ligne, ou en nous écrivant sur WhatsApp au +225 07 47 35 56 36. Les places sont limitées.",
  },
];

export function StemFaq() {
  return (
    <Accordion type="single" collapsible className="divide-y divide-border rounded-3xl border border-border bg-card px-5 md:px-7">
      {STEM_FAQ.map((item, i) => (
        <AccordionItem key={item.q} value={`q-${i}`} className="border-0">
          <AccordionTrigger className="min-h-14 py-4 text-left font-display text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            <Fill>{item.a}</Fill>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
