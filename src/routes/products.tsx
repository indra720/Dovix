import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { PageHero, Section, FadeIn, GlassCard, CTAButton } from "../components/site/primitives";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — DOVIX AI" },
      { name: "description", content: "AI-native business products: CRM, ERP, LMS, HRMS, Helpdesk, Recruitment, Finance, Analytics, Sales, Marketing, Voice, Documents and more." },
      { property: "og:title", content: "Products — DOVIX AI" },
      { property: "og:description", content: "Explore the Dovix Suite of AI-native enterprise products: CRM, ERP, LMS, HRMS, Helpdesk, Analytics and more." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/products" }],
  }),
  component: Products,
});

const items = [
  { t: "AI LMS", d: "Adaptive learning, AI tutors, and automated assessments for institutions and L&D teams." },
  { t: "AI CRM", d: "Self-driving pipelines, intent-aware sequencing, and conversational sales copilots." },
  { t: "AI ERP", d: "Autonomous workflows across supply, finance, and people operations." },
  { t: "AI HRMS", d: "AI-powered onboarding, performance, and employee experience copilots." },
  { t: "AI Helpdesk", d: "Tier-1 deflection with agentic resolution and clean human handoff." },
  { t: "AI Recruitment", d: "Sourcing, screening, and interview intelligence with bias monitoring." },
  { t: "AI Finance", d: "Close automation, forecasting, and treasury copilots for modern CFO teams." },
  { t: "AI Analytics", d: "Natural-language BI over your warehouse with verified, explainable insights." },
  { t: "AI Sales", d: "Account research, deal intelligence, and outbound agents wired into your CRM." },
  { t: "AI Marketing", d: "Brand-safe content engines and full-funnel campaign agents." },
  { t: "AI Voice Assistant", d: "Realtime multilingual voice agents for sales, support, and operations." },
  { t: "AI Document Processing", d: "Ingest, classify, extract, and verify documents at 99% accuracy." },
  { t: "AI Knowledge Base", d: "Self-updating organizational memory with auditable citations." },
  { t: "AI Workflow Automation", d: "Compose agents and tools into reliable, observable business workflows." },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>The Dovix Suite. <span className="text-gradient">AI-native software</span> for the modern enterprise.</>}
        subtitle="A modular suite that ships in weeks, integrates with what you have, and replaces what you no longer need."
      >
        <CTAButton to="/contact">Request a demo</CTAButton>
      </PageHero>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.04}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                  <Package className="h-3.5 w-3.5" /> Dovix Suite
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
