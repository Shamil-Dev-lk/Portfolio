import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutProvider from "@/components/layout/ClientLayoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShamilDev | Freelance Web Developer",
  description: "I build fast, beautiful websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900 flex flex-col min-h-screen">
        <ClientLayoutProvider>
          {children}
        </ClientLayoutProvider>
      </body>
    </html>
  );
}
