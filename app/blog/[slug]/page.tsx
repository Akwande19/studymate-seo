import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { blogArticles, getArticle, getArticlePath } from "@/lib/blog-articles";
import { buildMetadata } from "@/lib/site";
import { buildArticleSchema } from "@/lib/structured-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: getArticlePath(article),
    keywords: article.keywords,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const path = getArticlePath(article);
  const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <JsonLd
        data={buildArticleSchema({
          title: article.title,
          description: article.description,
          path,
          publishedAt: article.publishedAt,
          updatedAt: article.publishedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path },
        ]}
      />
      <article>
        <header className="bg-grid border-b border-slate-100 py-14 sm:py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow">{article.category}</p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{article.intro}</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <time dateTime={article.publishedAt}>{article.dateLabel}</time>
                <span aria-hidden="true">&bull;</span>
                <span>{article.readTime}</span>
                <span aria-hidden="true">&bull;</span>
                <span>By StudyMate</span>
              </div>
            </div>
          </Container>
        </header>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <aside className="rounded-3xl bg-indigo-50 p-7 sm:p-9">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Put this advice into a StudyMate plan
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  StudyMate helps students manage academic tasks, track assignment deadlines, and schedule
                  focused study time in one workspace. Explore the tools, select a plan, or contact the
                  StudyMate team with questions.
                </p>
                <nav aria-label="StudyMate product links" className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link className="text-indigo-700 hover:text-indigo-900" href="/features">
                    View features
                  </Link>
                  <Link className="text-indigo-700 hover:text-indigo-900" href="/pricing">
                    Compare pricing
                  </Link>
                  <Link className="text-indigo-700 hover:text-indigo-900" href="/contact">
                    Contact StudyMate
                  </Link>
                </nav>
              </aside>
            </div>
          </Container>
        </section>
      </article>
      <RelatedLinks
        title="Read related StudyMate guides"
        links={relatedArticles.map((related) => ({
          href: getArticlePath(related),
          title: related.title,
          description: related.description,
        }))}
      />
    </main>
  );
}
