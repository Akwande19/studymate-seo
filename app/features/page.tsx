import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore StudyMate features including assignment planning, focus timers, reminders, collaboration, and academic progress analytics.",
  path: "/features",
  keywords: ["study app features", "assignment planner", "focus timer for students", "study tracking"],
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

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Tools made for how students really study"
        description="From the first lecture to final exams, StudyMate helps you prioritize work, protect focus time, and measure progress."
      />
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
      <Cta />
    </main>
  );
}
