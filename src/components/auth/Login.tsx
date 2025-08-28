'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">
            Sign in to access your AI models and drone operations dashboard.
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-8 shadow-xl">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm text-gray-400 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-pressed={showPw}
                  >
                    {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>

              <div className="text-center">
                <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot your password?
                </a>
              </div>

              <div className="text-xs text-gray-500 text-center">
                Demo environment — no real authentication. Sign in with any credentials.
              </div>
            </form>
          </div>
        </motion.div>

        {/* Demo Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-white mb-2">Demo Credentials</h3>
            <div className="text-xs text-gray-400 space-y-1">
              <div>Username: <span className="text-cyan-400">demo</span></div>
              <div>Password: <span className="text-cyan-400">password123</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
