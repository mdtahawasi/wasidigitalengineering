import { describe, expect, it } from "vitest";
import { createModelElements, DISCIPLINES, LEVELS } from "./modelData";

describe("illustrative BIM metadata", () => {
  it("includes detailed families with unique identifiers", () => {
    const elements = createModelElements(null);
    expect(elements.length).toBeGreaterThan(650);
    expect(new Set(elements.map(e => e.id)).size).toBe(elements.length);
    for (const d of DISCIPLINES) expect(elements.some(e => e.discipline === d.key)).toBe(true);
    for (const family of ["Ground beams", "VAV boxes", "Isolation valves", "Smoke detectors", "Lift doors", "Data outlets"]) expect(elements.some(e => e.family === family)).toBe(true);
  });
  it("preserves floor element IDs across cutaways", () => {
    const full = createModelElements(null);
    for (let floor = 0; floor < LEVELS; floor++) {
      const section = createModelElements(floor);
      for (const element of full.filter(e => e.level === floor)) {
        const cut = section.find(e => e.id === element.id);
        expect(cut?.family).toBe(element.family);
        expect(cut?.position[1]).toBeCloseTo(element.position[1] - floor * 1.4);
      }
    }
  });
});