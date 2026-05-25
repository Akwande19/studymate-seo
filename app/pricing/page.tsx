import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Compare StudyMate plans for students and study groups. Start free or unlock advanced productivity insights with StudyMate Pro.",
  path: "/pricing",
  keywords: ["StudyMate pricing", "student planner price", "free study planner app", "education productivity app"],
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

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans for every study routine"
        description="Start at no cost and upgrade when you want unlimited planning, smarter reminders, or shared accountability."
      />
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
    </main>
  );
}
