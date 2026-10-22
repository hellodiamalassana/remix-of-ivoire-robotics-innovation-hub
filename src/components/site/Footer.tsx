import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import logoLight from "@/assets/logo-light.webp.asset.json";
import { CONTACT, LINKS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blueprint text-ink-foreground">
      <div className="tape h-2" aria-hidden="true" />
      <div className="container-site grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex min-h-11 items-center" aria-label="IvoiRobot — retour à l'accueil">
            <img src={logoLight.url} alt="IvoiRobot" width={485} height={129} loading="lazy" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Inspirer la prochaine génération d'innovateurs ivoiriens grâce à la robotique et aux STEM.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IvoiRobot sur Facebook"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink-foreground/25 hover:bg-ink-foreground/10"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IvoiRobot sur LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink-foreground/25 hover:bg-ink-foreground/10"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Programmes" className="md:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cta">Programmes</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <FooterLink to="/formations">Formations</FooterLink>
            <FooterLink to="/competitions">Compétitions</FooterLink>
            <FooterLink to="/stem-camp">STEM Camp Vacances</FooterLink>
          </ul>
        </nav>

        <nav aria-label="IvoiRobot" className="md:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cta">IvoiRobot</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <FooterLink to="/a-propos">Qui sommes-nous</FooterLink>
            <FooterLink to="/actualites">Actualités</FooterLink>
            <FooterLink to="/nous-soutenir">Nous soutenir</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cta">Nous joindre</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={CONTACT.phoneWhatsappHref} className="inline-flex min-h-11 items-center gap-3 hover:underline">
                <Phone className="size-4 text-cta" aria-hidden="true" />
                {CONTACT.phoneWhatsapp} <span className="text-ink-muted">(WhatsApp)</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneMobileHref} className="inline-flex min-h-11 items-center gap-3 hover:underline">
                <Phone className="size-4 text-cta" aria-hidden="true" />
                {CONTACT.phoneMobile} <span className="text-ink-muted">(mobile)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-11 items-center gap-3 hover:underline">
                <Mail className="size-4 text-cta" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-3">
              <MapPin className="size-4 text-cta" aria-hidden="true" />
              {CONTACT.city}, {CONTACT.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} IvoiRobot. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5">
            <li>
              <Link to="/mentions-legales" className="inline-flex min-h-11 items-center hover:text-ink-foreground hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="inline-flex min-h-11 items-center hover:text-ink-foreground hover:underline">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="inline-flex min-h-11 items-center text-ink-muted hover:text-ink-foreground hover:underline">
        {children}
      </Link>
    </li>
  );
}
