import { createFileRoute, Link } from "@tanstack/react-router";

import { Fill, PageHeader } from "@/components/site/blocks";
import { CONTACT, LEGAL } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    seo({
      title: "Mentions légales",
      description: "Mentions légales du site IvoiRobot : éditeur, directeur de publication, hébergement et propriété intellectuelle.",
      path: "/mentions-legales",
    }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" />
      <section className="container-site max-w-3xl py-16">
        <div className="prose-site">
          <h2>Éditeur du site</h2>
          <p>
            IvoiRobot — <Fill>{LEGAL.status}</Fill>
            <br />
            <Fill>{LEGAL.registration}</Fill>
            <br />
            Siège : {CONTACT.city}, {CONTACT.country} — <Fill>{CONTACT.addressDetail}</Fill>
            <br />
            E-mail : <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> — Téléphone : {CONTACT.phoneWhatsapp}
          </p>
          <h2>Directeur de la publication</h2>
          <p>
            <Fill>{LEGAL.publicationDirector}</Fill>
          </p>
          <h2>Hébergement</h2>
          <p>
            <Fill>{LEGAL.host}</Fill>
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, logos, photos, visuels) est la propriété d'IvoiRobot ou de ses
            partenaires. Toute reproduction sans autorisation écrite préalable est interdite.
          </p>
          <h2>Photos des enfants</h2>
          <p>
            Les photos de participants sont publiées avec l'autorisation écrite des parents ou tuteurs légaux. Pour
            demander le retrait d'une photo, écrivez à <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
          <h2>Données personnelles</h2>
          <p>
            Consultez notre <Link to="/confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
