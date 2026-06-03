"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg-food.jpeg"
          alt="background"
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}
        <div className="mb-8 animate-float">
          <Image
            src="/logo.png"
            alt="NutriPlan"
           width={80}
           height={80}
            priority
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-6">
          NutriPlan
        </h1>

        {/* Quote */}
        <p className="text-xl md:text-2xl font-semibold text-cyan-700 leading-relaxed max-w-4xl">
          Your food is your fuel.
          <br />
          Let's make today's choices count.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-cyan-700/20 rounded-full mt-10 mb-10"></div>

        {/* Button */}
    <button
      onClick={() => router.push("/login")}
      className="bg-cyan-700 text-white px-10 py-5 rounded-full"
    >
      Get Started →
    </button>
      </div>
    </main>
  );
}