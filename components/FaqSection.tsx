import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema, type FaqItem } from "@/lib/structured-data";

type FaqSectionProps = {
  items: FaqItem[];
  title: string;
  description: string;
};

export function FaqSection({ items, title, description }: FaqSectionProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <JsonLd data={buildFaqSchema(items)} />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <article className="rounded-2xl border border-slate-200 bg-white p-6" key={item.question}>
                <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
