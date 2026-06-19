"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import { getStoredSettings, applyTheme } from "../../lib/auth";
export default function LoginPage() {
  const router = useRouter();
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const settings = getStoredSettings();
    applyTheme(settings.theme || "light");
  }, []);

 const handleLogin = async () => {
  setError("");

  if (!email || !password) {
    setError("Please enter your email and password.");
    return;
  }

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    router.push("/dashboard");

  } catch (error) {
    setError("Something went wrong");
  }
};

  const googleAccounts = [
    {
      name: "Alex Johnson",
      email: "alexjohnson@gmail.com",
      image: "/profile.jpg",
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      image: "/profile 1.jpg",
    },
    {
      name: "John Smith",
      email: "john@gmail.com",
      image: "/profile 2.jpg",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen flex bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">

        {/* Left Side */}
        <section className="w-full md:w-[55%] flex items-center justify-center px-8 py-8 bg-white dark:bg-slate-900">

          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logo.png"
                alt="NutriPlan"
                width={40}
                height={40}
              />
              <h2 className="text-[28px] font-bold text-cyan-700 dark:text-cyan-300">
                NutriPlan
              </h2>
            </div>

            <h1 className="text-[40px] font-bold text-gray-900 mb-2 dark:text-gray-100">
              Welcome!
            </h1>

            <p className="text-gray-500 mb-8 dark:text-slate-400">
              Your journey to precision nutrition continues here.
            </p>

            {/* Google Login */}
            <button
              onClick={() => setShowGooglePopup(true)}
              className="w-full border border-gray-300 rounded-full py-3 px-4 font-medium hover:bg-gray-50 transition mb-6 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <div className="flex-1 border-b border-gray-300"></div>

              <span className="px-4 text-xs text-gray-400 font-medium dark:text-slate-500">
                OR CONTINUE WITH EMAIL
              </span>

              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            {error && (
              <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 dark:bg-rose-900 dark:border-rose-700 dark:text-rose-200">
                {error}
              </div>
            )}

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            />

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            />

            {/* Remember */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-cyan-700 text-sm hover:underline dark:text-cyan-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-cyan-700 text-white py-3 rounded-full text-lg font-semibold hover:bg-cyan-800 transition"
            >
              Login
            </button>

            {/* Signup */}
            <p className="text-center mt-6 text-gray-500 dark:text-slate-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-cyan-700 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>

          </div>

        </section>

        {/* Right Side */}
        <section className="hidden md:block w-[45%] relative">

          <Image
            src="/login-bg.jpg"
            alt="Healthy Food"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-cyan-900/10"></div>

          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg dark:bg-slate-900/90">

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="NutriPlan"
                width={38}
                height={38}
              />

              <h3 className="text-2xl font-bold text-cyan-700">
                NutriPlan
              </h3>

            </div>

          </div>

        </section>

      </main>

      {/* Google Account Popup */}
      {showGooglePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl w-[420px] p-6 shadow-2xl dark:bg-slate-900">

            <h2 className="text-[28px] font-bold mb-2">
              Choose an account
            </h2>

            <p className="text-gray-500 mb-5 dark:text-slate-400">
              Continue to NutriPlan
            </p>

            <div className="space-y-3">

              {googleAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => router.push("/dashboard")}
                  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 transition dark:hover:bg-slate-800"
                >
                  <Image
                    src={account.image}
                    alt={account.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <div className="text-left">
                    <h3 className="font-semibold">
                      {account.name}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      {account.email}
                    </p>
                  </div>
                </button>
              ))}

            </div>

            <button
              onClick={() => setShowGooglePopup(false)}
              className="mt-5 w-full py-3 bg-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              Cancel
            </button>

          </div>

        </div>
      )}
     </PageTransition>
  );
}