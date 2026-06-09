"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  BarChart3,
  User,
  Settings,
  Shield,
  Bell,
  Target,
  LogOut,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f9] flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">

        <div>

          {/* Logo */}
          <div className="p-6 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NutriPlan"
              width={45}
              height={45}
            />

            <h1 className="text-2xl font-bold text-[#0B7285]">
              NutriPlan
            </h1>
          </div>

          {/* Navigation */}
          <nav className="px-3 mt-6 space-y-2">

            <Link href="/dashboard">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-xl">
                <LayoutDashboard size={18} />
                Dashboard
              </button>
            </Link>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-xl">
              <Utensils size={18} />
              Meal Planner
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-xl">
              <ShoppingCart size={18} />
              Grocery Generator
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-xl">
              <BarChart3 size={18} />
              Daily Progress
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-xl">
              <User size={18} />
              Profile
            </button>

            <button className="w-full flex items-center gap-3 bg-[#0B7285] text-white rounded-xl px-4 py-3 text-left">
              <Settings size={18} />
              Settings
            </button>

          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 space-y-4">

          <div className="bg-cyan-50 rounded-3xl p-5">
            <h3 className="font-semibold text-[#0B7285]">
              Alex Johnson
            </h3>

            <p className="text-xs text-gray-500 mb-4">
              PREMIUM MEMBER
            </p>

            <button className="w-full bg-[#0B7285] text-white py-3 rounded-full font-semibold">
              Upgrade Plan
            </button>
          </div>

          <Link href="/login">
            <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100">
              <LogOut size={18} />
              Logout
            </button>
          </Link>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">

        <h1 className="text-3xl font-bold text-[#0B7285] mb-8">
          Settings
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile Settings */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">

              <div className="flex items-center gap-2 mb-5">
                <User size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Profile Settings
                </h2>
              </div>

              <div className="flex items-center gap-5 mb-6">

                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Alex Johnson
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Upload a new profile picture
                  </p>

                  <button className="text-[#0B7285] font-medium mt-2">
                    Change Avatar
                  </button>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  defaultValue="Alex Johnson"
                  className="bg-gray-100 rounded-xl p-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="alex@example.com"
                  className="bg-gray-100 rounded-xl p-3 outline-none"
                />

              </div>

              <textarea
                rows={4}
                placeholder="Tell us about yourself..."
                className="w-full mt-4 bg-gray-100 rounded-xl p-3 outline-none resize-none"
                defaultValue="Health enthusiast focused on balanced nutrition and fitness."
              />

            </div>

            {/* Nutrition Goals */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">

              <div className="flex items-center gap-2 mb-5">
                <Target size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Nutrition Goals
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm mb-2">
                    Daily Calories
                  </label>

                  <input
                    type="number"
                    defaultValue="2400"
                    className="w-full bg-gray-100 rounded-xl p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Water Intake (Liters)
                  </label>

                  <input
                    type="number"
                    defaultValue="3"
                    className="w-full bg-gray-100 rounded-xl p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Protein Goal (g)
                  </label>

                  <input
                    type="number"
                    defaultValue="120"
                    className="w-full bg-gray-100 rounded-xl p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Carb Goal (g)
                  </label>

                  <input
                    type="number"
                    defaultValue="250"
                    className="w-full bg-gray-100 rounded-xl p-3 outline-none"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Security */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">

              <div className="flex items-center gap-2 mb-5">
                <Shield size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Security
                </h2>
              </div>

              <Link href="/change-password">
                <button className="w-full bg-gray-100 p-3 rounded-xl text-left hover:bg-gray-200 mb-3">
                  Change Password
                </button>
              </Link>

              <button className="w-full bg-gray-100 p-3 rounded-xl text-left hover:bg-gray-200">
                Enable Two-Factor Authentication
              </button>

            </div>

            {/* Notifications */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">

              <div className="flex items-center gap-2 mb-5">
                <Bell size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Notifications
                </h2>
              </div>

              <div className="space-y-4">

                <div className="flex justify-between items-center">
                  <span>Meal Reminders</span>
                  <input type="checkbox" defaultChecked />
                </div>

                <div className="flex justify-between items-center">
                  <span>Weekly Reports</span>
                  <input type="checkbox" />
                </div>

                <div className="flex justify-between items-center">
                  <span>Grocery Alerts</span>
                  <input type="checkbox" defaultChecked />
                </div>

              </div>

            </div>

            {/* App Preferences */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">

              <div className="flex items-center gap-2 mb-5">
                <Settings size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  App Preferences
                </h2>
              </div>

              <select className="w-full bg-gray-100 rounded-xl p-3 outline-none">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Tamil</option>
              </select>

            </div>

          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4 mt-8">

          <button className="px-6 py-3 bg-gray-200 rounded-full font-semibold hover:bg-gray-300">
            Discard
          </button>

          <button className="px-6 py-3 bg-[#0B7285] text-white rounded-full font-semibold hover:bg-[#095c6c]">
            Save All Changes
          </button>

        </div>

      </main>

    </div>
  );
}