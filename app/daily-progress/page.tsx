"use client";
import React from "react";
import {
  Activity,
  Droplets,
  Flame,
  Zap,
  Calendar,
  X,
  Plus,
  Trophy,
  Target,
  User,
  Settings,
} from "lucide-react";

export default function DailyProgressPage() {
  const weeklySteps = [40, 35, 60, 95, 70, 55, 45];

  return (
    <div className="min-h-screen bg-[#f6f7f9] flex">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-slate-200 flex flex-col">
        <div className="px-8 py-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-cyan-700 flex items-center justify-center text-white font-bold">
              N
            </div>

            <h1 className="text-3xl font-extrabold text-cyan-700">
              NutriPlan
            </h1>
          </div>
        </div>

        <nav className="px-5 flex-1">
          {[
            "Dashboard",
            "Meal Planner",
            "Grocery List",
            "Daily Progress",
            "Profile",
            "Settings",
          ].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-5 py-4 rounded-full mb-3 transition-all ${
                item === "Daily Progress"
                  ? "bg-cyan-700 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="p-5">
          <div className="bg-slate-50 rounded-3xl border p-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-slate-300 flex items-center justify-center">
              <User size={18} />
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                User Name
              </p>

              <p className="text-sm text-slate-500">
                View Profile
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[56px] font-extrabold text-slate-900 leading-none">
              Daily Progress
            </h1>

            <p className="text-slate-600 mt-4 text-lg">
              Track your progress and stay on top of your
              health goals.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm">
              <Calendar size={18} />

              <span className="font-medium">
                Select Date
              </span>
            </button>

            <button className="h-16 w-16 rounded-full bg-slate-400 text-white flex items-center justify-center">
              <X />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            title="ACTIVITY SCORE"
            icon={<Activity />}
          />

          <StatCard
            title="CALORIE BALANCE"
            icon={<Flame />}
            orange
          />

          <StatCard
            title="HYDRATION LEVEL"
            icon={<Droplets />}
          />

          <StatCard
            title="STREAK"
            icon={<Zap />}
            orange
          />
        </div>

        {/* Middle */}
        <div className="grid grid-cols-[1.4fr_0.9fr] gap-6 mt-8">
          {/* Nutrition */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[36px] font-bold text-slate-900">
                Nutritional Breakdown
              </h2>

              <div className="bg-slate-100 rounded-full p-1 flex">
                <button className="px-4 py-2 rounded-full bg-white text-cyan-700 font-medium">
                  Macros
                </button>

                <button className="px-4 py-2">
                  Micros
                </button>
              </div>
            </div>

            <ProgressBar
              label="PROTEIN"
              color="cyan"
            />

            <ProgressBar
              label="CARBOHYDRATES"
              color="cyan"
            />

            <ProgressBar
              label="FATS"
              color="amber"
            />

            <div className="grid grid-cols-3 mt-12 text-center">
              <MiniMetric title="FIBER" />
              <MiniMetric title="SUGAR" />
              <MiniMetric title="SODIUM" />
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <h2 className="text-[36px] font-bold text-slate-900">
              Steps Tracker
            </h2>

            <p className="text-slate-500 mt-2">
              Stay active and hit your daily target.
            </p>

            <div className="h-[260px] flex items-end justify-center gap-4 mt-10">
              {weeklySteps.map((value, index) => (
                <div
                  key={index}
                  className={`w-8 rounded-full ${
                    index === 3
                      ? "bg-cyan-600"
                      : "bg-slate-200"
                  }`}
                  style={{
                    height: `${value}%`,
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-7 text-center text-sm text-slate-500 mt-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (d) => (
                  <span key={d}>{d}</span>
                )
              )}
            </div>

            <button className="mt-8 w-full bg-cyan-700 text-white rounded-full py-4 flex justify-center items-center gap-2">
              <Plus size={18} />
              Log Activity
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Goals */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Target />

              <h2 className="text-[36px] font-bold text-slate-900">
                Completed Goals
              </h2>
            </div>

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex justify-between py-6 border-b"
              >
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500" />

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Goal Title
                    </h3>

                    <p className="text-sm text-slate-500">
                      Goal description will appear here
                    </p>
                  </div>
                </div>

                <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm h-fit">
                  In Progress
                </span>
              </div>
            ))}

            <div className="text-center mt-6">
              <button className="text-cyan-700 font-semibold">
                View All Goals
              </button>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <Trophy />

                <h2 className="text-[36px] font-bold text-slate-900">
                  Next Milestones
                </h2>
              </div>

              <button className="h-12 w-12 rounded-full bg-cyan-700 text-white flex items-center justify-center">
                <Plus />
              </button>
            </div>

            {[35, 65, 15].map((progress, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-800">
                    Milestone Title
                  </span>

                  <span className="text-slate-600">
                    --%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      index === 1
                        ? "bg-cyan-500"
                        : "bg-amber-500"
                    }`}
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <button className="text-cyan-700 font-semibold">
                View All Milestones
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-12">
          © 2025 NutriPlan. All rights reserved.
          Your health, our priority.
        </p>
      </main>
    </div>
  );
}

function StatCard({
  title,
  icon,
  orange = false,
}: {
  title: string;
  icon: React.ReactNode;
  orange?: boolean;
}) {
  return (
    <div className="bg-white rounded-[30px] border border-slate-100 p-6 shadow-sm">
      <p className="text-sm font-bold text-slate-700">
        {title}
      </p>

      <div className="flex justify-between items-center mt-8">
        <div>
          <div className="text-4xl font-bold">
            ---
          </div>

          <p className="text-slate-500 mt-2">
            of goal
          </p>
        </div>

        <div
          className={`h-16 w-16 rounded-full border-4 flex items-center justify-center ${
            orange
              ? "border-amber-500 text-amber-500"
              : "border-cyan-600 text-cyan-600"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  label,
  color,
}: {
  label: string;
  color: "cyan" | "amber";
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-slate-800">
          {label}
        </span>

        <span>-- / --</span>
      </div>

      <div className="h-4 bg-slate-200 rounded-full">
        <div
          className={`h-full rounded-full w-3/4 ${
            color === "cyan"
              ? "bg-gradient-to-r from-cyan-700 to-cyan-300"
              : "bg-gradient-to-r from-amber-700 to-amber-300"
          }`}
        />
      </div>
    </div>
  );
}

function MiniMetric({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="text-4xl font-bold text-cyan-700 mt-2">
        --%
      </h3>
    </div>
  );
}