import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Read StudyMate guides on time management, exam preparation, focused study sessions, and productive student routines.",
  path: "/blog",
  keywords: ["study tips blog", "student productivity tips", "exam planning", "study routine"],
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
      <PageHero
        eyebrow="StudyMate blog"
        title="Practical ideas for productive study"
        description="Strategies for planning coursework, improving concentration, and staying steady through a busy semester."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article className="card flex flex-col" key={post.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{post.category}</p>
                <h2 className="mt-5 text-xl font-semibold leading-8 text-slate-950">
                  <Link href="/blog" className="hover:text-indigo-600">
                    {post.title}
                  </Link>
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
    </main>
  );
}
