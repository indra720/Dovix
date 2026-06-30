import { createFileRoute } from "@tanstack/react-router";
import { Beaker, BookOpen, Microscope } from "lucide-react";
import { PageHero, Section, FadeIn, GlassCard } from "../components/site/primitives";

export const Route = createFileRoute("/ai-research")({
  head: () => ({
    meta: [
      { title: "AI Research — DOVIX AI" },
      { name: "description", content: "DOVIX AI Research focuses on agent reliability, evaluation, retrieval systems, multimodal reasoning, and AI safety." },
      { property: "og:title", content: "AI Research — DOVIX AI" },
      { property: "og:description", content: "Inside DOVIX AI Research — agent reliability, evaluation science, retrieval, multimodal reasoning, and AI safety." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/ai-research" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/ai-research" }],
  }),
  component: Research,
});

const themes = [
  { icon: Microscope, t: "Agent reliability", d: "Reducing failure modes, building robust tool-use, and quantifying multi-agent stability." },
  { icon: Beaker, t: "Evaluation science", d: "Domain-specific evals, adversarial probes, and continuous benchmark harnesses." },
  { icon: BookOpen, t: "Retrieval at scale", d: "Hybrid search, rerankers, and contextual compression for production RAG." },
];

const papers = [
  { t: "On the Operational Limits of Multi-Agent LLM Workflows", v: "DOVIX Research Note · 2025" },
  { t: "Eval-Driven Development: Shipping AI in Regulated Industries", v: "DOVIX Whitepaper · 2025" },
  { t: "Contextual Compression for Domain-Specific RAG", v: "Preprint · 2024" },
  { t: "Sovereign LLM Deployments: A Practical Playbook", v: "DOVIX Whitepaper · 2024" },
];

function Research() {
  return (
    <>
      <PageHero
        eyebrow="AI Research"
        title={<>Frontier work, <span className="text-gradient">grounded in production</span>.</>}
        subtitle="DOVIX Research advances the systems we ship — focusing on reliability, evaluation, and safety in agentic AI."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {themes.map((t, i) => (
            <FadeIn key={t.t} delay={i * 0.05}>
              <GlassCard className="h-full">
                <t.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold">{t.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section>
        <FadeIn>
          <h2 className="font-display text-3xl font-bold">Recent publications</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {papers.map((p) => (
              <div key={p.t} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold">{p.t}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.v}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
