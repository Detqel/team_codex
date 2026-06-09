"use client";

import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {

  return (
    <div className="w-screen h-screen bg-[#f5f6f8] flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-[275px] bg-white border-r border-gray-100 flex flex-col justify-between flex-shrink-0">
        <div>

          {/* Logo */}
          <div className="p-6 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NutriPlan Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-semibold text-cyan-700">
              NutriPlan
            </h1>
          </div>

          {/* Menu */}
          <nav className="px-3 space-y-1">

            <button className="w-full bg-cyan-700 text-white rounded-xl px-5 py-3 text-left flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </button>

            <button className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Meal Planner
            </button>

            <button className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Grocery List
            </button>

            <button className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Daily Progress
            </button>

            <button className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </button>

          <Link href="/settings">
  <button className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl flex items-center gap-3 text-gray-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>

    Settings
  </button>
</Link>

          </nav>
        </div>

        {/* Bottom */}
        <div className="p-4">

          <div className="bg-white border border-gray-100 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={45}
                height={45}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-sm">Alex Johnson</h3>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">👑</span>
              <h3 className="font-semibold text-green-700">Upgrade to Premium</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Unlock advanced features and personalized insights.
            </p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-green-700 transition-colors">
              Upgrade Now
            </button>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-9 py-8 overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[42px] font-semibold text-cyan-800 leading-tight">
              Welcome to NutriPlan
            </h1>
            <p className="text-base text-gray-500 mt-1">
              Your personalized nutrition dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Bell icon */}
            <div className="relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/profile.jpg"
                alt="User"
                width={45}
                height={45}
                className="rounded-full object-cover"
              />
              <span className="font-medium text-sm">Alex Johnson</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-base font-semibold mb-1">Personalized Nutrition</h3>
            <p className="text-gray-500 text-sm">
              Tailored meal plans that adapt to your unique dietary needs, preferences, and fitness goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
            </div>
            <h3 className="text-base font-semibold mb-1">AI-Powered Discovery</h3>
            <p className="text-gray-500 text-sm">
              Our smart engine suggests new recipes and snacks based on what you actually love to eat.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-base font-semibold mb-1">Seamless Integration</h3>
            <p className="text-gray-500 text-sm">
              Automatically sync your meal plans with popular grocery delivery services in just one tap.
            </p>
          </div>

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
            <p className="text-gray-500 text-sm mb-6">
              Generate full-week nutritional schedules in seconds based on your specific macro targets.
            </p>
            <button className="text-cyan-700 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Get Started <span>→</span>
            </button>
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
            <p className="text-gray-500 text-sm mb-6">
              Convert your weekly plan into an organized shopping list, sorted by aisle and availability.
            </p>
            <button className="text-cyan-700 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Explore Lists <span>→</span>
            </button>
            {/* Background decoration */}
            <div className="absolute right-4 bottom-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-cyan-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Nutrient Analyzer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h3 className="text-orange-500 text-base font-semibold">Nutrient Analyzer</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Deep-dive into your intake with laboratory-grade precision for vitamins, minerals, and macros.
            </p>
            <button className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View Stats <span>→</span>
            </button>
            {/* Background decoration */}
            <div className="absolute right-4 bottom-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

        </div>

        {/* Meals Section */}
        <h2 className="text-xl font-semibold mb-5 text-cyan-800">Featured Meal Recommendations</h2>

        <div className="grid grid-cols-3 gap-6">

          {/* Quinoa Feta Salad */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/salad.jpg"
                alt="Salad"
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-cyan-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">LUNCH</span>
                <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">HEALTHY</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">Quinoa Feta Salad</h3>
              <p className="text-sm text-gray-500 mb-3">420 kcal • 15 min prep</p>
              <div className="flex gap-2">
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Keto</span>
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Organic</span>
              </div>
            </div>
          </div>

          {/* Pan-Seared Salmon */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/salmon.jpg"
                alt="Salmon"
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-cyan-900 text-white text-xs font-medium px-2.5 py-1 rounded-full">DINNER</span>
                <span className="bg-cyan-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">PROTEIN</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">Pan-Seared Salmon</h3>
              <p className="text-sm text-gray-500 mb-3">580 kcal • 25 min prep</p>
              <div className="flex gap-2">
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">High Protein</span>
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Omega-3</span>
              </div>
            </div>
          </div>

          {/* Berry Power Smoothie */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src="/smoothie.jpg"
                alt="Smoothie"
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">SNACK</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">Berry Power Smoothie</h3>
              <p className="text-sm text-gray-500 mb-3">210 kcal • 5 min prep</p>
              <div className="flex gap-2">
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Antioxidants</span>
                <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Vegan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-10 bg-gray-100 rounded-2xl px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="NutriPlan Logo" width={28} height={28} />
            <div>
              <p className="text-sm font-semibold text-cyan-800">NutriPlan</p>
              <p className="text-xs text-gray-500">© 2024 NutriPlan. All rights reserved.</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <button className="hover:text-gray-700 transition-colors">Privacy Policy</button>
            <button className="hover:text-gray-700 transition-colors">Terms of Service</button>
            <button className="hover:text-gray-700 transition-colors">Help Center</button>
            <button className="hover:text-gray-700 transition-colors">Contact Us</button>
          </div>
        </footer>

      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-800 transition-colors z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

    </div>
  );
}
