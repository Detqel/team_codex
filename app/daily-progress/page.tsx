"use client";

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
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function DailyProgressPage() {
  const stepHeights = [90, 70, 130, 240, 170, 120, 90];

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex text-[#1a1a1a]">
      {/* Sidebar */}
      <aside className="w-[270px] bg-white border-r border-[#ececec] flex flex-col">
      <div className="flex items-center  gap-3 mb-10">
          <img
  src="/logo.jpg"
  alt="NutriPlan Logo"
  className="w-11 h-11 rounded-full object-contain"
/>

          <h1 className="text-2xl font-bold text-cyan-700 ">
            NutriPlan
          </h1>
        </div>  

        <nav className="px-4 flex-1">
          <ul className="space-y-2">
            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040]">
                <LayoutDashboard size={18} strokeWidth={2.2} />
                <span>Dashboard</span>
              </button>
            </li>
 
            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040]">
                <UtensilsCrossed size={18} strokeWidth={2.2} />
                <span>Meal Planner</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040]">
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
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040]">
                <User size={18} strokeWidth={2.2} />
                <span>Profile</span>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-full text-[#404040]">
                <Settings size={18} strokeWidth={2.2} />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-white rounded-[22px] border border-[#ececec] px-4 py-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#f2f4f6]" />

            <div>
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-slate-400">View Profile</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 px-8 py-8">
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
  
        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "ACTIVITY SCORE",
              sub: "vs yesterday",
              icon: <Zap size={28} />,
              color: "#0089aa",
            },
            {
              title: "CALORIE BALANCE",
              sub: "of goal",
              icon: <UtensilsCrossed size={28} />,
              color: "#b46b00",
            },
            {
              title: "HYDRATION LEVEL",
              sub: "of goal",
              icon: <Droplets size={28} />,
              color: "#0089aa",
            },
            {
              title: "STREAK",
              sub: "days",
              icon: <Flame size={28} />,
              color: "#b46b00",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[28px] p-6 border border-[#f0f0f0]"
            >
              <p className="text-[12px] font-bold text-[#555]">
                {item.title}
              </p>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <div className="text-[36px] font-bold">
                    ---
                  </div>

                  <p className="text-slate-500 text-sm mt-2">
                    {item.sub}
                  </p>
                </div>

                <div
                  className="w-[62px] h-[62px] rounded-full border-[4px] flex items-center justify-center"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 mb-8">
          {/* Nutrition */}
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

            {[
              {
                title: "PROTEIN",
                color:
                  "bg-gradient-to-r from-[#0089aa] to-[#7cc8d5]",
              },
              {
                title: "CARBOHYDRATES",
                color:
                  "bg-gradient-to-r from-[#4f8da2] to-[#9fc9d6]",
              },
              {
                title: "FATS",
                color:
                  "bg-gradient-to-r from-[#b46b00] to-[#d7b28a]",
              },
            ].map((item) => (
              <div key={item.title} className="mb-8">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-current" />
                    <span className="font-semibold text-sm">
                      {item.title}
                    </span>
                  </div>

                  <span className="font-semibold">
                    -- / --
                  </span>
                </div>

                <div className="h-4 bg-[#edf0f2] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 text-center mt-14">
              <div>
                <p className="text-xs text-slate-500 mb-2">
                  FIBER
                </p>
                <p className="text-[28px] font-bold text-[#0089aa]">
                  --%
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">
                  SUGAR
                </p>
                <p className="text-[28px] font-bold text-[#0089aa]">
                  --%
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">
                  SODIUM
                </p>
                <p className="text-[28px] font-bold text-[#0089aa]">
                  --%
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
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

        {/* Bottom */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">
            <div className="flex items-center gap-3 mb-8">
              <Target className="text-[#0089aa]" />
              <h2 className="text-[24px] font-bold">
                Set Goals
              </h2>
            </div>

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center py-6 border-b border-[#f1f1f1]"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#5ca8b8]" />
                  <div>
                    <div>
                     <p className="font-semibold">
                       {item === 1
                       ? "Met Protein Target"
                       : item === 2
                       ? "10k Steps Reached"
                       : "Daily Hydration Met"}
                    </p>
                    </div>

                  </div>
                </div>

                <span className="bg-[#eef8fb] text-[#0089aa] px-4 py-2 rounded-full text-sm">
                  In Progress
                </span>
              </div>
            ))}

            <button className="w-full mt-6 text-[#0089aa] font-medium">
              View All Goals
            </button>
          </div>

          <div className="bg-white rounded-[30px] p-8 border border-[#efefef]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[24px] font-bold">
                Next Milestones
              </h2>

              <button className="w-12 h-12 rounded-full bg-[#0089aa] text-white flex items-center justify-center">
                <Plus />
              </button>
            </div>

            {[
              {
                icon: Trophy,
                width: "35%",
                color: "#b46b00",
              },
              {
                icon: ArrowUpRight,
                width: "58%",
                color: "#0089aa",
              },
              {
                icon: ShieldCheck,
                width: "15%",
                color: "#b46b00",
              },
            ].map((item, i) => (
              <div key={i} className="mb-8">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                
                    <span>
                     {i === 0
                     ? "7-Day Workout Streak"
                     : i === 1
                     ? "5kg Weight Loss Goal"
                    : "Healthy Eating Streak"}
                    </span>
                  </div>

                  <span>--%</span>
                </div>

                <div className="h-2 bg-[#edf0f2] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: item.width,
                      backgroundColor: item.color,
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

        <footer className="text-center text-slate-500 mt-24 pb-10 text-sm">
          © 2025 NutriPlan. All rights reserved. Your health, our
          priority.
        </footer>
      </main>
    </div>
  );
}