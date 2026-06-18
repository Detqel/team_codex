"use client";

import { useState, useEffect } from "react";
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
  TrendingUp,
  ChartPie,
} from "lucide-react";

export default function DailyProgressPage() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    fitnessGoal: "",
    waterGoal: 0,
    targetWeight: 0,
    activityLevel: "",
    calories: 0,
    stepsGoal: 0,
    profileImage: "",
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

  const [steps, setSteps] = useState(0);

  const [stepHeights, setStepHeights] = useState([
  0, 0, 0, 0, 0, 0, 0,
  ]);


  const currentDay = new Date().getDay();
  const currentIndex = currentDay === 0 ? 6 : currentDay - 1;

  
  const [milestones, setMilestones] = useState<
  {
    title: string;
    progress: number;
    color: string;
  }[]
>([
  {
    title: "Water Goal Progress",
    progress: 0,
    color: "#0ea5e9",
  },
  {
    title: "Target Weight Goal",
    progress: 0,
    color: "#f59e0b",
  },
  {
    title: "Fitness Goal Progress",
    progress: 0,
    color: "#10b981",
  },
]);
  
 const fetchDailyProgress = async (profile: any) => {
  try {
    const res = await fetch("/api/daily-progress");

    if (!res.ok) return;

    const data = await res.json();

    console.log("Daily Progress =", data);

    console.log("Weekly Steps =", data.weeklySteps);

    console.log("Step Heights =", [
      data.weeklySteps?.mon || 0,
      data.weeklySteps?.tue || 0,
      data.weeklySteps?.wed || 0,
      data.weeklySteps?.thu || 0,
      data.weeklySteps?.fri || 0,
      data.weeklySteps?.sat || 0,
      data.weeklySteps?.sun || 0,
    ]);

    const today = new Date().getDay();
    const todayIndex = today === 0 ? 6 : today - 1;

    const heights = [0, 0, 0, 0, 0, 0, 0];
    heights[todayIndex] = Number(data.steps) || 0;

    setStepHeights(heights);

    console.log("data =", data);
    console.log("data.steps =", data.steps);

    setSteps(Number(data.steps) || 0);

    setMilestones([
      {
        title: "Water Goal Progress",
        progress:  Number (
          Math.min(
            (Number(data.water) / (profile.waterGoal || 1)) * 100,
            100
          ).toFixed(0)
        ),
        color: "#0ea5e9",
      },
      {
        title: "Target Weight Goal",
        progress:  Number (
          Math.min(
            (Number(data.weight) / (profile.targetWeight || 1)) * 100,
            100
          ).toFixed(0)
        ),
        color: "#f59e0b",
      },
      {
       title: "Fitness Goal Progress",
        progress:  Number (
          Math.min(
            (Number(data.steps) / (profile.stepsGoal || 1)) * 100,
            100
          ).toFixed(0)
        ),
        color: "#10b981",
      },
    ]);

  } catch (error) {
    console.log(error);
  }
};
  

  useEffect(() => {
  const loadData = async () => {
    const profile = await fetchProfile();

    if (profile) {
      await fetchDailyProgress(profile);
    }
  };

  loadData();
}, []);

 const fetchProfile = async () => {
  try {
    const res = await fetch("/api/profile");

    if (!res.ok) return null;

    const data = await res.json();

    console.log(data);

    const profile = {
      fullName: data.fullName || "",
      fitnessGoal: data.selectedGoal || "",
      waterGoal: Number(data.waterGoal) || 0,
      targetWeight: Number(data.targetWeight) || 0,
      activityLevel: data.activityLevel || "",
      calories: Number(data.calories) || 0,
      stepsGoal: Number(data.stepsGoal) || 0,
      profileImage: data.profileImage || "",
    };

    console.log("Profile =", profile);
    console.log("Water Goal =", profile.waterGoal);
    console.log("Steps Goal =", profile.stepsGoal);

    setProfileData(profile);

    setDailyStats({
      activityScore: data.activityLevel ? 100 : 0,
      calorieBalance: Number(data.calories) || 0,
      hydrationLevel: Number(data.waterGoal) * 25,
      streak: 1,
    });

    return profile;

  } catch (error) {
    console.log(error);
    return null;
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

            <div className="w-11 h-11 rounded-full overflow-hidden bg-[#f2f4f6] flex items-center justify-center">
              {profileData.profileImage ? (
                <img
                src={profileData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
                />
                ) : (
              <User size={18} />
              )}
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
            <h1 className="text-[40px] font-extrabold tracking-tight text-[#0089aa]">
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
                  vs Today
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

            <div className="flex items-center  justify-between mb-10">
              <div className="flex items-center gap-3">
                <ChartPie
                  size={24}
                  className="text-[#0089aa]"
                  />
                  
              <h2 className="text-[20px] font-bold">
                Nutritional Breakdown
              </h2>
              </div>
            

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
                  60g / 120g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#4f8da2] to-[#9fc9d6]"
                  style={{
                    width: "50%",
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
                  150g / 250g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#ffb347] to-[#ffd194]"
                  style={{
                    width: "60%",
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
                  35g / 70g
                </span>
              </div>

              <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ff9f43]"
                  style={{
                    width: "50%",
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
            <div className="flex items-center gap-2">
            <Footprints className="text-[#0089aa]" />
            <h2 className="text-[20px] font-bold">
              Steps Tracker
            </h2>
            </div>

            <p className="text-slate-500 mt-2">
              Stay active and hit your daily target.
            </p>
            <div className="h-[320px] flex items-end justify-center gap-5 mt-8">

             {stepHeights.map((h, index) => {
               const isToday = index === currentIndex;

               return (
              <div
                key={index}
                className="relative w-10 h-[300px] rounded-full bg-[#e9edf1] overflow-hidden"
              >

                <div
                  className={`absolute bottom-0 left-0 w-full rounded-full ${
                    isToday
                    ? "bg-[#0089aa]"
                    : "bg-slate-300"
                  }`}
                  style={{
                   height: `${Math.min(
                    (Number(h) / 
                  Number(profileData.stepsGoal || 1)) * 
                  100,
                    100
                   )}%`,
                  }}
                />
                  </div>
                );
              })}
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

           <div className="mt-8 rounded-2xl bg-slate-50 p-5 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-500">
                 Today's Goal
                </p>

                <span className="font-bold text-[#0089aa]">
                  {steps} / {profileData.stepsGoal}
                </span>
              </div>

            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
             <div
                className="h-full bg-[#0089aa] rounded-full"
                style={{
                  width: `${(steps / profileData.stepsGoal) * 100}%`,
                }}
              />
            </div>

             <p className="mt-3 text-xs text-slate-500">
               {Math.max(profileData.stepsGoal - steps, 0)} steps remaining
             </p>

          </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">

          {/* Dynamic Goals */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">

            <div className="flex items-center gap-3 mb-8">
              <Target className="text-[#0089aa]" />
              <h2 className="text-[20px] font-bold">
                Goal Setup
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
          </div>

          {/* Dynamic Milestones */}
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">

            <div className="flex items-center gap-3 mb-8">
               <TrendingUp className="text-[#0089aa]" />
              <h2 className="text-[20px] font-bold">
                Goal Tracker
              </h2>
            </div>

            {milestones.map((item, index) => (
              <div key={index} className="mb-8">

                <div className="flex justify-between mb-3">
                  <span>{item.title}</span>

                  <span>
                    {Number(item.progress).toFixed(0)}%
                  </span>
                </div>

                <div className="h-2 bg-[#edf0f2] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#0089aa]"
                      style={{
                        width: `${Math.max(
                        0,
                        Math.min(Number(item.progress) || 0, 
                      100)
                        )}%`,
                        backgroundColor: item.color,
                    }}
                  />
                </div>

              </div>
            ))}
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