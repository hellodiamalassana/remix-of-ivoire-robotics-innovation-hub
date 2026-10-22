import { BRAND } from "./site";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

/** Per-route head metadata: unique title/description, Open Graph, canonical. */
export function seo({ title, description, path, type = "website" }: SeoInput) {
  const fullTitle = path === "/" ? title : `${title} — ${BRAND}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
