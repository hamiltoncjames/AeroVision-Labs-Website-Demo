import React from "react";
import { motion } from "framer-motion";

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
  model: ModelItem;
};

const currency = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);

export default function ModelCard({ model }: Props) {
  return (
    <motion.div 
      className="relative group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
      <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
        <div className="aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {model.thumbnail ? (
            <img src={model.thumbnail} alt={model.name} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full grid place-items-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-xs">Thumbnail</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight text-white">{model.name}</h3>
            <div className="shrink-0 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-1 text-xs font-medium text-white">
              {currency(model.priceAUD)}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-indigo-900/50 border border-indigo-500/30 px-2 py-1 text-indigo-300">{model.domain}</span>
            <span className="rounded-full bg-purple-900/50 border border-purple-500/30 px-2 py-1 text-purple-300">{model.task}</span>
            <span className="rounded-full bg-cyan-900/50 border border-cyan-500/30 px-2 py-1 text-cyan-300">{model.framework}</span>
            <span className="rounded-full bg-gray-800/50 border border-gray-600/30 px-2 py-1 text-gray-300">{model.sizeMB} MB</span>
          </div>

          <div className="text-xs text-gray-400">
            {typeof model.metrics?.mAP === "number" && (
              <span className="mr-3">mAP: {Math.round(model.metrics.mAP * 10) / 10}</span>
            )}
            {typeof model.metrics?.fpsRCPro === "number" && (
              <span>FPS (DJI RC Pro E): {model.metrics.fpsRCPro}</span>
            )}
          </div>

          {model.includedIn?.length ? (
            <div className="text-[11px] text-gray-500">
              Included in: {model.includedIn.join(" • ")}
            </div>
          ) : null}

          <div className="pt-2 flex gap-2">
            <button
              className="flex-1 rounded-xl border border-cyan-500/30 bg-transparent hover:bg-cyan-900/10 hover:border-cyan-500/50 text-cyan-400 px-3 py-2 text-sm transition-all duration-300"
              data-url={`/models/${model.slug}`}
            >
              Details
            </button>
            <button
              className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-3 py-2 text-sm transition-all duration-300"
              data-url={`/checkout`}
            >
              Buy
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-gray-500">
              Compatible: {model.compatibleDevices.slice(0, 2).join(", ")}
              {model.compatibleDevices.length > 2 ? " +" : ""}
            </div>
            <label className="inline-flex items-center gap-2 text-xs text-gray-500">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-600 text-cyan-500 focus:ring-cyan-500" /> Compare
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
