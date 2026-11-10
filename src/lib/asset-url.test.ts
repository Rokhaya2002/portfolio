import { describe, expect, it } from "vitest";
import { assetUrl } from "./asset-url";
import portrait from "../assets/rokhaya-portrait.jpg.asset.json";

describe("Portable portfolio images", () => {
  it("resolves the supplied portrait outside the local app origin", () => {
    expect(assetUrl(portrait)).toBe(
      "https://id-preview--4ded3b83-ef75-45da-9cf1-3bf8c19cb2cd.lovable.app/__l5e/assets-v1/cdc36d1b-ae51-4c00-9938-8996190bf383/rokhaya-portrait.jpg",
    );
  });
});