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
    <aside className="w-[275px] flex-shrink-0 bg-white border-r border-gray-200  flex flex-col justify-between">
      <div>
        <div className="px-6 py-8 flex items-center gap-3 border-b border-gray-100">
          <img
            src="/logo.png"
            alt="NutriPlan Logo"
            className="w-11 h-11 rounded-2xl object-cover"
          />
          <div>
            <p className="text-xl font-semibold text-cyan-700">NutriPlan</p>
            <p className="text-sm text-slate-500 ">Nutrition hub</p>
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
                    : "text-slate-700 hover:bg-slate-100"
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