import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const KEY = "ivoirobot-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "refused") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* stockage indisponible : on masque simplement */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Gestion des cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-lift sm:inset-x-6 sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-foreground">
        Nous utilisons uniquement des cookies de mesure d'audience, avec votre accord, pour améliorer le site.{" "}
        <Link to="/confidentialite" className="font-medium text-leaf underline underline-offset-2">
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="leaf" size="sm" onClick={() => choose("accepted")}>
          Accepter
        </Button>
        <Button variant="outline" size="sm" onClick={() => choose("refused")}>
          Refuser
        </Button>
      </div>
    </div>
  );
}
