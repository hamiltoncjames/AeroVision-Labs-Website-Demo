'use client'

import React, { useMemo, useState } from "react";
import ModelCard, { ModelItem } from "./components/ModelCard";
import Filters from "./components/Filters";
import * as all from "../../mock/models"; // expects export like: export const models: ModelItem[] = [...]
const models = (all as any).models as ModelItem[]; // adapt if your export differs

type FiltersState = {
  q: string;
  domains: string[];
  tasks: string[];
  frameworks: string[];
  device: string;
  sizeMin?: number;
  sizeMax?: number;
  priceMin?: number;
  priceMax?: number;
  sort: "relevance" | "price-asc" | "price-desc" | "size-asc" | "size-desc" | "map-desc";
};

const uniq = (arr: string[]) => Array.from(new Set(arr)).sort();

export default function ModelsCatalog() {
  const [filters, setFilters] = useState<FiltersState>({
    q: "",
    domains: [],
    tasks: [],
    frameworks: [],
    device: "",
    sizeMin: undefined,
    sizeMax: undefined,
    priceMin: undefined,
    priceMax: undefined,
    sort: "relevance",
  });

  const domainOptions = useMemo(() => uniq(models.map(m => m.domain)), []);
  const taskOptions = useMemo(() => uniq(models.map(m => m.task)), []);
  const frameworkOptions = useMemo(() => uniq(models.map(m => m.framework)), []);
  const deviceOptions = useMemo(() => uniq(models.flatMap(m => m.compatibleDevices)), []);

  const filtered = useMemo(() => {
    let out = [...models];

    // search
    if (filters.q.trim()) {
      const q = filters.q.toLowerCase();
      out = out.filter(m =>
        [m.name, m.domain, m.task, m.framework, m.slug]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    // domain/task/framework multi-filters
    if (filters.domains.length) out = out.filter(m => filters.domains.includes(m.domain));
    if (filters.tasks.length) out = out.filter(m => filters.tasks.includes(m.task));
    if (filters.frameworks.length) out = out.filter(m => filters.frameworks.includes(m.framework));
    // device compatibility
    if (filters.device) out = out.filter(m => m.compatibleDevices.includes(filters.device));
    // size
    if (typeof filters.sizeMin === "number") out = out.filter(m => m.sizeMB >= (filters.sizeMin as number));
    if (typeof filters.sizeMax === "number") out = out.filter(m => m.sizeMB <= (filters.sizeMax as number));
    // price
    if (typeof filters.priceMin === "number") out = out.filter(m => m.priceAUD >= (filters.priceMin as number));
    if (typeof filters.priceMax === "number") out = out.filter(m => m.priceAUD <= (filters.priceMax as number));

    // sort
    switch (filters.sort) {
      case "price-asc":
        out.sort((a, b) => a.priceAUD - b.priceAUD);
        break;
      case "price-desc":
        out.sort((a, b) => b.priceAUD - a.priceAUD);
        break;
      case "size-asc":
        out.sort((a, b) => a.sizeMB - b.sizeMB);
        break;
      case "size-desc":
        out.sort((a, b) => b.sizeMB - a.sizeMB);
        break;
      case "map-desc":
        out.sort((a, b) => (b.metrics.mAP ?? 0) - (a.metrics.mAP ?? 0));
        break;
      case "relevance":
      default:
        // keep original order
        break;
    }
    return out;
  }, [filters]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Page header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Models</h1>
          <p className="text-sm text-slate-600">
            Browse deploy-ready aerial models. Pricing is shown on this page (per model).
          </p>
        </div>
        <div className="text-sm text-slate-500">
          {filtered.length} of {models.length} models
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <Filters
          values={filters}
          onChange={(next) => setFilters((prev) => ({ ...prev, ...next }))}
          domainOptions={domainOptions}
          taskOptions={taskOptions}
          frameworkOptions={frameworkOptions}
          deviceOptions={deviceOptions}
        />

        {/* Grid */}
        <section className="flex-1">
          {filtered.length === 0 ? (
            <div className="grid place-items-center rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <div className="max-w-md space-y-3">
                <div className="text-lg font-medium">No results</div>
                <p className="text-sm text-slate-600">
                  Try clearing some filters or broadening your search.
                </p>
                <button
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  onClick={() =>
                    setFilters({
                      q: "",
                      domains: [],
                      tasks: [],
                      frameworks: [],
                      device: "",
                      sizeMin: undefined,
                      sizeMax: undefined,
                      priceMin: undefined,
                      priceMax: undefined,
                      sort: "relevance",
                    })
                  }
                >
                  Reset filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m) => (
                <ModelCard key={m.id} item={m} />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Footer note (demo) */}
      <div className="mt-8 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
        Demo only — buttons expose <code>data-url</code> targets for manual wiring later.
      </div>
    </div>
  );
}
