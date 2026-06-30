import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, FadeIn } from "../components/site/primitives";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — DOVIX AI" },
      { name: "description", content: "Frequently asked questions about working with DOVIX AI — engagements, pricing, data, security, and deployment." },
      { property: "og:title", content: "FAQ — DOVIX AI" },
      { property: "og:description", content: "Answers on DOVIX AI engagements, pricing, security, models, integrations, and ongoing operations." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What kinds of AI projects do you take on?", a: "Generative AI, autonomous agents, ML and computer vision, automation, and enterprise integrations. We focus on systems intended for production, not one-off pilots." },
  { q: "How do engagements typically start?", a: "A 45-minute strategy call, followed within 48 hours by a written architecture, plan, and timeline. From there we usually run a 2 to 4 week discovery sprint." },
  { q: "Where is your team located?", a: "We're headquartered in Jaipur, India (B-18, 2nd Floor, Shiv Marg, Bani Park, Jaipur 302015) and operate remote-first across the globe. Engagements run in your timezone." },
  { q: "How do you handle data and security?", a: "We're SOC 2 Type II ready and align to HIPAA, GDPR, and ISO 27001. We support sovereign deployments and self-hosted open models when required." },
  { q: "Do you work with open models or only OpenAI / Anthropic?", a: "Both. We use frontier hosted models when latency-to-quality matters, and self-hosted Llama, Mistral, or DeepSeek when control, cost, or data residency matters." },
  { q: "Can you integrate with our existing systems?", a: "Yes — CRM, ERP, EHR, data warehouses, ticketing, and bespoke internal systems. We have reference patterns for most enterprise stacks." },
  { q: "What does pricing look like?", a: "Fixed-scope discovery sprints, then either fixed-fee builds or dedicated pods. We share clear pricing once we understand your scope." },
  { q: "Do you provide ongoing operations?", a: "Yes — we run managed MLOps, evaluation, and on-call for the systems we build, or train your team to take it in-house." },
];

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Answers to the <span className="text-gradient">questions we hear most</span>.</>}
      />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q-${i}`} className="border-white/10 px-4">
                  <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
