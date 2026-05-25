import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "StudyMate | Student Productivity and Study Planner App",
  description:
    "Plan assignments, focus on what matters, and build better study habits with StudyMate, the productivity app designed for students.",
  keywords: ["student productivity app", "study planner", "assignment tracker", "StudyMate"],
});

const benefits = [
  {
    title: "Plan every deadline",
    description: "Turn syllabi and due dates into manageable weekly tasks with one organized academic dashboard.",
  },
  {
    title: "Focus without burnout",
    description: "Use flexible focus sessions and planned breaks to complete deep work at a sustainable pace.",
  },
  {
    title: "See your progress",
    description: "Track completed sessions, course momentum, and habits that move your grades forward.",
  },
];

const stats = [
  { value: "12k+", label: "student planners created" },
  { value: "2.4M", label: "focus minutes logged" },
  { value: "94%", label: "feel more organized" },
];

export default function Home() {
  return (
    <main>
      <section className="bg-grid overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
            <div>
              <p className="eyebrow">Student productivity platform</p>
              <h1 className="mt-5 text-balance text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Study with a plan. Finish with confidence.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                StudyMate brings assignments, study blocks, reminders, and progress insights together so your
                next step is always clear.
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

      <section aria-label="StudyMate results" className="border-y border-slate-100 py-10">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="text-center" key={stat.label}>
                <p className="text-3xl font-bold tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <h3 className="text-xl font-semibold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Cta />
    </main>
  );
}
