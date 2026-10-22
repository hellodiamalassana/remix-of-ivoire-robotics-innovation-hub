import { createFileRoute } from "@tanstack/react-router";

import { Fill, PageHeader } from "@/components/site/blocks";
import { CONTACT, LINKS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/confidentialite")({
  head: () =>
    seo({
      title: "Politique de confidentialité",
      description:
        "Comment IvoiRobot collecte et protège les données personnelles des parents et des enfants, conformément à la loi ivoirienne n°2013-450.",
      path: "/confidentialite",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vos données"
        title="Politique de confidentialité"
        intro="Nous protégeons les données des familles qui nous font confiance, conformément à la loi n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel."
      />
      <section className="container-site max-w-3xl py-16">
        <div className="prose-site">
          <p>
            <Fill>[Date de dernière mise à jour à compléter]</Fill>
          </p>
          <h2>Responsable du traitement</h2>
          <p>
            IvoiRobot, {CONTACT.city}, {CONTACT.country} — <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
          <h2>Données collectées</h2>
          <ul>
            <li>
              <strong>Formulaire de contact</strong> : nom, téléphone ou e-mail, message. Le formulaire ne stocke rien
              sur ce site : il ouvre WhatsApp ou votre messagerie avec votre message.
            </li>
            <li>
              <strong>Inscriptions</strong> : réalisées sur notre plateforme{" "}
              <a href={LINKS.inscription} target="_blank" rel="noopener noreferrer">
                app.ivoirobot.org.ci
              </a>{" "}
              (identité du parent et de l'enfant, âge, coordonnées, informations utiles à l'encadrement).
            </li>
            <li>
              <strong>Mesure d'audience</strong> : uniquement si vous l'acceptez via le bandeau cookies.
            </li>
          </ul>
          <h2>Finalités</h2>
          <p>
            Répondre à vos demandes, gérer les inscriptions et la sécurité des enfants pendant les activités, vous
            informer de nos prochaines sessions si vous l'avez demandé.
          </p>
          <h2>Données des mineurs</h2>
          <p>
            Les données des enfants sont fournies par leurs parents ou tuteurs légaux et ne sont utilisées que pour
            l'organisation des activités. Aucune photo d'enfant n'est publiée sans autorisation écrite.
          </p>
          <h2>Durée de conservation</h2>
          <p>
            <Fill>[Durée à confirmer, ex. : 3 ans après la dernière activité de l'enfant]</Fill>
          </p>
          <h2>Partage des données</h2>
          <p>Vos données ne sont jamais vendues. Elles ne sont partagées qu'avec nos prestataires techniques, dans la limite nécessaire.</p>
          <h2>Vos droits</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour
            l'exercer, écrivez à <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Vous pouvez également saisir
            l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI).
          </p>
          <h2>Cookies</h2>
          <p>
            Le site ne dépose aucun cookie publicitaire. Les cookies de mesure d'audience ne sont activés qu'après votre
            accord. Votre choix est mémorisé dans votre navigateur ; vous pouvez le modifier en vidant les données du
            site.
          </p>
        </div>
      </section>
    </>
  );
}
