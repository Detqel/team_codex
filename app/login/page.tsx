"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showGooglePopup, setShowGooglePopup] = useState(false);

  const googleAccounts = [
    {
      name: "Alex Johnson",
      email: "alex@gmail.com",
      image: "/profile.jpg",
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      image: "/profile2.jpg",
    },
    {
      name: "John Smith",
      email: "john@gmail.com",
      image: "/profile3.jpg",
    },
  ];

  return (
    <>
      <main className="min-h-screen flex bg-white">

        {/* Left Side */}
        <section className="w-full md:w-[55%] flex items-center justify-center px-8 py-8 bg-white">

          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logo.png"
                alt="NutriPlan"
                width={40}
                height={40}
              />
              <h2 className="text-2xl font-bold text-cyan-700">
                NutriPlan
              </h2>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome!
            </h1>

            <p className="text-gray-500 mb-8">
              Your journey to precision nutrition continues here.
            </p>

            {/* Google Login */}
            <button
              onClick={() => setShowGooglePopup(true)}
              className="w-full border border-gray-300 rounded-full py-3 px-4 font-medium hover:bg-gray-50 transition mb-6"
            >
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <div className="flex-1 border-b border-gray-300"></div>

              <span className="px-4 text-xs text-gray-400 font-medium">
                OR CONTINUE WITH EMAIL
              </span>

              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-700"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-700"
            />

            {/* Remember */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-cyan-700 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-cyan-700 text-white py-3 rounded-full text-lg font-semibold hover:bg-cyan-800 transition"
            >
              Login
            </button>

            {/* Signup */}
            <p className="text-center mt-6 text-gray-500">
              Don't have an account?{" "}
              <span className="text-cyan-700 font-semibold cursor-pointer hover:underline">
                Sign Up
              </span>
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

          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">

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

          <div className="bg-white rounded-3xl w-[420px] p-6 shadow-2xl">

            <h2 className="text-2xl font-bold mb-2">
              Choose an account
            </h2>

            <p className="text-gray-500 mb-5">
              Continue to NutriPlan
            </p>

            <div className="space-y-3">

              {googleAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => router.push("/dashboard")}
                  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 transition"
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

                    <p className="text-sm text-gray-500">
                      {account.email}
                    </p>
                  </div>

                </button>
              ))}

            </div>

            <button
              onClick={() => setShowGooglePopup(false)}
              className="mt-5 w-full py-3 bg-gray-200 rounded-xl font-medium hover:bg-gray-300"
            >
              Cancel
            </button>

          </div>

        </div>
      )}
    </>
  );
}