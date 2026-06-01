import type { ReactNode } from "react";
import { CalendarCheck2, CheckCircle2, Clock3, GraduationCap, ListChecks, Mail, Target } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { blogArticles, getArticle, getArticlePath } from "./blogArticles";
import { Seo } from "./seo";
import { siteConfig } from "./site";
import {
  buildArticleSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "./structuredData";

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="site-logo" to="/" aria-label="StudyMate home">
          <GraduationCap size={26} aria-hidden="true" />
          <span>StudyMate</span>
        </Link>
        <nav className="site-nav" aria-label="Website navigation">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <p>StudyMate helps students plan coursework, track deadlines, and build focused study routines.</p>
        <nav aria-label="Footer navigation">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/welcome">Prototype</Link>
        </nav>
      </footer>
    </div>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <Seo
        title="StudyMate Student Planner for Assignments, Deadlines, and Focus"
        description={siteConfig.description}
        path="/"
        keywords={["StudyMate", "study planner", "student productivity app", "academic task manager", "deadline tracker"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema, softwareApplicationSchema],
        }}
      />
      <main>
        <section className="site-hero">
          <div>
            <p className="site-kicker">Student productivity app</p>
            <h1>StudyMate keeps assignments, study plans, and deadlines in one clear student workspace.</h1>
            <p>
              Use StudyMate as a study planner, academic task manager, and deadline tracker for coursework,
              revision, group projects, and weekly focus sessions.
            </p>
            <div className="hero-actions">
              <Link className="site-button" to="/features">Explore features</Link>
              <Link className="site-button secondary" to="/blog">Read study guides</Link>
            </div>
          </div>
          <aside className="hero-panel" aria-label="StudyMate planning preview">
            <div className="hero-stat">
              <CalendarCheck2 size={24} />
              <span>5 academic tasks due soon</span>
            </div>
            <div className="hero-stat">
              <Clock3 size={24} />
              <span>7 focus sessions planned this week</span>
            </div>
            <div className="hero-stat">
              <Target size={24} />
              <span>70% weekly study progress</span>
            </div>
          </aside>
        </section>
        <section className="site-section">
          <div className="section-heading">
            <p className="site-kicker">Why students use it</p>
            <h2>Plan work before it becomes urgent</h2>
          </div>
          <div className="feature-grid">
            <FeatureCard title="Academic task management" icon={<ListChecks size={24} />}>
              Capture assignments, reading, revision, and project steps by course so the next action is clear.
            </FeatureCard>
            <FeatureCard title="Deadline tracking" icon={<CalendarCheck2 size={24} />}>
              See approaching submissions early, add milestones, and protect time before final upload windows.
            </FeatureCard>
            <FeatureCard title="Focused study sessions" icon={<Clock3 size={24} />}>
              Connect tasks to realistic study blocks so planning turns into finished coursework.
            </FeatureCard>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function FeaturesPage() {
  return (
    <SiteShell>
      <Seo
        title="StudyMate Features for Student Planning"
        description="Explore StudyMate features for academic task management, assignment deadline tracking, weekly study planning, and student productivity."
        path="/features"
        keywords={["StudyMate features", "academic task manager", "deadline tracker", "study planner"]}
      />
      <main className="site-page">
        <PageHeader
          eyebrow="Features"
          title="Student planning tools for coursework, deadlines, and focus"
          description="StudyMate brings academic tasks, assignment dates, weekly planning, and study progress into one practical workspace."
        />
        <div className="feature-grid">
          <FeatureCard title="Course-based tasks" icon={<ListChecks size={24} />}>
            Organize assignments, readings, exams, and admin tasks by subject so coursework stays searchable and actionable.
          </FeatureCard>
          <FeatureCard title="Deadline tracker" icon={<CalendarCheck2 size={24} />}>
            Track due dates, milestone dates, and submission checks before a deadline becomes a last-minute problem.
          </FeatureCard>
          <FeatureCard title="Study focus sessions" icon={<Clock3 size={24} />}>
            Schedule realistic work blocks and connect each session to a specific academic outcome.
          </FeatureCard>
          <FeatureCard title="Progress overview" icon={<Target size={24} />}>
            Review weekly completion, unfinished tasks, and priority work that needs attention.
          </FeatureCard>
        </div>
      </main>
    </SiteShell>
  );
}

export function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "For students planning up to four courses.",
      features: ["Task planning", "Basic deadline tracking", "Weekly study overview"],
    },
    {
      name: "Pro",
      price: "$4/month",
      description: "For students who want deeper planning support.",
      features: ["Unlimited courses", "Smart reminders", "Study analytics", "Calendar sync"],
    },
    {
      name: "Study Group",
      price: "$9/month",
      description: "For project teams and accountability groups.",
      features: ["Shared milestones", "Group task visibility", "Team deadline checks"],
    },
  ];

  return (
    <SiteShell>
      <Seo
        title="StudyMate Pricing for Students"
        description="Compare StudyMate plans for student productivity, academic task management, study planning, and assignment deadline tracking."
        path="/pricing"
        keywords={["StudyMate pricing", "student planner pricing", "study planner app", "deadline tracker"]}
      />
      <main className="site-page">
        <PageHeader
          eyebrow="Pricing"
          title="Start free, then upgrade when your study system needs more"
          description="Choose the StudyMate plan that fits your courses, workload, and study planning routine."
        />
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <Seo
        title="Contact StudyMate"
        description="Contact StudyMate for student productivity app questions, academic task planning support, deadline tracking feedback, and study planner requests."
        path="/contact"
        keywords={["contact StudyMate", "student productivity app support", "study planner help"]}
      />
      <main className="site-page">
        <PageHeader
          eyebrow="Contact"
          title="Get in touch with StudyMate"
          description="Questions about academic task planning, deadline tracking, pricing, or student productivity workflows can be sent to the StudyMate team."
        />
        <section className="contact-panel">
          <Mail size={28} aria-hidden="true" />
          <div>
            <h2>Email</h2>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function BlogPage() {
  return (
    <SiteShell>
      <Seo
        title="Study Planning and Student Productivity Guides"
        description="Read StudyMate guides for student productivity, academic task planning, assignment deadlines, exam preparation, and focused study routines."
        path="/blog"
        keywords={[
          "study planning guides",
          "student productivity tips",
          "academic task planning",
          "deadline planning",
          "exam preparation",
        ]}
      />
      <main className="site-page">
        <PageHeader
          eyebrow="StudyMate guides"
          title="Study planning and productivity guidance for students"
          description="Practical strategies for organizing academic tasks, tracking deadlines, improving concentration, and preparing for exams."
        />
        <section className="blog-intro">
          <h2>What will you learn here?</h2>
          <p>
            These StudyMate guides explain how students can turn assignment dates into weekly study plans,
            choose focused work sessions, and prepare for exams without relying on last-minute reminders.
            These methods complement the <Link to="/features">StudyMate planning tools</Link>.
          </p>
        </section>
        <section className="article-grid" aria-label="StudyMate blog articles">
          {blogArticles.map((article) => (
            <article className="article-card" key={article.slug}>
              <p className="site-kicker">{article.category}</p>
              <h2>
                <Link to={getArticlePath(article)}>{article.title}</Link>
              </h2>
              <p>{article.description}</p>
              <div className="article-meta">
                <time dateTime={article.publishedAt}>{article.dateLabel}</time>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return <Navigate replace to="/blog" />;
  }

  const path = getArticlePath(article);
  const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <SiteShell>
      <Seo
        title={article.title}
        description={article.description}
        path={path}
        keywords={article.keywords}
        type="article"
        jsonLd={buildArticleSchema({
          title: article.title,
          description: article.description,
          path,
          publishedAt: article.publishedAt,
          updatedAt: article.publishedAt,
        })}
      />
      <main>
        <article className="article-page">
          <header className="article-hero">
            <Link className="breadcrumb-link" to="/blog">StudyMate Blog</Link>
            <p className="site-kicker">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.intro}</p>
            <div className="article-meta">
              <time dateTime={article.publishedAt}>{article.dateLabel}</time>
              <span>{article.readTime}</span>
              <span>By StudyMate</span>
            </div>
          </header>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <aside className="article-cta">
              <h2>Put this advice into a StudyMate plan</h2>
              <p>
                StudyMate helps students manage academic tasks, track assignment deadlines, and schedule
                focused study time in one workspace. Explore the tools, select a plan, or contact the
                StudyMate team with questions.
              </p>
              <nav aria-label="StudyMate product links">
                <Link to="/features">View features</Link>
                <Link to="/pricing">Compare pricing</Link>
                <Link to="/contact">Contact StudyMate</Link>
              </nav>
            </aside>
          </div>
        </article>

        <section className="related-section" aria-labelledby="related-heading">
          <div className="section-heading">
            <p className="site-kicker">Related guides</p>
            <h2 id="related-heading">Read more StudyMate articles</h2>
          </div>
          <div className="article-grid">
            {relatedArticles.map((related) => (
              <article className="article-card" key={related.slug}>
                <p className="site-kicker">{related.category}</p>
                <h2>
                  <Link to={getArticlePath(related)}>{related.title}</Link>
                </h2>
                <p>{related.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-header">
      <p className="site-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

function FeatureCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </article>
  );
}
