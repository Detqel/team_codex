"use client";

import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex bg-white">

      {/* Left Side - Login (55%) */}
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

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome!
          </h1>

          <p className="text-gray-500 mb-8">
            Your journey to precision nutrition continues here.
          </p>

          {/* Google Login */}
          <button className="w-full border border-gray-300 rounded-full py-3 px-4 font-medium hover:bg-gray-50 transition mb-6">
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
          <button className="w-full bg-cyan-700 text-white py-3 rounded-full text-lg font-semibold hover:bg-cyan-800 transition">
            Login
          </button>

          {/* Sign Up */}
          <p className="text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <span className="text-cyan-700 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>

        </div>

      </section>

      {/* Right Side - Image (45%) */}
      <section className="hidden md:block w-[45%] relative">

        <Image
          src="/login-bg.jpg"
          alt="Healthy Food"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-cyan-900/10"></div>

        {/* Logo Card */}
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
  );
}