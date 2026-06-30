import type { ReactNode } from "react";
import { PageHero, Section } from "./primitives";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={`Last updated: ${updated}`} />
      <Section className="!pt-0">
        <article className="prose-legal mx-auto max-w-3xl space-y-8 text-foreground/85">
          {children}
        </article>
      </Section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl font-bold text-foreground">{children}</h2>;
}
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>;
}
export function UL({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}
