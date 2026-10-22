import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { LINKS, STEM_CAMP, whatsappUrl } from "@/lib/site";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("IvoiRobot site rules", () => {
  it("the WhatsApp button points to +225 07 47 35 56 36", () => {
    expect(whatsappUrl()).toBe("https://wa.me/2250747355636");
  });

  it("every external link uses https", () => {
    for (const url of Object.values(LINKS)) expect(url.startsWith("https://")).toBe(true);
  });

  it("the STEM Camp no longer advertises the past 2025 session", () => {
    expect(JSON.stringify(STEM_CAMP)).not.toContain("2025");
  });

  it.each([
    "/a-propos",
    "/programmes",
    "/formations",
    "/competitions",
    "/stem-camp",
    "/actualites",
    "/nous-soutenir",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/contact-us",
    "/stem-camps-vacances",
  ])("%s has a page", (path) => {
    expect(router().matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
