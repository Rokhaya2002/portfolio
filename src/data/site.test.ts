import { describe, expect, it } from "vitest";
import { projects } from "./site";

describe("Portfolio project requirements", () => {
  it.each(["sunu-sante", "sunetablis", "cite-leopold-fitness"])("keeps %s in development", (slug) => {
    expect(projects.find((p) => p.slug === slug)?.status).toBe("En développement");
  });
  it.each(["as-salih", "tektall", "bleu-azur", "notes-personnelles", "numero-senegal"])("keeps the approved completed project %s", (slug) => {
    expect(projects.find((p) => p.slug === slug)?.status).toBe("Terminé");
  });
  it("uses only the two approved categories", () => {
    expect([...new Set(projects.map((p) => p.status))].sort()).toEqual(["En développement", "Terminé"]);
  });
  it("preserves the supplied AS SALIH destination", () => {
    expect(projects.find((p) => p.slug === "as-salih")?.url).toBe("https://as-salih-luxe-mu.vercel.app/");
  });
  it("uses a distinct presentation image for every project", () => {
    expect(new Set(projects.map((p) => p.image)).size).toBe(projects.length);
  });
  it("documents every detail page", () => {
    expect(projects.every((p) => p.slug && p.presentation && p.features.length && p.verification)).toBe(true);
  });
  it("does not publish undocumented repositories as projects", () => {
    expect(projects.filter((p) => ["NeonRunner", "site_genie", "samadon_frontend"].includes(p.name))).toEqual([]);
  });
});