'use client'

import React, { useMemo, useState } from "react";

type PreferredContact = "phone_now" | "email" | "text";

type FormState = {
  issueCategory: string;
  issueDetails: string;
  name: string;
  email: string;
  phone: string;
  preferred: PreferredContact | "";
};

const ISSUE_CATEGORIES = [
  "Model download/install issue",
  "Device linking problem",
  "Billing or invoice question",
  "Bug or unexpected behaviour",
  "Feature request / feedback",
  "Other",
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => {
  const digits = v.replace(/[^\d]/g, "");
  return digits.length >= 8; // simple demo check (AU numbers typically 10)
};

function Stepper({ step }: { step: number }) {
  const labels = ["Issue", "Contact", "Preference", "Review"];
  return (
    <ol className="mb-6 flex items-center gap-3 text-xs">
      {labels.map((label, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={[
                "grid h-6 w-6 place-items-center rounded-full border text-[11px]",
                done
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-600",
              ].join(" ")}
            >
              {i + 1}
            </span>
            <span className={active ? "font-medium" : "text-slate-500"}>{label}</span>
            {i < labels.length - 1 && <span className="mx-2 h-px w-8 bg-slate-200" />}
          </li>
        );
      })}
    </ol>
  );
}

export default function SupportHub() {
  const [step, setStep] = useState(0);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [f, setF] = useState<FormState>({
    issueCategory: "",
    issueDetails: "",
    name: "",
    email: "",
    phone: "",
    preferred: "",
  });

  // Step validations
  const stepValid = useMemo(() => {
    if (step === 0) {
      return f.issueCategory.trim().length > 0 && f.issueDetails.trim().length >= 10;
    }
    if (step === 1) {
      const base = f.name.trim().length >= 2;
      return base && (f.email.trim().length > 0 || f.phone.trim().length > 0);
    }
    if (step === 2) {
      if (f.preferred === "") return false;
      if (f.preferred === "email") return emailOk(f.email);
      if (f.preferred === "text" || f.preferred === "phone_now") return phoneOk(f.phone);
      return false;
    }
    if (step === 3) return true;
    return false;
  }, [step, f]);

  const onSubmit = () => {
    // Demo only: generate a fake ticket id and show success
    const id = `SUP-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;
    console.log("Support submission (demo)", { id, ...f });
    setSubmittedId(id);
  };

  if (submittedId) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-2 text-2xl font-semibold">Request submitted</div>
          <p className="text-slate-600">
            Thanks, we've captured your request. Your demo ticket ID is{" "}
            <span className="font-mono font-semibold">{submittedId}</span>.
          </p>
          <div className="mt-6 text-xs text-slate-500">
            Demo only — no messages will be sent. Buttons on this page do not link out.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-semibold">Support</h1>
      <p className="mb-6 text-sm text-slate-600">
        This is a progressive form. Complete each step to continue. No external links are wired on this demo page.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Stepper step={step} />

        {/* Step 0: Issue */}
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-xs font-medium text-slate-700">What's the issue about?</label>
              <div className="grid gap-2 sm:grid-cols-2">
                {ISSUE_CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setF((s) => ({ ...s, issueCategory: c }))}
                    className={[
                      "rounded-xl border px-3 py-2 text-left text-sm",
                      f.issueCategory === c
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 bg-white",
                    ].join(" ")}
                    aria-pressed={f.issueCategory === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-[11px] text-slate-500">Choose one to proceed.</p>
            </div>

            <div>
              <label htmlFor="issueDetails" className="mb-2 block text-xs font-medium text-slate-700">
                Describe the issue (min 10 chars)
              </label>
              <textarea
                id="issueDetails"
                value={f.issueDetails}
                onChange={(e) => setF((s) => ({ ...s, issueDetails: e.target.value }))}
                className="h-32 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                placeholder="Tell us what happened, any error messages, device used, etc."
              />
            </div>
          </div>
        )}

        {/* Step 1: Contact details */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-medium text-slate-700">
                Your name
              </label>
              <input
                id="name"
                value={f.name}
                onChange={(e) => setF((s) => ({ ...s, name: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                placeholder="Jane Citizen"
                autoComplete="name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={f.email}
                  onChange={(e) => setF((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {f.email && !emailOk(f.email) && (
                  <p className="mt-1 text-[11px] text-rose-600">Please enter a valid email.</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-xs font-medium text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={f.phone}
                  onChange={(e) => setF((s) => ({ ...s, phone: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  placeholder="+61 4xx xxx xxx"
                  autoComplete="tel"
                />
                {f.phone && !phoneOk(f.phone) && (
                  <p className="mt-1 text-[11px] text-rose-600">Please enter a valid phone number.</p>
                )}
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              You can provide either email or phone now; you'll choose your preferred contact method next.
            </p>
          </div>
        )}

        {/* Step 2: Preferred contact */}
        {step === 2 && (
          <div className="space-y-5">
            <fieldset>
              <legend className="mb-2 block text-xs font-medium text-slate-700">Preferred method of contact</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  <input
                    type="radio"
                    name="pref"
                    checked={f.preferred === "phone_now"}
                    onChange={() => setF((s) => ({ ...s, preferred: "phone_now" }))}
                  />
                  Instant phone call
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  <input
                    type="radio"
                    name="pref"
                    checked={f.preferred === "email"}
                    onChange={() => setF((s) => ({ ...s, preferred: "email" }))}
                  />
                  Email
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  <input
                    type="radio"
                    name="pref"
                    checked={f.preferred === "text"}
                    onChange={() => setF((s) => ({ ...s, preferred: "text" }))}
                  />
                  Text
                </label>
              </div>
            </fieldset>

            {f.preferred === "phone_now" && (
              <div className="rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
                You'll receive an instant callback to{" "}
                <span className="font-medium">{f.phone || "(no phone provided yet)"}</span>.  
                Ensure your number is correct on the previous step.
              </div>
            )}
            {f.preferred === "email" && (
              <div className="rounded-xl bg-blue-50 p-3 text-xs text-blue-900">
                We'll email you at <span className="font-medium">{f.email || "(no email provided yet)"}</span>.
              </div>
            )}
            {f.preferred === "text" && (
              <div className="rounded-xl bg-emerald-50 p-3 text-xs text-emerald-900">
                We'll text you at <span className="font-medium">{f.phone || "(no phone provided yet)"}</span>.
              </div>
            )}
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="mb-2 text-sm font-medium">Summary</div>
              <dl className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-slate-500">Issue category</dt>
                  <dd className="font-medium">{f.issueCategory}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Preferred contact</dt>
                  <dd className="font-medium">
                    {f.preferred === "phone_now" ? "Instant phone call" : f.preferred === "email" ? "Email" : "Text"}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-slate-500">Issue details</dt>
                  <dd className="whitespace-pre-wrap font-medium">{f.issueDetails}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Name</dt>
                  <dd className="font-medium">{f.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Email</dt>
                  <dd className="font-medium">{f.email || "—"}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Phone</dt>
                  <dd className="font-medium">{f.phone || "—"}</dd>
                </div>
              </dl>
            </div>
            <div className="text-xs text-slate-500">
              Demo only — submitting will generate a fake ticket ID and show a success message. No external links.
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm disabled:opacity-50"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              type="button"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              disabled={!stepValid}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
              onClick={onSubmit}
              disabled={!stepValid}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
