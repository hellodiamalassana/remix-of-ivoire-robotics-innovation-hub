import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.webp.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LINKS, NAV } from "@/lib/site";

const linkBase =
  "inline-flex min-h-11 items-center rounded-full px-3 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-paper";
const linkActive = "text-foreground bg-paper";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Aller au contenu
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" className="flex min-h-11 items-center" aria-label="IvoiRobot — accueil">
          <img src={logo.url} alt="IvoiRobot" width={485} height={129} className="h-9 w-auto md:h-10" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) =>
              "children" in item ? (
                <li key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className={`${linkBase} gap-1`}
                    activeProps={{ className: linkActive }}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-64 rounded-2xl border border-border bg-card p-2 shadow-lift">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-foreground hover:bg-paper"
                            activeProps={{ className: "bg-leaf-soft" }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={linkBase}
                    activeProps={{ className: linkActive }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" className="hidden sm:inline-flex">
            <a href={LINKS.inscription} target="_blank" rel="noopener noreferrer">
              Inscrire mon enfant
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Ouvrir le menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-background p-0">
              <SheetTitle className="border-b border-border px-6 py-5 font-display text-lg">Menu</SheetTitle>
              <nav aria-label="Navigation mobile" className="px-3 py-4">
                <ul className="space-y-1">
                  {NAV.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-paper"
                        activeProps={{ className: "bg-paper" }}
                        activeOptions={{ exact: true }}
                      >
                        {item.label}
                      </Link>
                      {"children" in item && (
                        <ul className="ml-3 border-l-2 border-leaf/30 pl-2">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                onClick={() => setOpen(false)}
                                className="flex min-h-11 items-center rounded-xl px-3 text-[0.95rem] text-muted-foreground hover:bg-paper hover:text-foreground"
                                activeProps={{ className: "text-foreground bg-paper" }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="cta" size="lg" className="mt-6 w-full">
                  <a href={LINKS.inscription} target="_blank" rel="noopener noreferrer">
                    Inscrire mon enfant
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
