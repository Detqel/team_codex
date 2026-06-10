"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  UtensilsCrossed,
  ClipboardList,
  Activity,
  User,
  Settings,
  Calendar,
  Zap,
  Droplets,
  Flame,
  Footprints,
  Target,
  Trophy,
  Plus,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function DailyProgressPage() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    fitnessGoal: "",
    waterGoal: 0,
    targetWeight: 0,
    activityLevel: "",
  });

  const [dailyStats, setDailyStats] = useState({
    activityScore: 0,
    calorieBalance: 0,
    hydrationLevel: 0,
    streak: 0,
  });

  const [nutrition, setNutrition] = useState({
    protein: {
      consumed: 0,
      goal: 120,
    },
    carbs: {
      consumed: 0,
      goal: 250,
    },
    fats: {
      consumed: 0,
      goal: 70,
    },
  });

  const [milestones, setMilestones] = useState([
    {
      title: "Water Goal Progress",
      progress: 0,
    },
    {
      title: "Target Weight Goal",
      progress: 0,
    },
    {
      title: "Fitness Goal Progress",
      progress: 0,
    },
  ]);

  const [stepHeights, setStepHeights] = useState([
    90, 70, 130, 240, 170, 120, 90,
  ]);

  useEffect(() => {
    // Future database fetch
    // fetchProfile();
    // fetchDailyProgress();

    console.log("Daily Progress Ready");
  }, []);
  const fetchProfile = async () => {
  try {
    const res = await fetch("/api/profile");

    if (!res.ok) return;

    const data = await res.json();

    setProfileData({
      fullName: data.fullName || "",
      fitnessGoal: data.selectedGoal || "",
      waterGoal: data.waterGoal || 0,
      targetWeight: data.targetWeight || 0,
      activityLevel: data.activityLevel || "",
    });
  } catch (error) {
    console.log(error);
  }
};
return (
    <div className="min-h-screen bg-[#f8f9fb] flex text-[#1a1a1a]">
      {/* Sidebar */}
      <aside className="w-[270px] bg-white border-r border-[#ececec] flex flex-col">

        <div className="px-6 py-8 flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="NutriPlan Logo"
            className="w-11 h-11 rounded-full object-contain"
          />

          <h1 className="text-2xl font-bold text-cyan-700">
            NutriPlan
          </h1>
        </div>

        <nav className="px-4 flex-1">
          <ul className="space-y-2">

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040] hover:bg-slate-50 transition">
                <LayoutDashboard size={18} strokeWidth={2.2} />
                <span>Dashboard</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040] hover:bg-slate-50 transition">
                <UtensilsCrossed size={18} strokeWidth={2.2} />
                <span>Meal Planner</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040] hover:bg-slate-50 transition">
                <ClipboardList size={18} strokeWidth={2.2} />
                <span>Grocery List</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full bg-[#0089aa] text-white shadow-md">
                <Activity size={18} strokeWidth={2.2} />
                <span>Daily Progress</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040] hover:bg-slate-50 transition">
                <User size={18} strokeWidth={2.2} />
                <span>Profile</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040] hover:bg-slate-50 transition">
                <Settings size={18} strokeWidth={2.2} />
                <span>Settings</span>
              </button>
            </li>

          </ul>
        </nav>

        {/* Dynamic User Card */}
        <div className="p-4 mt-auto">
          <div className="bg-white rounded-[22px] border border-[#ececec] px-4 py-4 flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-[#f2f4f6] flex items-center justify-center">
              <User size={18} />
            </div>

            <div>
              <p className="text-sm font-medium">
                {profileData.fullName || "User Name"}
              </p>

              <p className="text-xs text-slate-400">
                {profileData.fitnessGoal || "Fitness Goal"}
              </p>
            </div>

          </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[52px] font-extrabold tracking-tight">
              Daily Progress
            </h1>

            <p className="text-slate-500 mt-2">
              Track your progress and stay on top of your health goals.
            </p>
          </div>

          <div className="flex items-center gap-3 h-14 px-5 bg-white rounded-[18px] border border-[#ececec] shadow-sm">
            <Calendar
              size={18}
              className="text-[#0089aa]"
            />

            <input
              type="date"
              className="outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Top Statistics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          {/* Activity Score */}
          <div className="bg-white rounded-[28px] p-6 border border-[#f0f0f0]">
            <p className="text-[12px] font-bold text-[#555]">
              ACTIVITY SCORE
            </p>

            <div className="flex justify-between items-center mt-6">
              <div>
                <div className="text-[36px] font-bold">
                  {dailyStats.activityScore || "--"}
                </div>

                <p className="text-slate-500 text-sm mt-2">
                  vs yesterday
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full border-[4px] border-[#0089aa] text-[#0089aa] flex items-center justify-center">
                <Zap size={28} />
              </div>
            </div>
          </div>

          {/* Calorie Balance */}
          <div className="bg-white rounded-[28px] p-6 border border-[#f0f0f0]">
            <p className="text-[12px] font-bold text-[#555]">
              CALORIE BALANCE
            </p>

            <div className="flex justify-between items-center mt-6">
              <div>
                <div className="text-[36px] font-bold">
                  {dailyStats.calorieBalance || "--"}
                </div>

                <p className="text-slate-500 text-sm mt-2">
                  of goal
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full border-[4px] border-[#b46b00] text-[#b46b00] flex items-center justify-center">
                <UtensilsCrossed size={28} />
              </div>
            </div>
          </div>

          {/* Hydration */}
          <div className="bg-white rounded-[28px] p-6 border border-[#f0f0f0]">
            <p className="text-[12px] font-bold text-[#555]">
              HYDRATION LEVEL
            </p>

            <div className="flex justify-between items-center mt-6">
              <div>
                <div className="text-[36px] font-bold">
                  {dailyStats.hydrationLevel || "--"}%
                </div>

                <p className="text-slate-500 text-sm mt-2">
                  of goal
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full border-[4px] border-[#0089aa] text-[#0089aa] flex items-center justify-center">
                <Droplets size={28} />
              </div>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-white rounded-[28px] p-6 border border-[#f0f0f0]">
            <p className="text-[12px] font-bold text-[#555]">
              STREAK
            </p>

            <div className="flex justify-between items-center mt-6">
              <div>
                <div className="text-[36px] font-bold">
                  {dailyStats.streak || "--"}
                </div>

                <p className="text-slate-500 text-sm mt-2">
                  days
                </p>
              </div>

              <div className="w-[62px] h-[62px] rounded-full border-[4px] border-[#b46b00] text-[#b46b00] flex items-center justify-center">
                <Flame size={28} />
              </div>
            </div>
          </div>

        </div>
        {/* Middle Section */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 mb-8">

          {/* Nutritional Breakdown */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[24px] font-bold">
                Nutritional Breakdown
              </h2>

              <div className="bg-[#f5f6f8] rounded-full p-1 flex">
                <button className="px-4 py-2 rounded-full bg-white text-[#0089aa] text-sm font-medium">
                  Macros
                </button>

                <button className="px-4 py-2 text-sm text-slate-500">
                  Micros
                </button>
              </div>
            </div>

            {/* Protein */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-sm">
                  PROTEIN
                </span>

                <span className="font-semibold">
                  {nutrition.protein.consumed}g /
                  {nutrition.protein.goal}g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0089aa] to-[#7cc8d5]"
                  style={{
                    width: `${Math.min(
                      (nutrition.protein.consumed /
                        nutrition.protein.goal) *
                        100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Carbs */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-sm">
                  CARBOHYDRATES
                </span>

                <span className="font-semibold">
                  {nutrition.carbs.consumed}g /
                  {nutrition.carbs.goal}g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#4f8da2] to-[#9fc9d6]"
                  style={{
                    width: `${Math.min(
                      (nutrition.carbs.consumed /
                        nutrition.carbs.goal) *
                        100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Fats */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-sm">
                  FATS
                </span>

                <span className="font-semibold">
                  {nutrition.fats.consumed}g /
                  {nutrition.fats.goal}g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#b46b00] to-[#d7b28a]"
                  style={{
                    width: `${Math.min(
                      (nutrition.fats.consumed /
                        nutrition.fats.goal) *
                        100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Nutrition Summary */}
            <div className="grid grid-cols-3 text-center mt-14">

              <div>
                <p className="text-xs text-slate-500 mb-2">
                  FIBER
                </p>

                <p className="text-[28px] font-bold text-[#0089aa]">
                  72%
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">
                  SUGAR
                </p>

                <p className="text-[28px] font-bold text-[#0089aa]">
                  35%
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">
                  SODIUM
                </p>

                <p className="text-[28px] font-bold text-[#0089aa]">
                  68%
                </p>
              </div>

            </div>

          </div>
          {/* Steps Tracker */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">
            <h2 className="text-[24px] font-bold">
              Steps Tracker
            </h2>

            <p className="text-slate-500 mt-2">
              Stay active and hit your daily target.
            </p>

            <div className="h-[290px] flex items-end justify-center gap-4 mt-8">
              {stepHeights.map((h, index) => (
                <div
                  key={index}
                  className={`w-8 rounded-full ${
                    index === 3
                      ? "bg-[#0089aa]"
                      : "bg-[#e9edf1]"
                  }`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            <div className="grid grid-cols-7 text-center text-sm mt-3 text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            <button className="w-full mt-8 h-14 rounded-full bg-[#0089aa] text-white font-medium flex items-center justify-center gap-2">
              <Plus size={18} />
              Log Activity
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">

          {/* Dynamic Goals */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">

            <div className="flex items-center gap-3 mb-8">
              <Target className="text-[#0089aa]" />
              <h2 className="text-[24px] font-bold">
                Set Goal
              </h2>
            </div> 

            <div className="flex justify-between items-center py-6 border-b border-[#f1f1f1]">
              <div>
                <p className="font-semibold">
                  Fitness Goal
                </p>

                <p className="text-sm text-slate-500">
                  {profileData.fitnessGoal || "Not Selected"}
                </p>
              </div>

              <span className="bg-slate-100 text-slate-500 px-4 py-2 rounded-full text-sm">
                {profileData.fitnessGoal ? "Active" : "Not Set"}
              </span>
              </div>
            <div className="flex justify-between items-center py-6 border-b border-[#f1f1f1]">
              <div>
                <p className="font-semibold">
                  Daily Water Goal
                </p>

                <p className="text-sm text-slate-500">
                  {profileData.waterGoal || 0} L
                </p>
              </div>
              <span className="bg-slate-100 text-slate-500 px-4 py-2 rounded-full text-sm">
               {profileData.waterGoal > 0 ? "Active" : "Not Set"}
             </span>

            </div>

            <div className="flex justify-between items-center py-6">
              <div>
                <p className="font-semibold">
                  Target Weight
                </p>

                <p className="text-sm text-slate-500">
                  {profileData.targetWeight || 0} kg
                </p>
              </div>
              <span className="bg-slate-100 text-slate-500 px-4 py-2 rounded-full text-sm">
               {profileData.targetWeight > 0 ? "Active" : "Not Set"}
              </span>
              
            </div>

            <button className="w-full mt-6 text-[#0089aa] font-medium">
              View All Goals
            </button>

          </div>

          {/* Dynamic Milestones */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[24px] font-bold">
                Goal Tracker
              </h2>

              <button className="w-12 h-12 rounded-full bg-[#0089aa] text-white flex items-center justify-center">
                <Plus />
              </button>
            </div>

            {milestones.map((item, index) => (
              <div key={index} className="mb-8">

                <div className="flex justify-between mb-3">
                  <span>{item.title}</span>

                  <span>
                    {item.progress}%
                  </span>
                </div>

                <div className="h-2 bg-[#edf0f2] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#0089aa]"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>

              </div>
            ))}

            <button className="w-full text-[#0089aa] font-medium mt-8">
              View All Milestones
            </button>

          </div>

        </div>
        {/* Footer */}
        <footer className="text-center text-slate-500 mt-24 pb-10 text-sm">
          © 2026 NutriPlan. All rights reserved. Your health, our
          priority.
        </footer>

      </main>
    </div>
  );
}