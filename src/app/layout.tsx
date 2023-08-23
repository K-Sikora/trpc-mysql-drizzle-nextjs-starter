import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QtrpcProvider from "@/src/trpc/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "drizzle & trpc starter",
  description: "drizzle & trpc starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QtrpcProvider>{children}</QtrpcProvider>
      </body>
    </html>
  );
}
