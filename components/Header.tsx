"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteInfo, navLinks } from "@/data/site";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#accueil" aria-label={`${siteInfo.name} — accueil`}>
          <Image
            src="/logo-trim.png"
            alt={siteInfo.name}
            width={448}
            height={146}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-flame"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteInfo.phoneLink}
            className="brand-gradient rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
          >
            Commander
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
