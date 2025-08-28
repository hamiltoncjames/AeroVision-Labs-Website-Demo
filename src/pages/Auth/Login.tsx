'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit = username.trim().length > 0 && password.trim().length > 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    // Demo-only: pretend to auth, then go to /account
    setTimeout(() => {
      router.push("/account");
    }, 300);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-slate-600">Demo only — credentials are not verified.</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
        <div>
          <label htmlFor="username" className="mb-1 block text-xs font-medium text-slate-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
            Password
          </label>
          <div className="flex items-stretch gap-2">
            <input
              id="password"
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="rounded-xl border border-slate-300 px-3 text-xs"
              aria-pressed={showPw}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit || loading}
          className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>

        <div className="text-xs text-slate-500">
          By signing in you acknowledge this is a demo environment. No data is persisted.
        </div>
      </form>
    </div>
  );
}
