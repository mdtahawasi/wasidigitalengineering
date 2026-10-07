# BIM model: full ASMEPF disciplines + advanced local and global SEO

## 1. BIM model with all ASMEPF disciplines
The model already has Architecture, Structure, Mechanical (HVAC), Electrical, Plumbing, Fire Fighting and Interiors. It has no Facade discipline yet.

- Add **Facade (FAC)** as a separate discipline with these elements: curtain-wall mullions and transoms, glazing panels per floor, spandrel panels, aluminium cladding (ACP) fins, sunshades or louvres, parapet coping, brackets and anchors, and the entrance canopy glazing.
- Show the disciplines in ASMEPF order: Arch, Str, Mech, Ele, Plum, Fire Fighting, Facade. Interiors stays as an extra layer.
- Add more detail to every discipline:
  - **Arch:** stair flights, railings, doors with swing, lift shaft, toilet cores
  - **Str:** footings, pile caps, beams with numbered grids, shear walls, slabs per level
  - **Mech:** AHUs, FCUs, supply and return ducts, diffusers, chillers on the roof
  - **Ele:** main LT panel, DBs per floor, cable trays, luminaires, earthing
  - **Plum:** water tanks, risers, drainage stacks, fixtures, pumps
  - **Fire:** sprinkler mains and heads, hydrant risers, hose reels, fire pump room
- Clicking any element shows its code, level, system and purpose, the same way it works now.
- Each discipline gets its own colour, legend entry, isolate button and filter. Labels and the "Illustrative model" note stay in place.
- Check the model on desktop and mobile: nothing should overlap or run off the screen, and it should still render smoothly.

## 2. Advanced SEO
- **Vidarbha region:** add keywords and location data for Nagpur, Amravati, Akola, Chandrapur, Wardha, Yavatmal, Gondia, Bhandara and Washim. Example search terms: "construction company in Vidarbha", "BIM services Nagpur", "engineering consultants Vidarbha". These go into the page titles, descriptions, the service-area schema and a short visible "Areas we serve" section on the Construction and BIM home pages.
- **Worldwide BIM and engineering:** strengthen the schema and copy for the US, UK, UAE, Saudi Arabia, Qatar, Europe and Australia. Search terms include "BIM outsourcing", "Revit modelling services", "MEP coordination", "Scan to BIM", "BIM LOD 400" and "clash detection services".
- Add FAQ entries targeting the Vidarbha and global searches, plus hreflang and areaServed refinements. Add the new routes to the sitemap if any are created.
- Keep BIM and Construction content separate, as they are now.

Note: no one can guarantee top Google rankings. Rankings also depend on publishing the site, connecting Google Search Console, a Google Business Profile for Nagpur, and backlinks. I will list these steps for you.

## Technical
- modelData.ts: add `facade` to Discipline, add a generator for it, enrich the other generators, and reorder DISCIPLINES.
- index.css: add a `--bim-facade` token. BIMLayerViewer and ModelScene pick up the new discipline automatically because both read the same metadata.
- index.html and the shared SEO config: add the Vidarbha `areaServed` and geo data. DivisionSEO stays the owner of per-route metadata.
