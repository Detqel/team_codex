"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  BarChart3,
  User,
  Settings,
  Shield,
  Bell,
  Mail,
  Phone,
  MapPin,
  LogOut,
} from "lucide-react";
import { getStoredSettings, saveStoredSettings, applyTheme } from "../../lib/auth";

export default function SettingsPage() {
  const [mealReminders, setMealReminders] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [groceryAlerts, setGroceryAlerts] = useState(true);
  const [language, setLanguage] = useState("English (US)");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const settings = getStoredSettings();
    setMealReminders(settings.mealReminders);
    setWeeklyReports(settings.weeklyReports);
    setGroceryAlerts(settings.groceryAlerts);
    setLanguage(settings.language);
    setTheme(settings.theme || "light");
    applyTheme(settings.theme || "light");
  }, []);

  const handleSaveSettings = () => {
    const nextSettings = {
      dailyCalories: 2400,
      waterIntake: 3,
      proteinGoal: 120,
      carbGoal: 250,
      mealReminders,
      weeklyReports,
      groceryAlerts,
      language,
      theme,
    };

    saveStoredSettings(nextSettings);
    setSaveMessage("Settings saved successfully.");

    window.setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };

  const handleSubmitFeedback = () => {
    if (!feedbackRating || !feedbackComment.trim()) {
      setFeedbackStatus("Please give a rating and a quick comment.");
      return;
    }

    setFeedbackStatus("Thank you for your feedback! It helps us improve.");
    setFeedbackRating(0);
    setFeedbackComment("");

    window.setTimeout(() => {
      setFeedbackStatus("");
    }, 4000);
  };

  const handleSubmitContact = () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus("Please provide your name, email and a short message.");
      return;
    }

    setContactStatus("Thanks — we received your message and will reply soon.");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setContactMessage("");

    window.setTimeout(() => {
      setContactStatus("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between">

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
              <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
                <LayoutDashboard size={18} />
                Dashboard
              </button>
            </Link>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
              <Utensils size={18} />
              Meal Planner
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
              <ShoppingCart size={18} />
              Grocery Generator
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
              <BarChart3 size={18} />
              Daily Progress
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
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
        <div className="p-4">
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

        <div className="flex flex-col gap-4 mb-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#0B7285]">
              Settings
            </h1>
            <p className="text-gray-500 mt-2 dark:text-slate-400">
              Update your nutrition preferences and security settings.
            </p>
          </div>
          {saveMessage ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              {saveMessage}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Panel */}
          <div className="space-y-6">

            {/* Security */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 dark:bg-slate-900 dark:border-slate-800">

              <div className="flex items-center gap-2 mb-5">
                <Shield size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Security
                </h2>
              </div>

              <Link href="/change-password" className="w-full block bg-gray-100 p-3 rounded-xl text-left hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                Change Password
              </Link>

            </div>

            {/* Notifications */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 dark:bg-slate-900 dark:border-slate-800">

              <div className="flex items-center gap-2 mb-5">
                <Bell size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Notifications
                </h2>
              </div>

              <div className="space-y-4">

                <div className="flex justify-between items-center">
                  <span>Meal Reminders</span>
                  <button
                    type="button"
                    onClick={() => setMealReminders(!mealReminders)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mealReminders ? "bg-cyan-700 text-white" : "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-100"}`}
                  >
                    {mealReminders ? "On" : "Off"}
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span>Weekly Reports</span>
                  <button
                    type="button"
                    onClick={() => setWeeklyReports(!weeklyReports)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${weeklyReports ? "bg-cyan-700 text-white" : "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-100"}`}
                  >
                    {weeklyReports ? "On" : "Off"}
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span>Grocery Alerts</span>
                  <button
                    type="button"
                    onClick={() => setGroceryAlerts(!groceryAlerts)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${groceryAlerts ? "bg-cyan-700 text-white" : "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-100"}`}
                  >
                    {groceryAlerts ? "On" : "Off"}
                  </button>
                </div>

              </div>

            </div>

            {/* App Preferences */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 dark:bg-slate-900 dark:border-slate-800">

              <div className="flex items-center gap-2 mb-5">
                <Settings size={20} className="text-[#0B7285]" />
                <h2 className="text-xl font-semibold">
                  Language & Appearance
                </h2>
              </div>

              <div className="grid gap-4 mb-4">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-300">Appearance</p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setTheme("light");
                        applyTheme("light");
                      }}
                      className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${theme === "light" ? "border-cyan-700 bg-cyan-50 text-cyan-800" : "border-gray-300 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"}`}
                    >
                      Light
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTheme("dark");
                        applyTheme("dark");
                      }}
                      className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${theme === "dark" ? "border-cyan-700 bg-cyan-50 text-cyan-800" : "border-gray-300 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"}`}
                    >
                      Dark
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Language</label>
                  <select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    className="w-full bg-gray-100 rounded-xl p-3 outline-none dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                  >
                    <option>English (US)</option>
                    <option>English (UK)</option>
                  </select>
                </div>
              </div>

            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bell size={20} className="text-[#0B7285]" />
                  <h2 className="text-xl font-semibold">Info</h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-400">Need help? We're here for you.</p>
              </div>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-green-100 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">support@nutriplan.com</p>
                    <p className="text-gray-500 dark:text-slate-400">Email support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-green-100 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">9678560023</p>
                    <p className="text-gray-500 dark:text-slate-400">Call our team</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-green-100 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">123 Wellness Ave, Suite 100</p>
                    <p className="text-gray-500 dark:text-slate-400">San Diego, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="text-sm text-gray-600 dark:text-slate-400">Send us a message and we'll reply soon.</p>
              </div>

              {contactStatus ? (
                <div className="mb-4 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200">
                  {contactStatus}
                </div>
              ) : null}

              <div className="grid gap-4">
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#0B7285] focus:ring-2 focus:ring-[#0B728526] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                />

                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#0B7285] focus:ring-2 focus:ring-[#0B728526] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                />

                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Phone Number (optional)"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#0B7285] focus:ring-2 focus:ring-[#0B728526] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                />

                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#0B7285] focus:ring-2 focus:ring-[#0B728526] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                />

                <button
                  type="button"
                  onClick={handleSubmitContact}
                  className="w-full rounded-full bg-[#0B7285] px-5 py-3 text-white font-semibold hover:bg-[#095c6c] transition"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
              <div className="mb-3">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Feedback</h2>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Help us improve your NutriPlan experience.
                </p>
              </div>

              {feedbackStatus ? (
                <div className="mb-4 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200">
                  {feedbackStatus}
                </div>
              ) : null}

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-500">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFeedbackRating(value)}
                      className={`text-xl transition ${feedbackRating >= value ? "scale-110" : "text-gray-300 dark:text-slate-500"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  value={feedbackComment}
                  onChange={(event) => setFeedbackComment(event.target.value)}
                  placeholder="Share a quick comment"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                />

                <button
                  type="button"
                  onClick={handleSubmitFeedback}
                  className="w-full rounded-full bg-[#0B7285] px-5 py-3 text-white font-semibold hover:bg-[#095c6c] transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="px-6 py-3 bg-cyan-50 text-cyan-700 rounded-full font-semibold hover:bg-cyan-100"
          >
            Share & Export
          </button>

          <button
            type="button"
            onClick={handleSaveSettings}
            className="px-6 py-3 bg-[#0B7285] text-white rounded-full font-semibold hover:bg-[#095c6c]"
          >
            Save All Changes
          </button>
        </div>

      </main>

    </div>
  );
}