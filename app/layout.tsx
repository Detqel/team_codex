import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "./components/AppShell";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "NutriPlan",
  description: "Nutrition and Fitness Planner",
};
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>
          <AppShell>{children}</AppShell>
        </PageTransition>
      </body>
    </html>
  );
}