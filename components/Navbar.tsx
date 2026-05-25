"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <Container>
        <nav aria-label="Primary" className="flex min-h-18 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-950">
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white"
            >
              S
            </span>
            StudyMate
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="space-y-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-indigo-600 ${
                  pathname === link.href ? "text-indigo-600" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/pricing" className="button-primary px-5 py-3 text-sm">
              Get started
            </Link>
          </div>
        </nav>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-slate-100 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
