import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Fill, PageHeader } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, mailtoUrl, whatsappUrl } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact",
      description:
        "Contactez IvoiRobot à Abidjan (Cocody) par WhatsApp, téléphone ou e-mail pour inscrire votre enfant ou proposer un partenariat.",
      path: "/contact",
    }),
  component: ContactPage,
});

const profiles = ["Parent", "École / établissement", "Partenaire / donateur", "Autre"] as const;

function ContactPage() {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const reach = String(data.get("reach") ?? "").trim();
    const profile = String(data.get("profile") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (!name || !reach || !message) {
      setError("Merci de remplir votre nom, un moyen de vous joindre et votre message.");
      return;
    }
    if (name.length > 100 || reach.length > 150 || message.length > 2000) {
      setError("Votre message est trop long. Merci de le raccourcir.");
      return;
    }
    setError(null);
    const text = `Bonjour IvoiRobot,\n\n${message}\n\n— ${name} (${profile})\nContact : ${reach}`;
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const url =
      submitter?.value === "email"
        ? mailtoUrl(`Demande de contact — ${profile}`, text)
        : whatsappUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Une question ? Écrivez-nous"
        intro="Inscription, tarifs, partenariat : notre équipe vous répond rapidement, de préférence sur WhatsApp."
      />
      <section className="container-site grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
        <div className="space-y-3 lg:col-span-5">
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={CONTACT.phoneWhatsapp}
            href={whatsappUrl("Bonjour IvoiRobot, j'aimerais avoir des informations.")}
            external
          />
          <ContactCard icon={Phone} label="Téléphone mobile" value={CONTACT.phoneMobile} href={CONTACT.phoneMobileHref} />
          <ContactCard icon={Mail} label="E-mail" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            <MapPin className="mt-1 size-5 shrink-0 text-leaf" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-leaf">Adresse</p>
              <p className="mt-1 font-semibold">
                {CONTACT.city}, {CONTACT.country}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <Fill>{CONTACT.addressDetail}</Fill>
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-9 lg:col-span-7"
          aria-describedby="form-note"
        >
          <h2 className="font-display text-2xl font-bold">Envoyer un message</h2>
          <p id="form-note" className="mt-2 text-sm text-muted-foreground">
            Votre message s'ouvrira dans WhatsApp ou dans votre messagerie, prêt à être envoyé. Les champs marqués * sont
            obligatoires.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" name="name" autoComplete="name" required maxLength={100} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reach">Téléphone ou e-mail *</Label>
              <Input id="reach" name="reach" autoComplete="tel" required maxLength={150} className="h-12" />
            </div>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-medium">Vous êtes</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {profiles.map((p, i) => (
                <label
                  key={p}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-input px-4 text-sm has-[:checked]:border-leaf has-[:checked]:bg-leaf-soft"
                >
                  <input type="radio" name="profile" value={p} defaultChecked={i === 0} className="accent-leaf" />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Votre message *</Label>
            <Textarea id="message" name="message" required rows={5} maxLength={2000} placeholder="Ex. : mon fils a 12 ans, quelles sont les prochaines dates ?" />
          </div>

          {error && (
            <p role="alert" className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" value="whatsapp" variant="cta" size="lg">
              Envoyer par WhatsApp
            </Button>
            <Button type="submit" value="email" variant="outline" size="lg">
              Envoyer par e-mail
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Vos données servent uniquement à vous répondre. Voir notre{" "}
            <Link to="/confidentialite" className="text-leaf underline underline-offset-2">
              politique de confidentialité
            </Link>
            .
          </p>
        </form>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-leaf"
    >
      <Icon className="mt-1 size-5 shrink-0 text-leaf" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-leaf">{label}</p>
        <p className="mt-1 break-all font-display text-lg font-semibold">{value}</p>
      </div>
    </a>
  );
}
