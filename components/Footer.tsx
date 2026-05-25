import Link from "next/link";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Study resources" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <Link href="/" className="text-lg font-bold text-slate-950">
              StudyMate
            </Link>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A focused academic planner that helps students organize deadlines, study consistently, and
              make progress visible.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link className="transition hover:text-indigo-600" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-100 py-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} StudyMate. All rights reserved.</p>
          <a className="hover:text-indigo-600" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
