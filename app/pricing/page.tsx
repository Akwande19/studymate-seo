import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/site";
import type { FaqItem } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Study Planner Pricing for Students",
  description:
    "Compare StudyMate student productivity app pricing: a free study planner, $6/month Pro academic task manager, and $12/month Study Group plan.",
  path: "/pricing",
  keywords: [
    "StudyMate pricing",
    "student productivity app pricing",
    "free study planner",
    "academic task manager",
    "deadline tracker",
  ],
});

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Get organized for your current courses.",
    features: ["Up to 4 courses", "Task planning", "Basic focus timer", "Weekly overview"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$6",
    suffix: "/month",
    description: "Build better habits with deeper insights.",
    features: ["Unlimited courses", "Smart reminders", "Study analytics", "Calendar sync", "Priority support"],
    featured: true,
  },
  {
    name: "Study Group",
    price: "$12",
    suffix: "/month",
    description: "Stay accountable together.",
    features: ["Up to 6 members", "Shared milestones", "Group focus challenges", "Pro features included"],
    featured: false,
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is there a free StudyMate plan?",
    answer:
      "Yes. The Starter plan is free and includes up to four courses, task planning, a basic focus timer, and a weekly overview.",
  },
  {
    question: "How much does StudyMate Pro cost?",
    answer:
      "StudyMate Pro costs $6 per month and includes unlimited courses, smart reminders, study analytics, calendar sync, and priority support.",
  },
  {
    question: "What is included in the Study Group plan?",
    answer:
      "The Study Group plan costs $12 per month and supports up to six members with shared milestones, group focus challenges, and Pro features.",
  },
  {
    question: "Which plan supports unlimited courses?",
    answer:
      "The Pro plan includes unlimited courses for individual students, and the Study Group plan includes Pro features for group members.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <PageHero
        eyebrow="StudyMate pricing"
        title="Study planner pricing for students and study groups"
        description="Use StudyMate as a free study planner, or upgrade for unlimited academic task management, deadline reminders, analytics, and group accountability."
      />
      <section className="py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">How much does StudyMate cost?</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              StudyMate Starter is free for students planning up to four courses. Pro costs $6 per month for
              unlimited courses and advanced tracking. Study Group costs $12 per month for up to six members
              who want shared accountability.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Review the <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/features">study planner features</Link> before choosing a plan,
              or <Link className="font-medium text-indigo-600 hover:text-indigo-700" href="/contact">contact StudyMate</Link> with a pricing question.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                className={`relative flex flex-col rounded-3xl p-7 ${
                  plan.featured
                    ? "border-2 border-indigo-600 bg-indigo-600 text-white shadow-xl"
                    : "border border-slate-200 bg-white text-slate-950 shadow-sm"
                }`}
                key={plan.name}
              >
                {plan.featured && (
                  <p className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    Most popular
                  </p>
                )}
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p className={`mt-3 text-sm ${plan.featured ? "text-indigo-100" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <p className="mt-7 text-4xl font-bold tracking-tight">
                  {plan.price}
                  {plan.suffix && (
                    <span className={`ml-1 text-sm font-normal ${plan.featured ? "text-indigo-100" : "text-slate-500"}`}>
                      {plan.suffix}
                    </span>
                  )}
                </p>
                <ul className="mt-8 flex-1 space-y-4 text-sm">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3" key={feature}>
                      <span className={plan.featured ? "text-indigo-200" : "text-indigo-600"} aria-hidden="true">
                        &#10003;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-9 inline-flex justify-center rounded-xl px-5 py-3.5 font-semibold transition ${
                    plan.featured
                      ? "bg-white text-indigo-700 hover:bg-indigo-50"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.name === "Starter" ? "Create account" : "Choose plan"}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FaqSection
        items={faqs}
        title="Pricing questions answered"
        description="Clear answers about free and paid StudyMate plans for individual students and study groups."
      />
      <RelatedLinks
        title="Choose StudyMate with confidence"
        links={[
          {
            href: "/features",
            title: "Compare features",
            description: "Understand the task, deadline, and focus tools included in StudyMate.",
          },
          {
            href: "/blog",
            title: "Explore study guidance",
            description: "See how planning and study routines can support your semester.",
          },
          {
            href: "/contact",
            title: "Contact support",
            description: "Ask about a plan or campus partnership.",
          },
        ]}
      />
    </main>
  );
}
