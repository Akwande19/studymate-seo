import Link from "next/link";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/structured-data";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white py-4">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            {items.map((item, index) => {
              const current = index === items.length - 1;

              return (
                <li className="flex items-center gap-2" key={item.path}>
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {current ? (
                    <span aria-current="page" className="font-medium text-slate-700">
                      {item.name}
                    </span>
                  ) : (
                    <Link className="hover:text-indigo-600" href={item.path}>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}
