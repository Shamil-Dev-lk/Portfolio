"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-primary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="13 17 18 12 13 7"></polyline>
               <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
            <div className="text-2xl font-bold text-gray-900 flex items-center">
              Shamil<span className="text-brand-primary">Dev</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-gray-900 hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-3 xl:gap-5 flex-shrink-0 ml-4">
          <div className="flex items-center gap-3 xl:gap-4 border-r border-gray-200 pr-3 xl:pr-5">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-3 py-2 rounded-md transition-all whitespace-nowrap">
              Log in
            </Link>
            <Link href="/signup" className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-3 xl:px-4 py-2 rounded-md hover:bg-brand-primary/20 transition-colors whitespace-nowrap">
              Sign up
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md bg-brand-primary px-4 xl:px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-dark transition-colors whitespace-nowrap"
          >
            Start a Project <Rocket className="h-4 w-4 flex-shrink-0" />
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-primary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <polyline points="13 17 18 12 13 7"></polyline>
                   <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
                <div className="text-2xl font-bold text-gray-900">
                  Shamil<span className="text-brand-primary">Dev</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3 text-base font-bold text-gray-700 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-md bg-brand-primary/10 px-3 py-3 text-base font-bold text-brand-primary hover:bg-brand-primary/20 transition-colors"
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-md bg-brand-primary px-3 py-3 text-base font-bold text-white hover:bg-brand-dark transition-colors mt-2"
                  >
                    Start a Project <Rocket className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
