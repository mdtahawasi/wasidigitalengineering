import { describe, expect, it } from "vitest";
import { COMPANY } from "@/config/company";
import { wcContactCards, wcStats } from "@/data/wasiConstructionData";
import { constructionHeroKpis, constructionCareers, constructionAboutStory } from "@/data/constructionContent";

describe("owner-confirmed company facts", () => {
  it("uses both confirmed email addresses in construction contact data", () => {
    expect(COMPANY.emails).toEqual(["info@witecglobal.com", "taha@witecglobal.com"]);
    expect(wcContactCards.find(card => card.title === "EMAIL")?.lines).toEqual(COMPANY.emails);
  });
  it("uses the confirmed phone and matching dial destination", () => {
    expect(COMPANY.phone).toBe("+971 56 932 7490");
    expect(COMPANY.phoneHref).toBe("tel:+971569327490");
  });
  it("retains the exact full company name", () => {
    expect(COMPANY.name).toBe("WITEC");
    expect(COMPANY.fullName).toBe("Wasi Infratech Engineering & Construction");
  });
  it("uses January 2019 rather than an experience estimate", () => {
    expect(COMPANY.founded).toBe("2019-01");
    expect(wcStats.find(stat => stat.label === "Founded")?.value).toBe("2019");
    expect(constructionAboutStory.timeline[0].year).toBe("2019");
  });
  it("limits company offices to Nagpur HQ in India and UAE", () => {
    expect(COMPANY.offices).toEqual(["India (Nagpur HQ)", "UAE"]);
  });
  it("uses 2–10 for team size, leaving projects delivered intact", () => {
    expect(COMPANY.teamSize).toBe("2–10");
    expect(wcStats.find(stat => stat.label === "Team Strength")?.value).toBe("2–10");
    expect(constructionCareers.stats.find(stat => stat.label === "Team On-Site")?.number).toBe("2–10");
    expect(constructionHeroKpis.find(stat => stat.label === "Projects")).toEqual({ value: 50, suffix: "+", label: "Projects" });
  });
});