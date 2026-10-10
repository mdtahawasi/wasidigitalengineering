import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Building2, Layers3, Wind, Droplets, Zap, Flame, Palette, PanelsTopLeft, Eye, EyeOff, Focus, RotateCcw, Pause, Play, Tags, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { createModelElements, DISCIPLINES, Discipline, LEVELS, ModelElement } from "./bim/modelData";

const ModelScene = lazy(() => import("./bim/ModelScene"));
const ICONS = { structural: Building2, architectural: Layers3, hvac: Wind, plumbing: Droplets, electrical: Zap, fire: Flame, interior: Palette };
const ALL: Record<Discipline, boolean> = { structural: true, architectural: true, hvac: true, plumbing: true, electrical: true, fire: true, interior: true };

export default function BIMLayerViewer() {
  const [visible, setVisible] = useState(ALL);
  const [discipline, setDiscipline] = useState<Discipline>("structural");
  const [floor, setFloor] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [labels, setLabels] = useState(true);
  const [rotation, setRotation] = useState(false);
  const [xray, setXray] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [view, setView] = useState<"perspective" | "front" | "side" | "top">("perspective");
  const [query, setQuery] = useState("");
  const [palette, setPalette] = useState<{ colors: Record<Discipline, string>; grid: string; selected: string } | null>(null);
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    setPalette({ colors: Object.fromEntries(DISCIPLINES.map(d => [d.key, css.getPropertyValue(`--bim-${d.key}`).trim()])) as Record<Discipline, string>, grid: css.getPropertyValue("--bim-grid").trim(), selected: css.getPropertyValue("--bim-selected").trim() });
  }, []);
  const elements = useMemo(() => createModelElements(floor === "all" ? null : Number(floor)), [floor]);
  const current = DISCIPLINES.find(d => d.key === discipline) ?? DISCIPLINES[0];
  const disciplineElements = elements.filter(e => e.discipline === discipline);
  const families = [...new Set(disciplineElements.map(e => e.family))];
  const matches = disciplineElements.filter(e => `${e.id} ${e.name} ${e.family} ${e.material} ${e.system}`.toLowerCase().includes(query.trim().toLowerCase()));
  const selected = elements.find(e => e.id === selectedId);
  const visibleElements = elements.filter(e => visible[e.discipline]);
  const focus = (key: Discipline) => {
    setDiscipline(key);
    setQuery("");
    setSelectedId(null);
    setVisible(Object.fromEntries(DISCIPLINES.map(d => [d.key, d.key === key])) as Record<Discipline, boolean>);
    setRotation(false);
  };
  const inspect = (element: ModelElement) => {
    setDiscipline(element.discipline);
    setSelectedId(element.id);
    setVisible(v => ({ ...v, [element.discipline]: true }));
    setRotation(false);
  };
  const selectFloor = (value: string) => { setFloor(value); setSelectedId(null); setRotation(false); };
  const levelName = (level: number) => level < 0 ? "Multi-level / foundation" : level === LEVELS ? "Roof" : level === 0 ? "Ground floor" : `Level ${String(level).padStart(2, "0")}`;

  return (
    <div className="space-y-5" data-testid="bim-detail-viewer">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase text-primary">Multidisciplinary coordination</p>
          <p className="mt-1 text-sm text-muted-foreground">6-storey office · 7 disciplines · {elements.length} modeled elements</p>
        </div>
        <div className="flex items-center gap-2">
          <ScanLine className="h-4 w-4 shrink-0 text-primary" />
          <Select value={floor} onValueChange={selectFloor}>
            <SelectTrigger className="w-48" aria-label="Model floor section"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Full building</SelectItem>
              {Array.from({ length: LEVELS }, (_, f) => <SelectItem value={String(f)} key={f}>{levelName(f)} · cutaway</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => { setVisible(ALL); setSelectedId(null); }}><Layers3 />All disciplines</Button>
              <Button size="sm" variant={xray ? "default" : "outline"} aria-pressed={xray} onClick={() => setXray(v => !v)}><ScanLine />X-ray envelope</Button>
            </div>
            <div className="flex gap-1">
              <Button size="icon" variant={labels ? "secondary" : "ghost"} aria-label="Toggle element labels" title="Element labels" aria-pressed={labels} onClick={() => setLabels(v => !v)}><Tags /></Button>
              <Button size="icon" variant="ghost" aria-label={rotation ? "Pause model rotation" : "Rotate model"} title={rotation ? "Pause rotation" : "Rotate model"} onClick={() => setRotation(v => !v)}>{rotation ? <Pause /> : <Play />}</Button>
              <Button size="icon" variant="ghost" aria-label="Reset model view" title="Reset view" onClick={() => { setResetKey(k => k + 1); setView("perspective"); setRotation(false); }}><RotateCcw /></Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Model camera views">
            {(["perspective", "front", "side", "top"] as const).map(preset => <Button key={preset} size="sm" variant={view === preset ? "secondary" : "outline"} aria-pressed={view === preset} onClick={() => { setView(preset); setRotation(false); }} className="capitalize">{preset === "top" ? "Plan view" : `${preset} view`}</Button>)}
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-lg border border-border bg-card/40 sm:h-[580px] xl:h-[660px]" aria-label="Interactive multidisciplinary BIM model">
            <Suspense fallback={<div className="flex h-full items-center justify-center text-sm text-muted-foreground">Loading BIM model…</div>}>
              {palette && <ModelScene elements={elements} visible={visible} colors={palette.colors} gridColor={palette.grid} selectionColor={palette.selected} selected={selectedId} onSelect={inspect} labels={labels} singleFloor={floor !== "all"} rotation={rotation} xray={xray} resetKey={resetKey} view={view} />}
            </Suspense>
            <div className="pointer-events-none absolute left-3 top-3 rounded border border-border bg-background/90 px-3 py-2 backdrop-blur">
              <p className="text-[10px] font-bold uppercase text-primary">{floor === "all" ? "Federated building" : `${levelName(Number(floor))} · section`}</p>
              <p className="mt-1 text-xs text-muted-foreground">{visibleElements.length} visible elements</p>
            </div>
            <div className="pointer-events-none absolute bottom-3 left-3 rounded border border-border bg-background/90 px-2 py-1.5 text-[10px] text-muted-foreground">Illustrative model · Not for construction</div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-border pb-3">
            {DISCIPLINES.map(d => <span key={d.key} className={`flex items-center gap-1.5 text-xs ${visible[d.key] ? "text-foreground" : "text-muted-foreground"}`}><span className={`bim-swatch bim-${d.key}`} />{d.code}</span>)}
          </div>
          <div className="border-t border-border pt-4" aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold">{selected ? selected.name : `${current.name} · element schedule`}</h3>
              <span className="break-all text-xs text-primary">{selected ? selected.id : `${disciplineElements.length} elements`}</span>
            </div>
            {selected && <div className="mt-3 space-y-3">
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[["Discipline", current.name], ["Level", levelName(selected.level)], ["Material", selected.material], ["System", selected.system]].map(([label, value]) => <div key={label}><dt className="text-[10px] uppercase text-muted-foreground">{label}</dt><dd className="mt-1 text-xs font-medium text-foreground">{value}</dd></div>)}
              </dl>
              <p className="text-sm text-muted-foreground">{selected.purpose}</p>
            </div>}
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {families.map(family => {
                const group = disciplineElements.filter(e => e.family === family);
                return <Button key={family} variant={selected?.family === family ? "secondary" : "outline"} className="h-auto min-h-12 justify-between whitespace-normal px-3 py-2 text-left" onClick={() => { const first = group[0]; if (first) inspect(first); }} aria-label={`Inspect ${family}`}><span className="text-xs">{family}</span><span className="ml-2 shrink-0 text-xs text-muted-foreground">{group.length}</span></Button>;
              })}
            </div>
            {selected && <div className="mt-3 flex items-center gap-2">
              <span className="shrink-0 text-xs text-muted-foreground">Element</span>
              <Select value={selected.id} onValueChange={id => { const element = elements.find(e => e.id === id); if (element) inspect(element); }}>
                <SelectTrigger className="min-w-0 max-w-sm [&>span]:truncate" aria-label="Select individual model element"><SelectValue /></SelectTrigger>
                <SelectContent>{disciplineElements.filter(e => e.family === selected.family).map(e => <SelectItem value={e.id} key={e.id}>{e.id} · {levelName(e.level)}</SelectItem>)}</SelectContent>
              </Select>
            </div>}
            <div className="mt-5 space-y-2">
              <label htmlFor="bim-element-search" className="text-xs font-semibold text-foreground">{current.name} · searchable schedule</label>
              <Input id="bim-element-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Name, ID, material or system" />
              <p className="text-xs text-muted-foreground">{matches.length} matching elements</p>
              <div className="max-h-64 overflow-y-auto rounded border border-border">
                {matches.map(element => <Button key={element.id} variant={selectedId === element.id ? "secondary" : "ghost"} className="h-auto min-h-12 w-full justify-start rounded-none border-b border-border px-3 py-2 text-left last:border-b-0" onClick={() => inspect(element)} aria-label={`Inspect ${element.id}`}><span className="min-w-0 whitespace-normal"><span className="block text-xs font-semibold">{element.name}</span><span className="block break-all text-[10px] text-muted-foreground">{element.id} · {levelName(element.level)}</span></span></Button>)}
                {matches.length === 0 && <p className="p-3 text-xs text-muted-foreground">No matching elements</p>}
              </div>
            </div>
          </div>
        </div>
        <aside className="min-w-0 space-y-2" aria-label="BIM discipline controls">
          <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">Discipline visibility & isolation</p>
          {DISCIPLINES.map(d => {
            const Icon = ICONS[d.key];
            const count = elements.filter(e => e.discipline === d.key).length;
            return <div key={d.key} className={`rounded-lg border p-3 ${discipline === d.key ? "border-primary/50 bg-card" : "border-border bg-card/40"}`}>
              <div className="flex items-start gap-3">
                <span className={`bim-icon bim-${d.key}`}><Icon className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2"><h3 className="text-sm font-semibold">{d.name}</h3><span className="shrink-0 text-[10px] text-muted-foreground">{count}</span></div>
                  <p className="mt-1 text-xs text-muted-foreground">{d.subtitle}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Button variant={discipline === d.key ? "default" : "outline"} size="sm" onClick={() => focus(d.key)} aria-label={`Focus ${d.name} discipline`}><Focus className="h-3.5 w-3.5" />Isolate</Button>
                    <Button variant="ghost" size="sm" aria-label={`${visible[d.key] ? "Hide" : "Show"} ${d.name} discipline`} aria-pressed={visible[d.key]} onClick={() => { setVisible(v => ({ ...v, [d.key]: !v[d.key] })); setSelectedId(null); }}>{visible[d.key] ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}{visible[d.key] ? "Hide" : "Show"}</Button>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </aside>
      </div>
    </div>
  );
}
