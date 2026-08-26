"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin");

  if (isDashboard) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-[88px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
