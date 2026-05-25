import Link from "next/link";

import { Container } from "@/components/Container";

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

export function RelatedLinks({ title, links }: { title: string; links: RelatedLink[] }) {
  return (
    <section className="border-y border-slate-100 py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <article className="rounded-2xl border border-slate-200 p-5" key={link.href}>
              <h3 className="font-semibold text-slate-950">
                <Link className="hover:text-indigo-600" href={link.href}>
                  {link.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
