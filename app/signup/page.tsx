"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createUser, getStoredSettings, applyTheme } from "../../lib/auth";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const settings = getStoredSettings();
    applyTheme(settings.theme || "light");
  }, []);

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser({ name, email, password });
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f7f9] text-slate-900 dark:bg-slate-950 dark:text-slate-100 p-6">
      <div className="w-full max-w-4xl rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5 dark:bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative hidden lg:block bg-cyan-700 text-white p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-12">
                  <Image src="/logo.png" alt="NutriPlan" width={40} height={40} />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">NutriPlan</p>
                    <h2 className="text-3xl font-semibold">Fuel your wellness.</h2>
                  </div>
                </div>

                <div className="space-y-4 text-gray-100">
                  <p className="text-lg font-semibold">Create your account</p>
                  <p className="text-sm leading-6 text-cyan-100/90">
                    Join NutriPlan and start managing your nutrition, meal plans, and progress in one place.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">Healthy habits</p>
                  <p className="mt-3 text-sm text-cyan-100/85">Build routines with meal and hydration tracking tailored to your goals.</p>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">Simple analytics</p>
                  <p className="mt-3 text-sm text-cyan-100/85">See your progress and stay motivated with actionable insights.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="NutriPlan" width={38} height={38} />
                <h1 className="text-3xl font-bold text-cyan-900">NutriPlan</h1>
              </div>
              <p className="mt-4 text-gray-500 dark:text-slate-400">Sign up to start customizing your nutrition plan and tracking meals.</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              {error && (
                <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Create a password"
                    className="w-full rounded-3xl border border-gray-200 bg-gray-50 text-slate-900 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Confirm password"
                    className="w-full rounded-3xl border border-gray-200 bg-gray-50 text-slate-900 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-cyan-700 px-5 py-3 text-white font-semibold hover:bg-cyan-800 transition"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-cyan-700 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
