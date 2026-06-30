import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Bot, MessageSquare, Cpu, Brain, Eye, Workflow, Mic,
  BarChart3, GitBranch, Database, Network, Cloud, Wrench, Stethoscope, Banknote, Building, ShoppingBag, Wifi, Layers,
} from "lucide-react";
import { PageHero, Section, SectionHeading, FadeIn, GlassCard, CTAButton } from "../components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Services — DOVIX AI" },
      { name: "description", content: "Generative AI, autonomous agents, ML, computer vision, NLP, RAG, MCP, fine-tuning and enterprise AI integration services." },
      { property: "og:title", content: "AI Services — DOVIX AI" },
      { property: "og:description", content: "Full-stack enterprise AI services from DOVIX AI: GenAI, agents, ML, computer vision, RAG, fine-tuning, and integrations." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Enterprise AI Engineering",
          provider: { "@type": "Organization", name: "DOVIX AI", url: "https://doovix-vision-forge.lovable.app" },
          areaServed: "Worldwide",
          description: "Generative AI, autonomous agents, machine learning, computer vision, RAG, fine-tuning, and enterprise AI integration services.",
        }),
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    title: "Generative AI & LLMs",
    items: [
      { icon: Sparkles, t: "Generative AI Development", d: "Production-ready GenAI products and pipelines, end to end." },
      { icon: Brain, t: "LLM Development", d: "Pretraining strategy, fine-tuning, and distillation pipelines." },
      { icon: MessageSquare, t: "AI Chatbot Development", d: "Branded multilingual assistants with RAG and tool-use." },
      { icon: Wrench, t: "Custom AI Software", d: "Bespoke AI applications crafted around your workflow." },
      { icon: GitBranch, t: "Fine-tuning LLMs", d: "LoRA, QLoRA, and full-parameter tuning on your data." },
      { icon: Database, t: "RAG Development", d: "Hybrid retrieval, reranking, evaluation, and observability." },
      { icon: Layers, t: "Vector Database Solutions", d: "Qdrant, Pinecone, Weaviate, Milvus — designed for scale." },
    ],
  },
  {
    title: "Agents & Automation",
    items: [
      { icon: Bot, t: "AI Agents", d: "Goal-driven agents with planning, memory, and tool-use." },
      { icon: Bot, t: "Autonomous Agents", d: "Self-improving multi-agent systems with safe boundaries." },
      { icon: Workflow, t: "AI Automation", d: "Workflow automation across sales, ops, finance, and HR." },
      { icon: Workflow, t: "Business Process Automation", d: "End-to-end BPA combining RPA, LLMs, and human-in-the-loop." },
      { icon: Network, t: "MCP Servers", d: "Model Context Protocol servers wiring AI into your stack." },
      { icon: Workflow, t: "AI Workflow Automation", d: "n8n, Temporal, and LangGraph orchestration in production." },
    ],
  },
  {
    title: "ML, Vision & Voice",
    items: [
      { icon: Brain, t: "Machine Learning", d: "Predictive modeling, optimization, and uplift modeling." },
      { icon: Cpu, t: "Deep Learning", d: "Custom architectures for vision, speech, and time-series." },
      { icon: Eye, t: "Computer Vision", d: "Detection, segmentation, OCR, and visual reasoning." },
      { icon: MessageSquare, t: "Natural Language Processing", d: "Classification, extraction, and document understanding." },
      { icon: Mic, t: "Speech & Voice AI", d: "ASR, TTS, voice cloning, and real-time voice agents." },
      { icon: BarChart3, t: "Predictive Analytics", d: "Forecasting and decisioning systems your team can trust." },
      { icon: Sparkles, t: "Recommendation Engines", d: "Two-tower, multi-armed, and LLM-powered personalization." },
    ],
  },
  {
    title: "Integration & Consulting",
    items: [
      { icon: Cloud, t: "AI Consulting", d: "Strategy, opportunity mapping, and capability roadmaps." },
      { icon: Network, t: "AI Integration", d: "Embed AI into CRM, ERP, EHR, and bespoke systems." },
      { icon: Sparkles, t: "OpenAI Integration", d: "Production-grade OpenAI pipelines and cost engineering." },
      { icon: Sparkles, t: "Claude Integration", d: "Anthropic-powered assistants with safety guardrails." },
      { icon: Sparkles, t: "Gemini Integration", d: "Multimodal Gemini deployments at enterprise scale." },
      { icon: Cpu, t: "Ollama & Open Models", d: "Self-hosted Llama, Mistral, DeepSeek for sovereign AI." },
      { icon: GitBranch, t: "LangChain · LangGraph · CrewAI", d: "Battle-tested orchestration patterns we use daily." },
    ],
  },
  {
    title: "AI Marketing & Growth",
    items: [
      { icon: BarChart3, t: "AI Marketing Strategy", d: "AI-first GTM playbooks, attribution modeling, and growth experiments." },
      { icon: Sparkles, t: "Generative Creative Studio", d: "On-brand image, video, and ad-copy pipelines at campaign scale." },
      { icon: MessageSquare, t: "SEO & Content AI", d: "Topic clustering, programmatic SEO, and editorial automation that ranks." },
      { icon: Bot, t: "Lifecycle & CRM Agents", d: "Personalized email, WhatsApp, and in-app journeys orchestrated by agents." },
      { icon: Workflow, t: "Performance Ads AI", d: "Bid optimization, audience modeling, and creative testing on Meta, Google, LinkedIn." },
      { icon: Eye, t: "Brand & Social Intelligence", d: "Listening, sentiment, and trend detection across social and search." },
      { icon: GitBranch, t: "MarTech Integrations", d: "HubSpot, Salesforce, GA4, and CDP integrations wired for AI." },
    ],
  },
  {
    title: "Vertical AI",
    items: [
      { icon: Stethoscope, t: "Healthcare AI", d: "Clinical copilots, imaging, and revenue cycle automation." },
      { icon: Banknote, t: "FinTech AI", d: "KYC, fraud, underwriting, and intelligent operations." },
      { icon: Building, t: "Real Estate AI", d: "Valuations, deal sourcing, and tenant experience agents." },
      { icon: ShoppingBag, t: "Retail AI", d: "Personalization, demand sensing, and store ops copilots." },
      { icon: Wifi, t: "IoT AI", d: "Edge inference, anomaly detection, predictive maintenance." },
      { icon: Cloud, t: "Cloud AI", d: "AWS, Azure, GCP AI platforms with cost-aware MLOps." },
      { icon: Bot, t: "Robotics AI", d: "Perception, planning, and policy learning for autonomy." },
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="AI Services"
        title={<>The full spectrum of <span className="text-gradient">AI capability</span>.</>}
        subtitle="Forty-plus production services across generative AI, agents, ML, vision, voice, automation, and vertical AI."
      >
        <CTAButton to="/contact">Scope a project</CTAButton>
      </PageHero>

      {groups.map((g, gi) => (
        <Section key={g.title}>
          <FadeIn>
            <SectionHeading eyebrow={`0${gi + 1}`} title={g.title} />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((it, i) => (
              <FadeIn key={it.t} delay={i * 0.04}>
                <GlassCard className="h-full">
                  <it.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
