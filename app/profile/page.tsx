"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  Settings,
  User,
  Activity,
  Scale,
  Ruler,
  Target,
  Flame,
  Clock,
  Heart,
} from "lucide-react";

export default function ProfilePage() {
  const fitnessGoals = [
    "Weight Loss",
    "Weight Gain",
    "Maintain Health",
    "Fitness Improvement",
    "Diabetes Control",
    "General Wellness",
    "Muscle Building",
  ];

  const activityLevels = [
    {
      level: "Sedentary",
      desc: "Little or no exercise",
    },
    {
      level: "Light",
      desc: "Exercise 1-3 days/week",
    },
    {
      level: "Moderate",
      desc: "Exercise 3-5 days/week",
    },
    {
      level: "Active",
      desc: "Exercise 6-7 days/week",
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex flex-col items-center mb-10">
          <img
  src="/logo.jpg"
  alt="NutriPlan Logo"
  className="w-24 h-24 rounded-full"
/>

          <h1 className="text-3xl font-bold text-teal-600 mt-3">
            NutriPlan
          </h1>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <Utensils size={20} />
            Meal Planner
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-100 transition">
            <ShoppingCart size={20} />
            Grocery List
          </button>

          <button className="w-full flex items-center gap-3 text-left p-3 rounded-lg bg-teal-600 text-white">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-8">
            Onboarding
          </h1>

          {/* Personal Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                <User
                  size={60}
                  className="text-gray-500"
                />
              </div>

              <p className="mt-4 font-medium">
                Upload Photo
              </p>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl p-3"
                />

                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded-xl p-3"
                />

                <input
                  type="date"
                  className="border rounded-xl p-3"
                />

                <select className="border rounded-xl p-3">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Bio"
                  className="col-span-2 border rounded-xl p-3"
                />
              </div>
            </div>
          </div>

          {/* Food Preferences */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Food Preferences
            </h2>

            <div className="flex gap-3 flex-wrap">
              <button className="border rounded-full px-5 py-2 hover:bg-teal-50">
                Vegetarian
              </button>

              <button className="border rounded-full px-5 py-2 hover:bg-teal-50">
                Non-Vegetarian
              </button>

              <button className="border rounded-full px-5 py-2 hover:bg-teal-50">
                Vegan
              </button>
            </div>
          </div>

          {/* Activity Level */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity
                className="text-teal-600"
                size={22}
              />
              Activity Level
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {activityLevels.map((item) => (
                <button
                  key={item.level}
                  className="border rounded-xl p-4 hover:bg-teal-50 hover:border-teal-500 transition text-left"
                >
                  <p className="font-semibold">
                    {item.level}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Fitness Goals
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {fitnessGoals.map((goal) => (
                <button
                  key={goal}
                  className="border rounded-xl p-4 hover:bg-teal-50 hover:border-teal-500 transition"
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Flame
                  size={20}
                  className="text-orange-500"
                />
                Daily Calorie Goal
              </h3>

              <input
                type="range"
                min="1200"
                max="4000"
                className="w-full"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock
                  size={20}
                  className="text-blue-500"
                />
                Daily Check-in
              </h3>

              <input
                type="time"
                className="border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Scale
                  size={20}
                  className="text-teal-600"
                />
                Physical Metrics
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Scale
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    placeholder="Weight (kg)"
                    className="border rounded-xl p-3 pl-10 w-full"
                  />
                </div>

                <div className="relative">
                  <Ruler
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    placeholder="Height (cm)"
                    className="border rounded-xl p-3 pl-10 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Heart
                  size={20}
                  className="text-red-500"
                />
                Health Factors
              </h3>

              <div className="relative">
                <Target
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  placeholder="Target Weight Goal"
                  className="border rounded-xl p-3 pl-10 w-full"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-10">
            <button className="bg-teal-600 hover:bg-teal-700 transition text-white px-8 py-3 rounded-full font-medium shadow-md">
              Save Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
