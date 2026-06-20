 feature/rajiya/grocery-generator
export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#ffffff",
        borderRight: "1px solid #e5e5e5",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          color: "#0B6A77",
          marginBottom: "40px",
        }}
      >
        NutriPlan
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="/" style={{ color: "#333", textDecoration: "none" }}>
          Dashboard
        </a>

        <a
          href="/diet-plan"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Meal Planner
        </a>

        <a
          href="/grocery-generator"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Grocery List
        </a>

        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          Analytics
        </a>

        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          Settings
        </a>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Utensils,
  ShoppingCart,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Meal Planner", href: "/diet-plan", icon: Utensils },
  { title: "Grocery Generator", href: "/grocery-generator", icon: ShoppingCart },
  { title: "Daily Progress", href: "/daily-progress", icon: BarChart3 },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[275px] flex-shrink-0 bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between">
      <div>
        <div className="px-6 py-8 flex items-center gap-3 border-b border-gray-100 dark:border-slate-800">
          <img
            src="/logo.png"
            alt="NutriPlan Logo"
            className="w-11 h-11 rounded-2xl object-cover"
          />
          <div>
            <p className="text-xl font-semibold text-cyan-700">NutriPlan</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Nutrition hub</p>
          </div>
        </div>

        <nav className="px-3 py-6 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={item.href}
                className={`group flex items-center gap-3 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-cyan-700 text-white shadow"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-white" : "text-cyan-700"}`} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      
    </aside>
  );
}
 develop
