import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHero, Section, SectionHeading, FadeIn, GlassCard, CTAButton } from "../components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions — DOVIX AI" },
      { name: "description", content: "Pre-architected AI solutions for conversational commerce, intelligent operations, agentic finance, clinical copilots and more." },
      { property: "og:title", content: "AI Solutions — DOVIX AI" },
      { property: "og:description", content: "Pre-architected DOVIX AI solutions for agentic customer ops, conversational commerce, clinical copilots and more." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/solutions" }],
  }),
  component: Solutions,
});

const solutions = [
  { t: "Agentic Customer Operations", d: "Tier-1 deflection, agent-assist, and autonomous resolution across web, voice, and email." },
  { t: "Conversational Commerce", d: "Personalized shopping copilots that double conversion and triple AOV on category pages." },
  { t: "Intelligent Document Processing", d: "Ingest, classify, extract, and verify unstructured documents at 99% accuracy." },
  { t: "Clinical Copilots", d: "Ambient documentation, coding assistance, and clinical decision support for hospital systems." },
  { t: "Risk & Fraud Intelligence", d: "Multi-agent anomaly detection with explainable scoring for finance and insurance." },
  { t: "Knowledge Assistants", d: "Internal RAG copilots over policies, contracts, code, and product docs with auditable citations." },
  { t: "Marketing & Content Engines", d: "Brand-safe generative content with humans-in-the-loop and full performance feedback." },
  { t: "Sales Intelligence", d: "Account research, intent signals, and outbound copilots wired into your CRM." },
  { t: "Operations Forecasting", d: "Supply, workforce, and demand forecasting that adapts continuously to real-world drift." },
  { t: "Cybersecurity Copilots", d: "Triage, correlation, and response augmentation for the modern SOC." },
  { t: "HR & Talent Intelligence", d: "Sourcing, screening, and employee experience agents with bias monitoring." },
  { t: "Public Sector AI", d: "Citizen services, case routing, and policy analysis with sovereign deployment options." },
];

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Pre-architected <span className="text-gradient">AI playbooks</span> for every function.</>}
        subtitle="Reference architectures and accelerators that compress months of work into weeks."
      >
        <CTAButton to="/contact">Find your solution</CTAButton>
      </PageHero>

      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12  ">
        <FadeIn>
          <SectionHeading  eyebrow="Solution catalog" title={<>Move from <span className="text-gradient text-2xl sm:text-5xl">pilot to production</span>, faster.</>} />
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.04}>
              <GlassCard className="h-full">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
