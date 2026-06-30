import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, GraduationCap, Factory, Building, Banknote, Shield, ShoppingBag,
  Car, Plane, Hotel, Zap, Wheat, Landmark, HardHat, Tv, Wifi,
} from "lucide-react";
import { PageHero, Section, SectionHeading, FadeIn, GlassCard } from "../components/site/primitives";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — DOVIX AI" },
      { name: "description", content: "DOVIX AI delivers vertical AI for healthcare, finance, manufacturing, retail, government, energy, and more." },
      { property: "og:title", content: "Industries — DOVIX AI" },
      { property: "og:description", content: "Vertical AI from DOVIX AI for healthcare, finance, manufacturing, retail, government, energy and beyond." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/industries" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/industries" }],
  }),
  component: Industries,
});

const items = [
  { icon: Stethoscope, t: "Healthcare", d: "Clinical copilots, imaging AI, RCM automation, and patient experience." },
  { icon: GraduationCap, t: "Education", d: "Adaptive tutors, assessment automation, and admin copilots." },
  { icon: Factory, t: "Manufacturing", d: "Predictive maintenance, vision QC, and supply intelligence." },
  { icon: Building, t: "Real Estate", d: "Valuation models, leasing copilots, and tenant experience." },
  { icon: Banknote, t: "Finance & Banking", d: "Fraud, underwriting, advisory, and intelligent operations." },
  { icon: Shield, t: "Insurance", d: "Claims automation, risk scoring, and customer servicing." },
  { icon: ShoppingBag, t: "Retail & D2C", d: "Personalization, demand sensing, and store ops agents." },
  { icon: Car, t: "Automotive", d: "ADAS, in-cabin assistants, and aftermarket intelligence." },
  { icon: Plane, t: "Travel & Aviation", d: "Dynamic pricing, itinerary copilots, and disruption response." },
  { icon: Hotel, t: "Hospitality", d: "Guest agents, revenue management, and operations." },
  { icon: Zap, t: "Energy & Utilities", d: "Grid optimization, load forecasting, and asset analytics." },
  { icon: Wheat, t: "Agriculture & Agritech", d: "Yield prediction, vision-based scouting, and supply traceability." },
  { icon: Landmark, t: "Government & Public Sector", d: "Citizen services, case routing, and policy analysis." },
  { icon: HardHat, t: "Construction & Infra", d: "Safety vision, scheduling AI, and progress monitoring." },
  { icon: Tv, t: "Media & Entertainment", d: "Content generation, moderation, and audience intelligence." },
  { icon: Wifi, t: "Telecommunications", d: "Network ops, churn prediction, and service automation." },
  { icon: ShoppingBag, t: "E-commerce", d: "Conversational shopping, dynamic pricing, and catalog AI." },
  { icon: Stethoscope, t: "Pharma & Life Sciences", d: "Trials acceleration, regulatory copilots, and discovery." },
  { icon: Building, t: "Legal & Compliance", d: "Contract intelligence, discovery, and policy reasoning." },
  { icon: GraduationCap, t: "EdTech & Skilling", d: "Personalized learning paths and AI-graded assessments." },
  { icon: Factory, t: "Logistics & Supply Chain", d: "Routing, demand sensing, and warehouse vision." },
  { icon: Banknote, t: "FinTech & Lending", d: "Credit decisioning, KYC automation, and collections AI." },
  { icon: ShoppingBag, t: "Food & Beverage", d: "Menu engineering, demand forecasting, and franchise ops." },
  { icon: Tv, t: "SaaS & Tech", d: "AI-native features, agent layers, and product analytics." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>AI tailored to <span className="text-gradient">your sector's</span> realities.</>}
        subtitle="Domain-deep teams that understand regulation, data gravity, and the operating rhythms of your industry."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.02}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20">
                    <it.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{it.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Why vertical matters" title={<>Generic AI doesn't <span className="text-gradient">ship in regulated</span> environments.</>}
            subtitle="Our vertical squads bring pre-built data pipelines, compliance posture, evaluation suites, and partner ecosystems for every industry we serve." />
        </FadeIn>
      </Section>
    </>
  );
}
