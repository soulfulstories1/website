"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020202]/10 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12">
              <span className="text-[28px] font-black italic text-white">MCM</span>
            </div>
            <div className="flex flex-col ml-1">
              <span className="text-[18px] font-bold text-white leading-none tracking-tight">Main Character</span>
              <span className="text-[11px] font-medium tracking-[0.35em] text-[#EC4B46] mt-1 ml-0.5">MEDIA</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/5">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-base font-medium transition-colors ${
                  pathname === link.href ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
