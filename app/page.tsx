import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/site";
import { softwareApplicationSchema, type FaqItem } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "StudyMate: Student Productivity App and Study Planner",
  description:
    "StudyMate is a student productivity app and study planner that helps students manage academic tasks, track deadlines, and plan focused study time.",
  keywords: [
    "student productivity app",
    "study planner",
    "academic task manager",
    "deadline tracker",
    "StudyMate",
  ],
});

const benefits = [
  {
    title: "Academic task planning",
    description: "Turn coursework and assignments into manageable weekly tasks in one organized dashboard.",
  },
  {
    title: "Assignment deadline tracking",
    description: "Keep upcoming due dates and exams visible so important submissions are not forgotten.",
  },
  {
    title: "Focus sessions",
    description: "Use planned focus blocks and breaks to work through reading, revision, and assignments.",
  },
  {
    title: "Study progress insights",
    description: "See completed tasks and study routines to understand where your effort is going.",
  },
];

const quickAnswers = [
  { label: "What it is", value: "A student productivity app and study planner" },
  { label: "Who it is for", value: "Students managing classes, assignments, and exams" },
  { label: "Problem it solves", value: "Scattered deadlines and unclear study priorities" },
];

const faqs: FaqItem[] = [
  {
    question: "What is StudyMate?",
    answer:
      "StudyMate is a student productivity app and study planner that combines academic task planning, deadline tracking, focus sessions, and progress insights in one web workspace.",
  },
  {
    question: "Who is StudyMate for?",
    answer:
      "StudyMate is designed for students who need to organize coursework, assignments, revision schedules, and exam deadlines across one or more courses.",
  },
  {
    question: "What problem does StudyMate solve?",
    answer:
      "StudyMate helps students replace scattered due dates and improvised study plans with a clear list of academic tasks, deadlines, and scheduled focus time.",
  },
  {
    question: "Can I start using StudyMate for free?",
    answer:
      "Yes. The Starter plan is free and includes up to four courses, task planning, a basic focus timer, and a weekly overview.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={softwareApplicationSchema} />
      <section className="bg-grid overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
            <div>
              <p className="eyebrow">Student productivity platform</p>
              <h1 className="mt-5 text-balance text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                A study planner and deadline tracker built for students
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                StudyMate is a student productivity app that brings academic tasks, assignment deadlines,
                study blocks, and progress insights together so your next step is clear.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/pricing" className="button-primary">
                  Start for free
                </Link>
                <Link href="/features" className="button-secondary">
                  Explore features
                </Link>
              </div>
            </div>

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-indigo-100/60 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Today&apos;s plan</p>
                  <p className="mt-1 font-semibold text-slate-900">Tuesday focus dashboard</p>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  On track
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {["Review biology notes", "Draft literature outline", "Practice calculus set"].map(
                  (task, index) => (
                    <div key={task} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                      <span
                        className={`size-5 rounded-full border-2 ${
                          index === 0 ? "border-indigo-600 bg-indigo-600" : "border-slate-300"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-800">{task}</p>
                        <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                          <div
                            className="h-1.5 rounded-full bg-indigo-500"
                            style={{ width: `${[100, 60, 30][index]}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="StudyMate at a glance" className="border-y border-slate-100 py-10">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {quickAnswers.map((answer) => (
              <div className="text-center" key={answer.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">{answer.label}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-800">{answer.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <article>
              <p className="eyebrow">Direct answer</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">What is StudyMate?</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                StudyMate is a student productivity app, study planner, academic task manager, and deadline
                tracker for organizing coursework and focused study. It helps students see what is due, decide
                what to study next, and follow a realistic weekly plan.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Students can explore the <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/features">planning and tracking features</Link> or
                compare the <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/pricing">free and paid plans</Link>.
              </p>
            </article>
            <aside className="rounded-3xl bg-indigo-50 p-7">
              <h2 className="text-xl font-semibold text-slate-950">Who StudyMate helps</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                StudyMate is for students balancing lectures, assignments, revision, exams, and personal
                schedules. It solves the problem of coursework being split between notes, calendars, and
                last-minute reminders.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Everything in rhythm</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your semester, organized in one place
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <h3 className="text-xl font-semibold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FaqSection
        items={faqs}
        title="Answers about StudyMate"
        description="Straightforward answers about the StudyMate academic task manager and deadline tracker."
      />
      <RelatedLinks
        title="Learn how StudyMate supports your study plan"
        links={[
          {
            href: "/features",
            title: "Review StudyMate features",
            description: "See how tasks, deadlines, focus sessions, and insights work together.",
          },
          {
            href: "/pricing",
            title: "Compare pricing plans",
            description: "Start free or choose advanced planning and group options.",
          },
          {
            href: "/blog",
            title: "Read student productivity guides",
            description: "Find practical approaches for study planning and exam preparation.",
          },
        ]}
      />
      <Cta />
    </main>
  );
}
