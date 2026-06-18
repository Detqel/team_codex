import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "./components/AppShell";
import PageTransition from "./components/PageTransition";

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