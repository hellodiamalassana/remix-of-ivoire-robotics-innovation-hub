/**
 * Single source of truth for IvoiRobot content facts.
 * Values in [CROCHETS] are placeholders the IvoiRobot team must fill in —
 * never replace them with invented figures.
 */

export const BRAND = "IvoiRobot";

export const CONTACT = {
  email: "info@ivoirobot.org.ci",
  phoneMobile: "+225 07 04 91 82 62",
  phoneMobileHref: "tel:+2250704918262",
  phoneWhatsapp: "+225 07 47 35 56 36",
  phoneWhatsappHref: "tel:+2250747355636",
  whatsappNumber: "2250747355636",
  city: "Abidjan, Cocody",
  country: "Côte d'Ivoire",
  addressDetail: "[Adresse précise du local à compléter]",
} as const;

export const LINKS = {
  inscription: "https://app.ivoirobot.org.ci/inscriptions/create",
  facebook: "https://www.facebook.com/profile.php?id=61572529499399",
  linkedin: "https://www.linkedin.com/company/ivoirobot",
} as const;

/** Statut juridique : à trancher par l'équipe, puis utilisé partout. */
export const LEGAL = {
  status: "[Forme juridique à confirmer : association ou entreprise]",
  registration: "[N° RCCM ou récépissé de déclaration d'association]",
  publicationDirector: "[Nom du directeur / de la directrice de publication]",
  host: "[Nom et adresse de l'hébergeur du site]",
  foundedYear: "2025",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoUrl(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${CONTACT.email}?${params.toString().replace(/\+/g, "%20")}`;
}

/** Prochaine session du STEM Camp. Passer registrationOpen à true quand les inscriptions ouvrent. */
export const STEM_CAMP = {
  registrationOpen: false,
  sessionLabel: "Prochaine session : [dates à confirmer]",
  /** ISO date (ex. "2027-07-12") — l'événement Schema.org n'est publié que si renseigné. */
  startDate: null as string | null,
  endDate: null as string | null,
  dates: "[Dates de la session à confirmer]",
  age: "À partir de 10 ans, jusqu'au lycée",
  place: "Abidjan, Cocody — [lieu exact à confirmer]",
  duration: "[Durée et horaires à confirmer]",
  price: "[Tarif à confirmer]",
  seats: "Places limitées — [nombre de places à confirmer]",
  topics: [
    "Robotique",
    "Informatique et programmation",
    "Pilotage de drone",
    "Codage",
    "Sciences expérimentales",
    "Projets collaboratifs",
  ],
} as const;

export const STEM_WAITLIST_MESSAGE =
  "Bonjour IvoiRobot, je souhaite être prévenu(e) de l'ouverture des inscriptions au prochain STEM Camp Vacances. Prénom et âge de mon enfant : ";

/** Chiffres clés — à remplacer par les chiffres réels validés par l'équipe. */
export const KEY_FIGURES = [
  { value: "[XX]", label: "jeunes déjà formés" },
  { value: "[XX]", label: "écoles partenaires" },
  { value: "[XX]", label: "heures d'ateliers" },
  { value: "2025", label: "année de création" },
] as const;

export type ProgramSlug = "formations" | "competitions" | "stem-camp";

export const PROGRAM_PATHS = {
  formations: "/formations",
  competitions: "/competitions",
  "stem-camp": "/stem-camp",
} as const satisfies Record<ProgramSlug, string>;

export interface Program {
  slug: ProgramSlug;
  title: string;
  short: string;
  audience: string;
  age: string;
  duration: string;
  content: string[];
  equipment: string;
  price: string;
  nextDate: string;
}

export const PROGRAMS: Program[] = [
  {
    slug: "formations",
    title: "Formations",
    short:
      "Robotique et programmation adaptées à tous les niveaux, de l'initiation au perfectionnement, avec des sessions le week-end.",
    audience: "Élèves, écoles, centres de formation et de loisirs",
    age: "[Tranche d'âge à confirmer]",
    duration: "[Durée du cycle à confirmer] — sessions le week-end",
    content: [
      "Conception et programmation de robots",
      "Assemblage de robots et prise en main de plateformes robotiques populaires",
      "Bases du code avec des outils visuels puis textuels",
      "Projets concrets, de l'idée au prototype",
    ],
    equipment: "[Préciser : matériel fourni par IvoiRobot / ordinateur à apporter]",
    price: "[Tarif à confirmer]",
    nextDate: "[Prochaine session à confirmer]",
  },
  {
    slug: "competitions",
    title: "Compétitions",
    short:
      "Des défis de robotique pour mettre en pratique ses compétences, travailler en équipe et rencontrer d'autres passionnés.",
    audience: "Équipes d'élèves et clubs de robotique scolaires",
    age: "[Catégories d'âge à confirmer]",
    duration: "[Format et durée à confirmer]",
    content: [
      "Préparation encadrée des équipes",
      "Défis de robotique : parcours, missions, épreuves techniques",
      "Présentation du projet devant un jury",
      "Esprit d'équipe, persévérance et prise de parole",
    ],
    equipment: "[Préciser le kit robotique utilisé]",
    price: "[Frais de participation à confirmer]",
    nextDate: "[Prochaine compétition à confirmer]",
  },
  {
    slug: "stem-camp",
    title: "STEM Camp Vacances",
    short:
      "Pendant les vacances, les enfants découvrent la robotique, le code, les drones et les sciences par la pratique.",
    audience: "Enfants et adolescents, du primaire au lycée",
    age: STEM_CAMP.age,
    duration: STEM_CAMP.duration,
    content: [...STEM_CAMP.topics],
    equipment: "[Préciser : matériel fourni / à apporter]",
    price: STEM_CAMP.price,
    nextDate: STEM_CAMP.dates,
  },
];

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "Qui sommes-nous" },
  {
    to: "/programmes",
    label: "Programmes",
    children: [
      { to: "/formations", label: "Formations" },
      { to: "/competitions", label: "Compétitions" },
      { to: "/stem-camp", label: "STEM Camp Vacances" },
    ],
  },
  { to: "/actualites", label: "Actualités" },
  { to: "/nous-soutenir", label: "Nous soutenir" },
  { to: "/contact", label: "Contact" },
] as const;
