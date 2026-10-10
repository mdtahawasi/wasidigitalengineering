export type Discipline = "structural" | "architectural" | "hvac" | "plumbing" | "electrical" | "fire" | "facade" | "interior";
export type Vector3 = [number, number, number];
export type ModelElement = {
  id: string; discipline: Discipline; family: string; name: string;
  level: number; position: Vector3; size: Vector3;
  shape: "box" | "cylinder" | "sphere"; rotation?: Vector3;
  material: string; system: string; purpose: string;
};

export const DISCIPLINES: { key: Discipline; code: string; name: string; subtitle: string }[] = [
  { key: "architectural", code: "ARC", name: "Architecture", subtitle: "Walls, doors, stairs, lift & toilet cores" },
  { key: "structural", code: "STR", name: "Structure", subtitle: "Piles, footings, grids, beams, slabs & shear walls" },
  { key: "hvac", code: "MEC", name: "Mechanical / HVAC", subtitle: "Chillers, AHUs, FCUs, ducts & diffusers" },
  { key: "electrical", code: "ELE", name: "Electrical", subtitle: "LT panel, DBs, trays, luminaires & earthing" },
  { key: "plumbing", code: "PLB", name: "Plumbing", subtitle: "Tanks, pumps, risers, stacks & fixtures" },
  { key: "fire", code: "FFS", name: "Fire Fighting", subtitle: "Sprinklers, hydrants, hose reels & fire pumps" },
  { key: "facade", code: "FAC", name: "Facade", subtitle: "Curtain wall, ACP fins, louvres & canopy" },
  { key: "interior", code: "INT", name: "Interiors", subtitle: "Partitions, workstations & ceilings" },
];

export const LEVEL_HEIGHT = 1.4;
export const LEVELS = 6;

// Diagram units are intentionally not physical construction dimensions.
export function createModelElements(floor: number | null): ModelElement[] {
  const elements: ModelElement[] = [];
  const single = floor !== null;
  const floorIndex = floor ?? 0;
  const height = single ? LEVEL_HEIGHT : LEVELS * LEVEL_HEIGHT;
  const counts = new Map<string, number>();
  const add = (discipline: Discipline, family: string, name: string, level: number, position: Vector3, size: Vector3, material: string, system: string, purpose: string, shape: ModelElement["shape"] = "box", rotation?: Vector3) => {
    const familyCode = family.toUpperCase().replace(/[^A-Z0-9]+/g, "-");
    const key = `${DISCIPLINES.find(d => d.key === discipline)?.code}-${level < 0 ? "CORE" : `L${level}`}-${familyCode}`;
    const sequence = (counts.get(key) ?? 0) + 1;
    counts.set(key, sequence);
    elements.push({ id: `${key}-${String(sequence).padStart(2, "0")}`, discipline, family, name, level, position, size, material, system, purpose, shape, rotation });
  };
  const grid = [-2, 0, 2];
  for (const x of grid) for (const z of grid) {
    if (!single) add("structural", "Pad footings", "Isolated pad footing", -1, [x, -0.14, z], [0.85, 0.28, 0.85], "Reinforced concrete", "Foundation", "Transfers column loads to the supporting ground.");
    add("structural", "Columns", "RCC column", single ? floorIndex : -1, [x, height / 2, z], [0.22, height, 0.22], "Reinforced concrete", "Gravity frame", "Carries vertical loads from beams and floor slabs to foundations.");
  }
  add("structural", "Shear walls", "Lift-core shear wall", single ? floorIndex : -1, [-0.65, height / 2, -1.6], [0.15, height, 1.4], "Reinforced concrete", "Lateral stability", "Resists lateral loads around the service core.");
  add("structural", "Shear walls", "Lift-core rear shear wall", single ? floorIndex : -1, [0, height / 2, -2.2], [1.4, height, 0.15], "Reinforced concrete", "Lateral stability", "Works with the side core wall to stabilize the frame.");
  const floors = single ? [floorIndex] : Array.from({ length: LEVELS }, (_, i) => i);
  for (const f of floors) {
    const y = single ? 0 : f * LEVEL_HEIGHT;
    add("structural", "Floor slabs", "Floor plate", f, [0, y, 0], [5, 0.08, 5], "Reinforced concrete", "Floor structure", "Distributes occupancy loads to the supporting beams.");
    for (const p of grid) {
      add("structural", "Beams", "Primary beam · X direction", f, [0, y + LEVEL_HEIGHT - 0.12, p], [4.5, 0.2, 0.16], "Reinforced concrete", "Gravity frame", "Spans between columns and supports the floor plate above.");
      add("structural", "Beams", "Secondary beam · Z direction", f, [p, y + LEVEL_HEIGHT - 0.12, 0], [0.16, 0.2, 4.5], "Reinforced concrete", "Gravity frame", "Connects the column grid across the perpendicular direction.");
    }
    for (let side = 0; side < 4; side++) for (const u of [-1.6, -0.55, 0.55, 1.6]) {
      const pos: Vector3 = side < 2 ? [u, y + 0.73, side === 0 ? 2.52 : -2.52] : [side === 2 ? 2.52 : -2.52, y + 0.73, u];
      const size: Vector3 = side < 2 ? [0.92, 0.94, 0.035] : [0.035, 0.94, 0.92];
      add("facade", "Curtain-wall glazing", "Curtain-wall glass panel", f, pos, size, "Insulated glazing", "Building envelope", "Provides daylight and encloses the occupied floor.");
      const framePos: Vector3 = side < 2 ? [u - 0.49, y + 0.73, pos[2]] : [pos[0], y + 0.73, u - 0.49];
      add("facade", "Mullions", "Vertical façade mullion", f, framePos, side < 2 ? [0.045, 1.25, 0.06] : [0.06, 1.25, 0.045], "Aluminium", "Curtain wall framing", "Supports and separates adjacent glazing panels.");
    }
    for (const z of [-2.52, 2.52]) add("facade", "Spandrel bands", "Façade spandrel band", f, [0, y + 0.12, z], [5.1, 0.2, 0.06], "Metal cladding", "Building envelope", "Conceals the edge of the floor slab.");
    add("architectural", "Doors", "Core access door", f, [0.35, y + 0.43, -0.85], [0.45, 0.86, 0.065], "Solid-core door", "Circulation", "Connects the occupied floor to the stair and lift lobby.");
    for (let step = 0; step < 8; step++) add("architectural", "Stairs", "Stair tread", f, [0.65, y + step * 0.15 + 0.07, -2 + step * 0.13], [0.7, 0.12, 0.18], "Precast concrete", "Vertical circulation", "Forms the stepped flight between adjacent levels.");
    add("architectural", "Handrails", "Stair handrail", f, [1.02, y + 0.99, -1.55], [0.045, 0.045, 1.55], "Stainless steel", "Stair safety", "Provides support along the stair flight.", "box", [-0.85, 0, 0]);
    for (const [z, family, name] of [[0.65, "Supply ducts", "Main supply-air duct"], [-0.55, "Return ducts", "Main return-air duct"]] as const) {
      add("hvac", family, name, f, [0, y + 1.05, z], [4.1, 0.18, 0.28], "Galvanized steel", family === "Supply ducts" ? "Supply air" : "Return air", family === "Supply ducts" ? "Distributes conditioned air to the branch ducts." : "Collects room air for return to the air handling unit.");
    }
    for (const x of [-1.35, 0.1, 1.5]) {
      add("hvac", "Branch ducts", "Supply branch duct", f, [x, y + 1.05, 1.13], [0.15, 0.13, 0.75], "Galvanized steel", "Supply air", "Connects the main duct to a ceiling diffuser.");
      add("hvac", "Diffusers", "Ceiling supply diffuser", f, [x, y + 0.95, 1.5], [0.32, 0.06, 0.32], "Powder-coated aluminium", "Air terminal", "Delivers conditioned air into the occupied space.");
    }
    for (const [x, family, system] of [[-2.25, "Cold-water branches", "Domestic cold water"], [-1.92, "Soil branches", "Gravity drainage"]] as const) {
      add("plumbing", family, `${system} floor branch`, f, [x, y + 0.3, 0], [0.065, 3.6, 0.065], family === "Soil branches" ? "uPVC" : "PPR", system, "Connects sanitary fixtures to the corresponding vertical riser.", "cylinder", [Math.PI / 2, 0, 0]);
    }
    add("plumbing", "Washbasins", "Washbasin", f, [-1.55, y + 0.47, -1.4], [0.48, 0.12, 0.36], "Vitreous ceramic", "Sanitary fixtures", "Receives cold water and discharges through the soil branch.");
    add("plumbing", "Water closets", "WC fixture", f, [-1.65, y + 0.22, -0.65], [0.3, 0.42, 0.48], "Vitreous ceramic", "Sanitary fixtures", "Connects to the soil drainage system.");
    add("electrical", "Cable trays", "Perforated cable tray", f, [0, y + 1.18, 1.92], [4.2, 0.06, 0.2], "Galvanized steel", "Power containment", "Routes power cables horizontally at ceiling level.");
    add("electrical", "Distribution boards", "Floor distribution board", f, [2.2, y + 0.6, 1.6], [0.13, 0.4, 0.28], "Sheet steel enclosure", "Low-voltage distribution", "Distributes incoming power to the floor circuits.");
    for (const x of [-1.2, 1.2]) {
      add("electrical", "Luminaires", "Linear LED luminaire", f, [x, y + 0.88, 0.1], [0.7, 0.055, 0.1], "LED / aluminium", "Lighting", "Provides lighting within the occupied floor.");
      add("electrical", "Socket outlets", "Wall socket outlet", f, [x, y + 0.3, 2.25], [0.1, 0.1, 0.05], "Electrical accessory", "Small power", "Provides a local power connection for equipment.");
    }
    add("fire", "Sprinkler mains", "Floor sprinkler main", f, [0, y + 1.17, -1.1], [0.065, 4.4, 0.065], "Painted steel", "Wet sprinkler system", "Supplies water from the fire riser to the sprinkler branches.", "cylinder", [0, 0, Math.PI / 2]);
    for (const x of [-1.3, 0.1, 1.5]) {
      add("fire", "Sprinkler branches", "Sprinkler branch pipe", f, [x, y + 1.17, -0.35], [0.04, 1.5, 0.04], "Painted steel", "Wet sprinkler system", "Carries water from the main to a sprinkler head.", "cylinder", [Math.PI / 2, 0, 0]);
      add("fire", "Sprinkler heads", "Pendant sprinkler head", f, [x, y + 1.03, 0.4], [0.12, 0.09, 0.12], "Brass", "Fire suppression", "Discharges water locally when thermally activated.", "sphere");
    }
    add("fire", "Hose cabinets", "Fire hose cabinet", f, [1.65, y + 0.58, -1.9], [0.4, 0.5, 0.14], "Painted steel", "Fire response", "Houses a hose reel near the protected circulation core.");
    add("interior", "Partitions", "Office glazed partition", f, [0.15, y + 0.58, -0.3], [3.1, 1.08, 0.035], "Framed glass", "Space planning", "Separates the meeting room from the open workspace.");
    add("interior", "Partitions", "Office solid partition", f, [0.6, y + 0.58, 0.25], [0.055, 1.08, 1.2], "Gypsum board", "Space planning", "Divides the occupied floor into distinct rooms.");
    for (const x of [-0.8, 1.4]) {
      add("interior", "Desks", "Workstation desk", f, [x, y + 0.44, 1.1], [0.8, 0.07, 0.55], "Laminate", "Furniture", "Defines an individual work area in the office layout.");
      add("interior", "Seating", "Task chair", f, [x, y + 0.25, 0.63], [0.3, 0.42, 0.3], "Upholstery / steel", "Furniture", "Provides seating at the adjacent workstation.");
    }
    add("interior", "Ceiling zones", "Suspended ceiling zone", f, [0.6, y + 0.93, 0.55], [2.8, 0.025, 2.6], "Acoustic ceiling tile", "Ceiling coordination", "Defines the ceiling plane below the coordinated services.");
    // Connected terminal details remain simple primitives for mobile inspection.
    add("hvac", "VAV boxes", "Variable-air-volume terminal", f, [-1.35, y + 1.05, 1.06], [0.3, 0.21, 0.28], "Insulated steel", "Supply air", "Regulates the supply airflow to the adjacent branch and diffuser.");
    add("hvac", "Return grilles", "Ceiling return-air grille", f, [0.1, y + 0.95, -0.55], [0.4, 0.06, 0.3], "Aluminium", "Return air", "Collects air from the occupied zone into the return duct.");
    add("hvac", "Fire dampers", "Duct fire damper", f, [1.6, y + 1.05, 0.65], [0.08, 0.22, 0.32], "Galvanized steel", "Supply air", "Illustrates a fire-compartment damper in the supply duct; final positions require a fire strategy.");
    for (const [x, system] of [[-1.55, "Domestic cold water"], [-1.65, "Gravity drainage"]] as const) {
      add("plumbing", "Fixture connections", "Sanitary fixture connection", f, [x, y + 0.28, -1.4], [0.045, 0.4, 0.045], "PPR / uPVC", system, "Illustrates the local connection between a fixture and its floor branch.", "cylinder");
    }
    add("plumbing", "Isolation valves", "Cold-water isolation valve", f, [-2.25, y + 0.3, -1.2], [0.12, 0.12, 0.12], "Brass", "Domestic cold water", "Allows a floor water branch to be isolated for maintenance.", "sphere");
    add("plumbing", "Floor drains", "Wet-area floor drain", f, [-1.55, y + 0.07, -0.2], [0.16, 0.035, 0.16], "Stainless steel", "Gravity drainage", "Collects water at the wet-area floor surface.");
    for (const x of [-1.2, 1.2]) {
      add("electrical", "Lighting conduits", "Lighting circuit conduit", f, [x, y + 0.98, 1.01], [0.025, 0.025, 1.82], "PVC conduit", "Lighting", "Routes a lighting circuit from containment toward the luminaire.");
      add("fire", "Smoke detectors", "Ceiling smoke detector", f, [x, y + 0.89, -0.3], [0.14, 0.05, 0.14], "Polymer enclosure", "Fire detection", "Illustrates detection coverage within the occupied space.", "cylinder");
      for (const legX of [-0.32, 0.32]) add("interior", "Desk frames", "Workstation support leg", f, [x + legX, y + 0.22, 1.1], [0.04, 0.4, 0.4], "Powder-coated steel", "Furniture", "Supports the workstation desktop at its edges.");
    }
    add("electrical", "Data outlets", "Data / communications outlet", f, [1.2, y + 0.3, 2.2], [0.1, 0.1, 0.04], "Electrical accessory", "Communications", "Provides a local communications connection beside small-power outlets.");
    add("electrical", "Emergency lighting", "Core emergency luminaire", f, [0.35, y + 1.02, -0.82], [0.26, 0.07, 0.08], "LED / aluminium", "Emergency lighting", "Illuminates the protected circulation route during a power failure.");
    add("fire", "Alarm call points", "Manual fire alarm call point", f, [1.4, y + 0.65, -1.86], [0.12, 0.13, 0.055], "Polymer enclosure", "Fire detection", "Allows occupants to manually raise a fire alarm near the core.");
    add("architectural", "Door frames", "Core door head frame", f, [0.35, y + 0.89, -0.85], [0.53, 0.05, 0.09], "Steel", "Circulation", "Defines the head of the access-door opening.");
    add("architectural", "Lift doors", "Passenger lift landing door", f, [-0.28, y + 0.45, -0.9], [0.48, 0.9, 0.06], "Stainless steel", "Vertical circulation", "Identifies the lift entrance within the protected service core.");
    add("interior", "Meeting tables", "Meeting-room table", f, [0, y + 0.42, -0.55], [0.85, 0.08, 0.4], "Laminate", "Furniture", "Locates the shared meeting area within the partitioned office.");
    for (const z of [-2.52, 2.52]) add("facade", "Transoms", "Horizontal curtain-wall transom", f, [0, y + 1.2, z], [5.05, 0.045, 0.06], "Aluminium", "Curtain wall framing", "Divides glazing horizontally and carries wind load to mullions.");
    for (const x of [-2.52, 2.52]) add("facade", "Transoms", "Side curtain-wall transom", f, [x, y + 1.2, 0], [0.06, 0.045, 5.05], "Aluminium", "Curtain wall framing", "Divides side glazing horizontally.");
    for (const u of [-2.1, -1.05, 0, 1.05, 2.1]) add("facade", "ACP fins", "Vertical ACP fin", f, [u, y + 0.7, 2.66], [0.05, 1.3, 0.22], "Aluminium composite panel", "Solar shading", "Shades the glazing and articulates the elevation.");
    add("facade", "Louvres", "Horizontal sunshade louvre", f, [2.68, y + 1.1, 0], [0.3, 0.04, 4.8], "Extruded aluminium", "Solar shading", "Cuts direct sun on the east elevation.");
    for (const u of [-1.6, 1.6]) add("facade", "Brackets & anchors", "Curtain-wall slab anchor", f, [u, y + 0.04, -2.45], [0.12, 0.06, 0.12], "Stainless steel", "Facade fixing", "Fixes the curtain-wall stack joint to the slab edge.");
    add("architectural", "Masonry walls", "Core blockwork wall", f, [-1.95, y + 0.6, -1.0], [0.1, 1.2, 1.6], "AAC block", "Internal walls", "Encloses the toilet core.");
    add("architectural", "Lift shaft", "Lift shaft enclosure", f, [-0.28, y + 0.65, -1.55], [0.6, 1.3, 0.04], "RCC / finish", "Vertical circulation", "Encloses the passenger lift car path.");
    add("architectural", "Toilet core", "Toilet cubicle partition", f, [-1.4, y + 0.4, -0.9], [0.03, 0.8, 0.6], "HPL panel", "Wet areas", "Separates WC cubicles in the toilet core.");
    add("architectural", "Floor finishes", "Vitrified tile finish", f, [0.6, y + 0.05, 0.6], [3.6, 0.015, 3.4], "Vitrified tile", "Finishes", "Wearing surface for the occupied floor.");
    for (const z of [-1, 1]) add("structural", "Edge beams", "Perimeter edge beam", f, [z * 2.45, y + LEVEL_HEIGHT - 0.12, 0], [0.18, 0.22, 4.9], "Reinforced concrete", "Gravity frame", "Supports the slab edge and facade anchors.");
    add("hvac", "FCUs", "Ceiling fan coil unit", f, [-0.6, y + 1.1, -1.5], [0.55, 0.2, 0.4], "Galvanized casing", "Chilled water", "Conditions the core and meeting zone locally.");
    add("hvac", "Chilled-water pipes", "CHW supply & return pipe", f, [0, y + 1.22, -1.5], [0.05, 4, 0.05], "Insulated MS pipe", "Chilled water", "Carries chilled water from the plant to FCUs.", "cylinder", [0, 0, Math.PI / 2]);
    add("electrical", "Earthing", "Floor earth bar", f, [2.25, y + 0.2, 1.3], [0.04, 0.06, 0.35], "Copper", "Earthing & bonding", "Bonds floor equipment to the earthing system.");
    add("electrical", "Busbar trunking", "Rising busbar tap-off box", f, [2.2, y + 0.8, 1.95], [0.18, 0.22, 0.14], "Sheet steel", "LV distribution", "Taps power from the rising busbar to the floor DB.");
    add("plumbing", "Hot-water pipes", "Hot-water branch", f, [-2.05, y + 0.36, 0], [0.04, 3.6, 0.04], "CPVC", "Domestic hot water", "Supplies hot water to washbasins.", "cylinder", [Math.PI / 2, 0, 0]);
    add("plumbing", "Urinals", "Wall-hung urinal", f, [-1.9, y + 0.5, -0.2], [0.18, 0.35, 0.2], "Vitreous ceramic", "Sanitary fixtures", "Wall-hung fixture connected to the soil branch.");
    add("fire", "Hydrant landing valves", "Landing valve", f, [2.0, y + 0.55, -1.1], [0.12, 0.12, 0.12], "Gunmetal", "Wet riser / hydrant", "Fire-brigade connection point on each floor.", "sphere");
    add("fire", "Hose reels", "Swinging hose reel drum", f, [1.65, y + 0.58, -1.8], [0.3, 0.06, 0.3], "Painted steel", "First-aid firefighting", "Occupant first-aid firefighting hose.", "cylinder", [Math.PI / 2, 0, 0]);
  }
  for (const [discipline, family, x, z, size, material, system] of [
    ["hvac", "Duct risers", 1.6, -1.6, 0.3, "Galvanized steel", "Vertical air distribution"],
    ["plumbing", "Cold-water risers", -2.25, -1.8, 0.085, "PPR", "Domestic cold water"],
    ["plumbing", "Soil stacks", -1.92, -1.8, 0.12, "uPVC", "Gravity drainage"],
    ["electrical", "Electrical risers", 2.2, 1.9, 0.12, "Cable containment", "Low-voltage distribution"],
    ["fire", "Fire risers", 2.2, -1.1, 0.09, "Painted steel", "Wet sprinkler system"],
  ] as const) add(discipline, family, family.slice(0, -1), single ? floorIndex : -1, [x, height / 2, z], [size, height, size], material, system, "Connects the floor branches through the vertical service shaft.", discipline === "plumbing" || discipline === "fire" ? "cylinder" : "box");
  if (!single) {
    for (const p of grid) {
      add("structural", "Ground beams", "Foundation tie beam · X", -1, [0, -0.08, p], [4.4, 0.18, 0.18], "Reinforced concrete", "Foundation", "Connects individual footings across the foundation grid.");
      add("structural", "Ground beams", "Foundation tie beam · Z", -1, [p, -0.08, 0], [0.18, 0.18, 4.4], "Reinforced concrete", "Foundation", "Ties the perpendicular rows of pad footings together.");
    }
    add("structural", "Floor slabs", "Roof slab", LEVELS, [0, height, 0], [5, 0.08, 5], "Reinforced concrete", "Roof structure", "Supports the roof enclosure and rooftop plant.");
    add("hvac", "Air handling units", "Rooftop air handling unit", LEVELS, [1.2, height + 0.4, -1.2], [1.25, 0.65, 0.8], "Insulated sheet metal", "Mechanical plant", "Conditions air before supplying the building duct network.");
    add("hvac", "Fans", "AHU fan housing", LEVELS, [1.2, height + 0.75, -1.2], [0.35, 0.16, 0.35], "Steel", "Mechanical plant", "Moves air through the air handling unit.", "cylinder");
    add("plumbing", "Water tanks", "Rooftop domestic water tank", LEVELS, [-1.7, height + 0.4, 1.6], [0.85, 0.7, 0.85], "Polyethylene", "Domestic water storage", "Stores water for the domestic distribution riser.", "cylinder");
    for (const x of grid) for (const z of grid) for (const d of [-0.2, 0.2]) add("structural", "Piles", "Bored cast-in-situ pile", -1, [x + d, -0.75, z], [0.12, 0.9, 0.12], "Reinforced concrete", "Deep foundation", "Transfers footing load to competent strata.", "cylinder");
    add("hvac", "Chillers", "Air-cooled chiller", LEVELS, [-0.3, height + 0.35, -1.4], [1.1, 0.6, 0.6], "Steel casing", "Chilled-water plant", "Produces chilled water for AHUs and FCUs.");
    add("electrical", "LT panels", "Main LT panel", -1, [2.0, 0.45, 2.0], [0.6, 0.9, 0.25], "Sheet steel", "LV distribution", "Receives transformer supply and feeds rising mains.");
    add("electrical", "Lightning protection", "Roof air terminal", LEVELS, [2.3, height + 0.4, 2.3], [0.03, 0.8, 0.03], "Copper", "Lightning protection", "Intercepts lightning strikes at roof level.", "cylinder");
    add("plumbing", "Pumps", "Domestic transfer pump", -1, [-2.0, 0.2, 2.0], [0.35, 0.3, 0.25], "Cast iron", "Domestic water", "Lifts water from the sump to the roof tank.", "cylinder");
    add("fire", "Fire pumps", "Main electric fire pump", -1, [1.2, 0.2, 2.0], [0.5, 0.35, 0.3], "Cast iron", "Fire pump room", "Pressurizes sprinkler and hydrant networks.");
    add("fire", "Fire pumps", "Diesel standby fire pump", -1, [0.5, 0.2, 2.0], [0.5, 0.35, 0.3], "Cast iron", "Fire pump room", "Standby pump during power failure.");
    add("facade", "Canopy", "Entrance glass canopy", 0, [0, 1.3, 3.0], [1.6, 0.04, 0.9], "Laminated glass / steel", "Entrance", "Weather protection over the main entrance.");
    for (const z of [-2.55, 2.55]) add("facade", "Parapet coping", "Aluminium coping", LEVELS, [0, height + 0.42, z], [5.15, 0.04, 0.16], "Aluminium", "Roof perimeter", "Caps and waterproofs the parapet.");
    for (const z of [-2.5, 2.5]) add("architectural", "Parapets", "Roof parapet", LEVELS, [0, height + 0.2, z], [5.1, 0.4, 0.1], "Masonry / coping", "Roof perimeter", "Forms the protective edge at roof level.");
  }
  return elements;
}