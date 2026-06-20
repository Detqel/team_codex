"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const noSidebarRoutes = ["/", "/login", "/signup"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell = noSidebarRoutes.includes(pathname || "");

  if (hideShell) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex">
      <Sidebar />
      <main className="flex-1 px-8 py-8 overflow-y-auto">{children}</main>
    </div>
  );
}
