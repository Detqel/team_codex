import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "./components/AppShell";
import PageTransition from "./components/PageTransition";

<<<<<<< HEAD
const inter = Inter({
  subsets: ["latin"],
});

=======
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <PageTransition>
          <AppShell>{children}</AppShell>
        </PageTransition>
      </body>
=======
      <body>{children}</body>
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
    </html>
  );
}