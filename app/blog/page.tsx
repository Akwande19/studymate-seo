import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { blogArticles, getArticlePath } from "@/lib/blog-articles";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Study Planning and Student Productivity Guides",
  description:
    "Read StudyMate guides for student productivity, academic task planning, assignment deadlines, exam preparation, and focused study routines.",
  path: "/blog",
  keywords: ["study planning guides", "student productivity tips", "academic task planning", "deadline planning", "exam preparation"],
});

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <article className="card flex flex-col" key={article.slug}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{article.category}</p>
                <h2 className="mt-5 text-xl font-semibold leading-8 text-slate-950">
                  <Link className="hover:text-indigo-600" href={getArticlePath(article)}>
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{article.description}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <time dateTime={article.publishedAt}>{article.dateLabel}</time>
                  <span aria-hidden="true">&bull;</span>
                  <span>{article.readTime}</span>
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
