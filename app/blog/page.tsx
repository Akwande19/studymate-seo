import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Study Planning and Student Productivity Guides",
  description:
    "Read StudyMate guides for student productivity, academic task planning, assignment deadlines, exam preparation, and focused study routines.",
  path: "/blog",
  keywords: ["study planning guides", "student productivity tips", "academic task planning", "deadline planning", "exam preparation"],
});

const posts = [
  {
    category: "Planning",
    title: "How to build a weekly study plan that lasts",
    excerpt: "A practical approach to balancing coursework, review sessions, and recovery time in one schedule.",
    date: "May 18, 2026",
    readTime: "6 min read",
  },
  {
    category: "Focus",
    title: "Five ways to make focused sessions more effective",
    excerpt: "Small adjustments to your environment and timer routine that help you stay present with difficult work.",
    date: "May 11, 2026",
    readTime: "4 min read",
  },
  {
    category: "Exams",
    title: "Turn an exam syllabus into a revision roadmap",
    excerpt: "Map topics, identify weak areas, and space revision so you avoid last-minute cramming.",
    date: "May 2, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <PageHero
        eyebrow="StudyMate guides"
        title="Study planning and productivity guidance for students"
        description="Practical strategies for organizing academic tasks, tracking deadlines, improving concentration, and preparing for exams."
      />
      <section className="py-14">
        <Container>
          <article className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">What will you learn here?</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The StudyMate guides explain how students can turn assignment dates into weekly study plans,
              choose focused work sessions, and prepare for exams without relying on last-minute reminders.
              These methods complement the <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/features">StudyMate planning tools</Link>.
            </p>
          </article>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article className="card flex flex-col" key={post.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{post.category}</p>
                <h2 className="mt-5 text-xl font-semibold leading-8 text-slate-950">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <time>{post.date}</time>
                  <span aria-hidden="true">&bull;</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <RelatedLinks
        title="Put study planning into practice"
        links={[
          {
            href: "/",
            title: "Learn what StudyMate is",
            description: "See the product overview for students managing academic work.",
          },
          {
            href: "/features",
            title: "Use planning features",
            description: "Explore academic task, deadline, and focus tools.",
          },
          {
            href: "/pricing",
            title: "Start with a plan",
            description: "Compare the free plan with Pro and Study Group options.",
          },
        ]}
      />
    </main>
  );
}
