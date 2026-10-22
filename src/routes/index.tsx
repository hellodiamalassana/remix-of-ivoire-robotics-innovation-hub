import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Hammer, MapPin, Tag, Users, Wallet } from "lucide-react";

import hero from "@/assets/hero-atelier.webp";
import imgFormations from "@/assets/prog-formations.webp";
import imgCompetitions from "@/assets/prog-competitions.webp";
import imgStem from "@/assets/prog-stemcamp.webp";
import { Fill, SectionTitle, StemCampCta } from "@/components/site/blocks";
import { StemFaq } from "@/components/site/StemFaq";
import { Button } from "@/components/ui/button";
import { CONTACT, KEY_FIGURES, PROGRAM_PATHS, PROGRAMS, STEM_CAMP, whatsappUrl } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "IvoiRobot — Robotique et STEM pour les jeunes à Abidjan",
      description:
        "Formations en robotique, compétitions et STEM Camp Vacances à Abidjan pour les jeunes de 10 ans au lycée. Inscrivez votre enfant.",
      path: "/",
    }),
  component: Index,
});

const programImages = {
  formations: imgFormations,
  competitions: imgCompetitions,
  "stem-camp": imgStem,
} as const;

const reasons = [
  {
    icon: Users,
    title: "Encadrement personnalisé",
    text: "Des formateurs qualifiés et passionnés accompagnent chaque enfant dans son apprentissage.",
  },
  {
    icon: Hammer,
    title: "Apprendre en construisant",
    text: "Chaque séance part d'un projet concret : on assemble, on programme, on teste, on recommence.",
  },
  {
    icon: Clock,
    title: "Horaires adaptés",
    text: "Des sessions le week-end et pendant les vacances, compatibles avec l'emploi du temps scolaire.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Trois enfants assemblent un petit robot à roues avec l'aide d'un formateur lors d'un atelier"
          width={1600}
          height={1008}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="hero-scrim-mobile absolute inset-0 -z-10 md:hidden" aria-hidden="true" />
        <div className="hero-scrim absolute inset-0 -z-10 hidden md:block" aria-hidden="true" />
        <div className="container-site flex min-h-[78svh] flex-col justify-end pb-14 pt-40 md:min-h-[640px] md:justify-center md:py-24">
          <p className="eyebrow eyebrow-on-ink">Robotique · Code · Sciences — Abidjan</p>
          <h1 className="mt-4 max-w-2xl text-[2.6rem] font-bold leading-[1.02] md:text-7xl">
            Votre enfant construit et programme ses propres robots.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Des ateliers pratiques pour les jeunes de 10 ans au lycée, encadrés par des formateurs passionnés.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <StemCampCta />
            <Button asChild variant="onInk" size="lg">
              <Link to="/programmes">Découvrir nos programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section aria-labelledby="chiffres" className="border-b border-border bg-card">
        <h2 id="chiffres" className="sr-only">
          IvoiRobot en chiffres
        </h2>
        <ul className="container-site grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {KEY_FIGURES.map((f) => (
            <li key={f.label} className="px-2 py-8 text-center md:py-10">
              <p className="font-display text-4xl font-bold text-foreground md:text-5xl">
                <Fill>{f.value}</Fill>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{f.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PROGRAMMES */}
      <section className="container-site py-20 md:py-28">
        <SectionTitle
          eyebrow="Nos programmes"
          title="Trois façons d'éveiller la passion des sciences"
          intro="Que votre enfant débute ou soit déjà passionné, il trouve chez IvoiRobot un programme à sa mesure."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <li key={p.slug}>
              <Link
                to={PROGRAM_PATHS[p.slug]}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={programImages[p.slug]}
                    alt=""
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 font-display text-xs font-semibold text-ink-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-leaf">
                    En savoir plus <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* POURQUOI NOUS */}
      <section className="bg-paper bg-dots py-20 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle
              eyebrow="Pourquoi IvoiRobot"
              title="On apprend mieux quand on fabrique"
              intro="Notre mission : rendre la robotique accessible à tous, avec des programmes d'initiation adaptés aux jeunes élèves comme aux étudiants."
            />
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link to="/a-propos">Qui sommes-nous ?</Link>
            </Button>
          </div>
          <ul className="grid gap-4 md:col-span-7">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-soft text-leaf">
                  <r.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCHAIN STEM CAMP */}
      <section aria-labelledby="stem-camp" className="bg-blueprint text-ink-foreground">
        <div className="container-site grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow eyebrow-on-ink">STEM Camp Vacances</p>
            <h2 id="stem-camp" className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
              {STEM_CAMP.registrationOpen ? "Les inscriptions sont ouvertes" : "Inscriptions bientôt ouvertes"}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Robotique, code, drones et sciences : des vacances utiles et joyeuses. Les places sont limitées —
              {STEM_CAMP.registrationOpen
                ? " réservez dès maintenant."
                : " inscrivez-vous sur la liste d'attente pour être prévenu en premier."}
            </p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: CalendarDays, k: "Dates", v: STEM_CAMP.dates },
                { icon: Users, k: "Âge", v: STEM_CAMP.age },
                { icon: MapPin, k: "Lieu", v: STEM_CAMP.place },
                { icon: Wallet, k: "Tarif", v: STEM_CAMP.price },
              ].map((row) => (
                <div key={row.k} className="rounded-2xl border border-ink-foreground/15 bg-ink-soft/60 p-4">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-cta">
                    <row.icon className="size-4" aria-hidden="true" /> {row.k}
                  </dt>
                  <dd className="mt-1 text-[0.95rem] text-ink-foreground">
                    <Fill>{row.v}</Fill>
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Au programme">
              {STEM_CAMP.topics.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-ink-foreground/20 px-3 py-1.5 text-sm">
                  <Tag className="size-3.5 text-cta" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <StemCampCta />
              <Button asChild variant="onInk" size="lg">
                <Link to="/stem-camp">Tout savoir sur le camp</Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Les questions des parents</h3>
            <div className="mt-4 text-foreground">
              <StemFaq />
            </div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="container-site py-20 md:py-24">
        <SectionTitle
          eyebrow="Ils nous font confiance"
          title="Écoles et partenaires"
          align="center"
          intro="Vous êtes une école, une entreprise ou une fondation ? Construisons ensemble l'avenir des jeunes ivoiriens."
        />
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <li
              key={n}
              className="flex h-24 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card px-3 text-center text-sm"
            >
              <Fill>{`[Logo partenaire ${n}]`}</Fill>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button asChild variant="leaf" size="lg">
            <Link to="/nous-soutenir">
              Devenir partenaire <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-border bg-paper">
        <div className="container-site grid gap-8 py-16 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-bold">Parlons de votre enfant</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 md:col-span-2">
            <li>
              <a
                href={whatsappUrl("Bonjour IvoiRobot, j'aimerais des informations pour mon enfant.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-24 flex-col justify-center rounded-2xl border border-border bg-card p-5 shadow-card hover:border-leaf"
              >
                <span className="text-sm font-semibold text-leaf">WhatsApp</span>
                <span className="mt-1 font-display text-lg font-semibold">{CONTACT.phoneWhatsapp}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.phoneMobileHref}
                className="flex h-full min-h-24 flex-col justify-center rounded-2xl border border-border bg-card p-5 shadow-card hover:border-leaf"
              >
                <span className="text-sm font-semibold text-leaf">Téléphone</span>
                <span className="mt-1 font-display text-lg font-semibold">{CONTACT.phoneMobile}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex h-full min-h-24 flex-col justify-center rounded-2xl border border-border bg-card p-5 shadow-card hover:border-leaf"
              >
                <span className="text-sm font-semibold text-leaf">E-mail</span>
                <span className="mt-1 break-all font-display text-lg font-semibold">{CONTACT.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

