import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/site";
import type { FaqItem } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Study Planner and Academic Task Manager Features",
  description:
    "Explore StudyMate study planner features for academic task management, assignment deadline tracking, focus sessions, and student progress insights.",
  path: "/features",
  keywords: [
    "study planner features",
    "academic task manager",
    "student deadline tracker",
    "assignment planner",
    "focus timer for students",
  ],
});

const features = [
  {
    title: "Smart task planner",
    description: "Break large assignments into smaller milestones and schedule each step around your classes.",
  },
  {
    title: "Focus sessions",
    description: "Run distraction-free timers with custom work and break intervals for any study style.",
  },
  {
    title: "Deadline reminders",
    description: "Get a clear view of approaching exams and deliverables before they become stressful.",
  },
  {
    title: "Course workspaces",
    description: "Organize notes, links, and study tasks by course for faster review before assessments.",
  },
  {
    title: "Progress insights",
    description: "Review weekly study patterns and task completion trends to improve consistency.",
  },
  {
    title: "Study groups",
    description: "Share plans and accountability goals with classmates while keeping personal tasks private.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is StudyMate an academic task manager?",
    answer:
      "Yes. StudyMate helps students turn assignments, revision work, and course responsibilities into organized tasks and milestones.",
  },
  {
    question: "How does StudyMate track deadlines?",
    answer:
      "Students can organize assignment and exam due dates in their course plan and use reminders to see approaching work before it is due.",
  },
  {
    question: "Does StudyMate support focused study sessions?",
    answer:
      "Yes. Focus sessions provide customizable work and break intervals for reading, revision, problem sets, and assignment writing.",
  },
  {
    question: "Can students use StudyMate for multiple courses?",
    answer:
      "Yes. The free Starter plan supports up to four courses, while the Pro plan includes unlimited courses.",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />
      <PageHero
        eyebrow="StudyMate features"
        title="Study planner features for tasks, deadlines, and focus"
        description="StudyMate combines an academic task manager, deadline tracker, focus timer, and progress view for students managing coursework."
      />
      <section className="py-14">
        <Container>
          <article className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">What does StudyMate do?</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              StudyMate helps students capture academic tasks, break assignments into steps, track important
              deadlines, and set aside focused study time. Its features are built to solve one common problem:
              knowing what work matters next across several courses.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Ready to choose an option? <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/pricing">Compare StudyMate plans</Link> or
              read <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/blog">study planning guidance</Link>.
            </p>
          </article>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article className="card" key={feature.title}>
                <span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FaqSection
        items={faqs}
        title="Feature questions answered"
        description="Details about using StudyMate as a study planner, academic task manager, and assignment deadline tracker."
      />
      <RelatedLinks
        title="Continue exploring StudyMate"
        links={[
          {
            href: "/pricing",
            title: "Pricing for students",
            description: "Compare Starter, Pro, and Study Group plan features.",
          },
          {
            href: "/",
            title: "What is StudyMate?",
            description: "Read the overview of the student productivity app.",
          },
          {
            href: "/contact",
            title: "Ask a question",
            description: "Contact the team about support or campus use.",
          },
        ]}
      />
      <Cta />
    </main>
  );
}
