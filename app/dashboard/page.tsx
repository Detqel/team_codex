"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getStoredSettings, applyTheme } from "../../lib/auth";
import PageTransition from "../components/PageTransition";
export default function Dashboard() {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  useEffect(() => {
    const settings = getStoredSettings();
    applyTheme(settings.theme || "light");
  }, []);

  return (
      <PageTransition>
      <main className="w-full min-h-screen bg-[#f5f6f8] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex justify-between items-start mb-8">

  <div>
    <h1 className="text-[30px] font-semibold text-cyan-700 leading-tight">
      Your Nutrition Hub
    </h1>

    <p className="text-base text-gray-500 mt-1 dark:text-slate-400">
      Track, plan, and optimize your health goals.
    </p>
  </div>

  {/* User Icon */}
  <button className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-cyan-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </button>

</div>

        {/* Feature Action Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          {/* AI Meal Planner */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-cyan-700 text-base font-semibold">AI Meal Planner</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6 dark:text-slate-400">
              Generate full-week nutritional schedules in seconds based on your specific macro targets.
            </p>
           
            {/* Background decoration */}
            <div className="absolute right-4 bottom-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-cyan-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          {/* Grocery Generator */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-cyan-700 text-base font-semibold">Grocery Generator</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6 dark:text-slate-400">
              Convert your weekly plan into an organized shopping list, sorted by aisle and availability.
            </p>
           
            {/* Background decoration */}
            <div className="absolute right-4 bottom-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-cyan-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Nutrient Analyzer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h3 className="text-cyan-700 text-base font-semibold">Nutrient Analyzer</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6 dark:text-slate-400">
              Deep-dive into your intake with laboratory-grade precision for vitamins, minerals, and macros.
            </p>
           
            {/* Background decoration */}
            <div className="absolute right-4 bottom-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
        </div>
       
        {/* Nutrition Journey Overview */}

   {/* Left Side */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">

  {/* Left Side */}
  <div className="max-w-2xl">

    <h2 className="text-3xl font-bold text-cyan-700 mb-4">
      Start Your Nutrition Journey 🚀
    </h2>

    <div className="w-16 h-1 bg-cyan-500 rounded-full mb-5"></div>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      Everything you need to plan meals, manage nutrition,
      track progress, and achieve your health goals.
    </p>

    <div className="grid grid-cols-2 gap-6">

      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-xl">
          🎯
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700">
            Personalized Meal Planning
          </h4>

          <p className="text-sm text-gray-500">
            Plans tailored to your goals and preferences.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-xl">
          🛒
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700">
            Smart Grocery Lists
          </h4>

          <p className="text-sm text-gray-500">
            Generate organized shopping lists instantly.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-xl">
          📈
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700">
            Progress Monitoring
          </h4>

          <p className="text-sm text-gray-500">
            Track your nutrition journey every day.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-xl">
          🧪
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700">
            Nutrient Analysis
          </h4>

          <p className="text-sm text-gray-500">
            Monitor calories, protein and vitamins.
          </p>
        </div>
      </div>

    </div>

  </div>

  {/* Right Side Image */}
  <div className="hidden lg:flex flex-shrink-0 justify-center items-center">
    <Image
      src="/healthy-food.png"
      alt="Healthy Food"
      width={300}
      height={300}
     className="object-cover rounded-3xl border-4 border-white shadow-xl"
    />
  </div>

</div>
  {/* Bottom Stats */}
  <div className="mt-10 pt-6 border-t border-cyan-100">

    <div className="grid grid-cols-5 gap-4 text-center">

      <div>
        <h3 className="text-2xl font-bold text-cyan-700">2.5K+</h3>
        <p className="text-sm text-gray-500">Happy Users</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-cyan-700">12K+</h3>
        <p className="text-sm text-gray-500">Meals Planned</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-cyan-700">98%</h3>
        <p className="text-sm text-gray-500">Goal Success</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-cyan-700">4.8/5</h3>
        <p className="text-sm text-gray-500">User Rating</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-cyan-700">100%</h3>
        <p className="text-sm text-gray-500">Safe & Secure</p>
      </div>

    </div>

  </div>



        {/* Footer */}
        <footer className="mt-10 bg-gray-100 rounded-2xl px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="NutriPlan Logo" width={28} height={28} />
            <div>
              <p className="text-sm font-semibold text-cyan-800">NutriPlan</p>
              <p className="text-xs text-gray-500 dark:text-slate-400">© 2024 NutriPlan. All rights reserved.</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-slate-400">
            <button className="hover:text-gray-700 transition-colors">Privacy Policy</button>
            <button className="hover:text-gray-700 transition-colors">Terms of Service</button>
            <button className="hover:text-gray-700 transition-colors">Help Center</button>
            <button className="hover:text-gray-700 transition-colors">Contact Us</button>
          </div>
        </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-800 transition-colors z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

    </main>
   </PageTransition>
  );
}
