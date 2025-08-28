import React from "react";

type Filters = {
  q: string;
  domains: string[];
  tasks: string[];
  frameworks: string[];
  device: string; // simple single-select for demo
  sizeMin?: number;
  sizeMax?: number;
  priceMin?: number;
  priceMax?: number;
  sort: "relevance" | "price-asc" | "price-desc" | "size-asc" | "size-desc" | "map-desc";
};

type Props = {
  values: Filters;
  onChange: (next: Partial<Filters>) => void;
  domainOptions: string[];
  taskOptions: string[];
  frameworkOptions: string[];
  deviceOptions: string[];
};

export default function Filters({ values, onChange, domainOptions, taskOptions, frameworkOptions, deviceOptions }: Props) {
  const handleMultiToggle = (key: "domains" | "tasks" | "frameworks", val: string) => {
    const cur = new Set(values[key]);
    cur.has(val) ? cur.delete(val) : cur.add(val);
    onChange({ [key]: Array.from(cur) });
  };

  return (
    <aside className="w-full md:w-72 shrink-0 space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Search</label>
        <input
          value={values.q}
          onChange={(e) => onChange({ q: e.target.value })}
          placeholder="Search models, classes, tasks…"
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Domain</label>
        <div className="flex flex-wrap gap-2">
          {domainOptions.map((d) => (
            <button
              key={d}
              className={`rounded-full border px-3 py-1 text-xs ${values.domains.includes(d) ? "bg-slate-900 text-white border-slate-900" : "border-slate-300"}`}
              onClick={() => handleMultiToggle("domains", d)}
              type="button"
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Task</label>
        <div className="flex flex-wrap gap-2">
          {taskOptions.map((t) => (
            <button
              key={t}
              className={`rounded-full border px-3 py-1 text-xs ${values.tasks.includes(t) ? "bg-slate-900 text-white border-slate-900" : "border-slate-300"}`}
              onClick={() => handleMultiToggle("tasks", t)}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Framework</label>
        <div className="flex flex-wrap gap-2">
          {frameworkOptions.map((f) => (
            <button
              key={f}
              className={`rounded-full border px-3 py-1 text-xs ${values.frameworks.includes(f) ? "bg-slate-900 text-white border-slate-900" : "border-slate-300"}`}
              onClick={() => handleMultiToggle("frameworks", f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Device Compatibility</label>
        <select
          value={values.device}
          onChange={(e) => onChange({ device: e.target.value })}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="">Any</option>
          {deviceOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-700">Size ≥ MB</label>
          <input
            type="number"
            value={values.sizeMin ?? ""}
            onChange={(e) => onChange({ sizeMin: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700">Size ≤ MB</label>
          <input
            type="number"
            value={values.sizeMax ?? ""}
            onChange={(e) => onChange({ sizeMax: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
            min={0}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-700">Price ≥</label>
          <input
            type="number"
            value={values.priceMin ?? ""}
            onChange={(e) => onChange({ priceMin: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700">Price ≤</label>
          <input
            type="number"
            value={values.priceMax ?? ""}
            onChange={(e) => onChange({ priceMax: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
            min={0}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-700">Sort</label>
        <select
          value={values.sort}
          onChange={(e) => onChange({ sort: e.target.value as Filters["sort"] })}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="relevance">Relevance</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
          <option value="size-asc">Size (Small → Large)</option>
          <option value="size-desc">Size (Large → Small)</option>
          <option value="map-desc">mAP (High → Low)</option>
        </select>
      </div>
    </aside>
  );
}
