import Link from "next/link";

import { Container } from "@/components/Container";

export function Cta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Start studying smarter</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bring calm to your semester.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            Turn coursework into a weekly plan you can actually follow with StudyMate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="button-primary">
              Choose a plan
            </Link>
            <Link href="/contact" className="button-secondary border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
