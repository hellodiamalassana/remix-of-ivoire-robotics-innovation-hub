import type { ReactNode } from "react";

import { CtaBand, PageHeader, ProgramSheet } from "@/components/site/blocks";
import type { Program } from "@/lib/site";

/** Shared layout for a programme page: header, body copy + sticky "fiche programme". */
export function ProgramPage({
  program,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  headerActions,
  showCta = true,
  children,
}: {
  program: Program;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  headerActions?: ReactNode;
  showCta?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro}>
        {headerActions}
      </PageHeader>
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <img
            src={image}
            alt={imageAlt}
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="prose-site mt-4">{children}</div>
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <ProgramSheet program={program} />
          </div>
        </div>
      </section>
      {showCta && <CtaBand />}
    </>
  );
}
