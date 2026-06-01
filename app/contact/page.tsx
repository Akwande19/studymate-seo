import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact StudyMate Student Productivity Support",
  description:
    "Contact StudyMate for student productivity app support, study planner pricing questions, deadline tracker help, or campus partnerships.",
  path: "/contact",
  keywords: ["contact StudyMate", "student productivity app support", "study planner support", "academic task manager"],
});

const contactOptions = [
  { title: "General questions", value: siteConfig.email },
  { title: "Student support", value: "support@studymate.app" },
  { title: "Campus partnerships", value: "campus@studymate.app" },
];

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Contact the StudyMate team"
        description="Get help with the StudyMate student productivity app, ask about a plan, or discuss bringing academic task planning to your campus."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Talk to the team</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We usually respond within one business day. Select the subject that best fits your request.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                For quick product details, review <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/features">features</Link> and <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/pricing">pricing</Link> first.
              </p>
              <div className="mt-9 space-y-5">
                {contactOptions.map((option) => (
                  <article className="rounded-2xl bg-slate-50 p-5" key={option.title}>
                    <h3 className="text-sm font-semibold text-slate-950">{option.title}</h3>
                    <a className="mt-2 block text-sm text-indigo-600 hover:text-indigo-700" href={`mailto:${option.value}`}>
                      {option.value}
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" action="#">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  First name
                  <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" type="text" name="firstName" autoComplete="given-name" required />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Last name
                  <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" type="text" name="lastName" autoComplete="family-name" required />
                </label>
                <label className="text-sm font-medium text-slate-700 sm:col-span-2">
                  Email address
                  <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" type="email" name="email" autoComplete="email" required />
                </label>
                <label className="text-sm font-medium text-slate-700 sm:col-span-2">
                  Message
                  <textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" name="message" required />
                </label>
              </div>
              <button className="button-primary mt-7 w-full sm:w-auto" type="submit">
                Send message
              </button>
            </form>
          </div>
        </Container>
      </section>
      <RelatedLinks
        title="Find StudyMate information"
        links={[
          {
            href: "/",
            title: "StudyMate overview",
            description: "Learn what the study planner is and who it serves.",
          },
          {
            href: "/features",
            title: "Study planner features",
            description: "View task planning, deadline tracking, and focus tools.",
          },
          {
            href: "/pricing",
            title: "Pricing plans",
            description: "Compare free, Pro, and Study Group options.",
          },
        ]}
      />
    </main>
  );
}
