import React from "react";

export type ModelItem = {
  id: string;
  slug: string;
  name: string;
  domain: "Agriculture" | "Utilities" | "Inspection" | string;
  task: "detect" | "segment" | "classify" | string;
  sizeMB: number;
  framework: "PyTorch" | "TensorFlow" | "ONNX" | string;
  compatibleDevices: string[];
  metrics: { mAP?: number; fpsRCPro?: number };
  priceAUD: number;
  includedIn?: string[]; // e.g., ["Starter","Pro","Org"]
  thumbnail?: string;
};

type Props = {
  item: ModelItem;
};

const currency = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);

export default function ModelCard({ item }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-slate-100">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full grid place-items-center text-slate-400 text-sm">
            Thumbnail
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{item.name}</h3>
          <div className="shrink-0 rounded-md bg-slate-900/90 px-2 py-1 text-xs font-medium text-white">
            {currency(item.priceAUD)}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-slate-100 px-2 py-1">{item.domain}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">{item.task}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">{item.framework}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">{item.sizeMB} MB</span>
        </div>

        <div className="text-xs text-slate-600">
          {typeof item.metrics?.mAP === "number" && (
            <span className="mr-3">mAP: {Math.round(item.metrics.mAP * 10) / 10}</span>
          )}
          {typeof item.metrics?.fpsRCPro === "number" && (
            <span>FPS (DJI RC Pro E): {item.metrics.fpsRCPro}</span>
          )}
        </div>

        {item.includedIn?.length ? (
          <div className="text-[11px] text-slate-500">
            Included in: {item.includedIn.join(" • ")}
          </div>
        ) : null}

        <div className="pt-2 flex gap-2">
          <button
            className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm"
            data-url={`/models/${item.slug}`}
          >
            Details
          </button>
          <button
            className="flex-1 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm"
            data-url={`/checkout`}
          >
            Buy
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="text-[11px] text-slate-500">
            Compatible: {item.compatibleDevices.slice(0, 2).join(", ")}
            {item.compatibleDevices.length > 2 ? " +" : ""}
          </div>
          <label className="inline-flex items-center gap-2 text-xs text-slate-500">
            <input type="checkbox" className="rounded" /> Compare
          </label>
        </div>
      </div>
    </div>
  );
}
