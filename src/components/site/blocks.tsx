import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { LINKS, STEM_CAMP, STEM_WAITLIST_MESSAGE, whatsappUrl, type Program } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Renders text, highlighting any [placeholder] segments the team must fill in. */
export function Fill({ children, className }: { children: string; className?: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <mark
            key={i}
            className="rounded-md bg-placeholder px-1.5 py-0.5 font-medium text-placeholder-foreground"
            title="Information à compléter par l'équipe IvoiRobot"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-blueprint text-ink-foreground">
      <div className="container-site py-14 md:py-20">
        <p className="eyebrow eyebrow-on-ink">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

/** Primary STEM Camp action: inscription if open, waiting list otherwise. */
export function StemCampCta({ size = "lg", className }: { size?: "default" | "lg"; className?: string }) {
  if (STEM_CAMP.registrationOpen) {
    return (
      <Button asChild variant="cta" size={size} className={className}>
        <a href={LINKS.inscription} target="_blank" rel="noopener noreferrer">
          Inscrire mon enfant au STEM Camp <ArrowRight />
        </a>
      </Button>
    );
  }
  return (
    <Button asChild variant="cta" size={size} className={className}>
      <a href={whatsappUrl(STEM_WAITLIST_MESSAGE)} target="_blank" rel="noopener noreferrer">
        Rejoindre la liste d'attente <ArrowRight />
      </a>
    </Button>
  );
}

export function ProgramSheet({ program }: { program: Program }) {
  const rows: [string, string][] = [
    ["Public", program.audience],
    ["Âge", program.age],
    ["Durée", program.duration],
    ["Matériel", program.equipment],
    ["Tarif", program.price],
    ["Prochaine date", program.nextDate],
  ];
  return (
    <aside className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8" aria-labelledby={`fiche-${program.slug}`}>
      <p className="eyebrow">Fiche programme</p>
      <h2 id={`fiche-${program.slug}`} className="mt-2 text-2xl font-bold">
        {program.title} en bref
      </h2>
      <dl className="mt-6 divide-y divide-border">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3 text-sm">
            <dt className="font-semibold text-foreground">{k}</dt>
            <dd className="text-muted-foreground">
              <Fill>{v}</Fill>
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <p className="text-sm font-semibold">Au programme</p>
        <ul className="mt-3 space-y-2">
          {program.content.map((c) => (
            <li key={c} className="flex gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        {program.slug === "stem-camp" ? (
          <StemCampCta className="w-full" />
        ) : (
          <Button asChild variant="cta" size="lg" className="w-full">
            <a href={LINKS.inscription} target="_blank" rel="noopener noreferrer">
              Inscrire mon enfant <ArrowRight />
            </a>
          </Button>
        )}
      </div>
    </aside>
  );
}

export function CtaBand({
  title = "Une question avant d'inscrire votre enfant ?",
  text = "Notre équipe vous répond sur WhatsApp, par téléphone ou par e-mail.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-blueprint px-6 py-12 text-ink-foreground md:px-14 md:py-16">
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="mt-3 text-ink-muted">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">
                Nous contacter <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onInk" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
