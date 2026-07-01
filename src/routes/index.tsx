import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import {
  Bot, Brain, Sparkles, Zap, Shield, Network, Code2, Cpu, Database,
  Stethoscope, Banknote, ShoppingBag, Factory, GraduationCap, Building2,
  Workflow, Eye, MessageSquare, BarChart3, Star, ArrowRight, CheckCircle2,
} from "lucide-react";
import {
  Section, SectionHeading, FadeIn, CTAButton, GlassCard, Stat, GlowOrb, Eyebrow,
} from "../components/site/primitives";
import { VideoCard } from "../components/site/VideoCard";
import { NeuralBackground } from "../components/site/NeuralBackground";
// @ts-expect-error - JSX component without types
import Ferrofluid from "../components/Ferrofluid.jsx";
import { Contact } from "./contact";
import logoAsset from "@/assets/dovix-logo.asset.json";
import dovix1 from "../assets/Dovixai2.mp4"
import dovix from "../assets/DovixVi.mp4"
import { useMemo, useState, useRef } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOVIX AI — Enterprise AI, Agents & Automation" },
      { name: "description", content: "DOVIX AI engineers frontier AI systems, autonomous agents, LLM platforms, and enterprise automation for global organizations." },
      { property: "og:title", content: "DOVIX AI — Enterprise AI & Agents" },
      { property: "og:description", content: "Frontier AI, autonomous agents, and enterprise automation, engineered for production." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DOVIX AI",
          url: "https://doovix-vision-forge.lovable.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://doovix-vision-forge.lovable.app/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Generative AI", desc: "Custom LLMs, RAG pipelines, fine-tuning, and multimodal generation engineered for production." },
  { icon: Bot, title: "Autonomous Agents", desc: "Goal-driven AI agents with tool-use, memory, and orchestration across CrewAI, LangGraph, and MCP." },
  { icon: Workflow, title: "AI Automation", desc: "End-to-end business process automation that compounds productivity across every department." },
  { icon: BarChart3, title: "AI Marketing", desc: "Generative campaigns, audience modeling, SEO automation, and creative pipelines that scale revenue." },
  { icon: Brain, title: "Machine Learning", desc: "Deep learning, predictive analytics, and recommendation engines tailored to your domain." },
  { icon: Eye, title: "Computer Vision", desc: "Detection, segmentation, OCR, and visual reasoning at scale, on the edge or in the cloud." },
  { icon: MessageSquare, title: "Conversational AI", desc: "Multilingual voice and chat assistants powered by OpenAI, Claude, Gemini, and open models." },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Banknote, name: "Finance" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Government" },
];

const stack = [
  "OpenAI", "Anthropic", "Gemini", "Llama", "DeepSeek", "Mistral",
  "LangChain", "LangGraph", "CrewAI", "Qdrant", "Pinecone", "Weaviate",
  "PyTorch", "TensorFlow", "AWS", "Azure", "GCP", "Kubernetes",
];

const products = [
  { name: "AI CRM", desc: "Self-driving pipelines, lead scoring, and conversational sales." },
  { name: "AI ERP", desc: "Autonomous operations across supply, finance, and people." },
  { name: "AI Helpdesk", desc: "Tier-1 deflection with agentic resolution and human handoff." },
  { name: "AI Analytics", desc: "Natural-language BI over your warehouse with verified insights." },
];

const process = [
  { step: "01", title: "Discover", desc: "We map your data, processes, and the highest-leverage AI opportunities." },
  { step: "02", title: "Design", desc: "Architecture, model selection, evaluation harness, and guardrails." },
  { step: "03", title: "Build", desc: "Production-grade engineering with CI/CD, observability, and red-teaming." },
  { step: "04", title: "Scale", desc: "MLOps, continuous evaluation, and compounding model improvements." },
];

const testimonials = [
  { quote: "DOVIX AI shipped a multi-agent procurement system that paid for itself in 90 days.", who: "VP Operations, Fortune 500 Manufacturer" },
  { quote: "Their LLM platform is the most disciplined eval pipeline I've seen outside frontier labs.", who: "Chief Data Officer, Global Bank" },
  { quote: "We replaced six SaaS tools with one DOVIX agent stack. Velocity is unrecognizable.", who: "Founder, Series B Healthtech" },
];

function Home() {

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        speed: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      })),
    []
  );

  const gridBlocks = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        span: 1 + (i % 3),
        row: 1 + (i % 2),
        delay: i * 0.15,
      })),
    []
  );
  
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        {/* <NeuralBackground /> */}
        <div className="mx-auto w-full max-w-325 px-6 pt-28 pb-20 sm:pt-36 text-center relative z-10">
          <FadeIn>
            <Eyebrow>Frontier AI · Enterprise Grade · Globally Trusted</Eyebrow>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="relative mt-5">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                {particles.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-accent/30"
                    style={{
                      width: p.size,
                      height: p.size,
                      top: `${p.top}%`,
                      left: `${p.left}%`,
                      willChange: "transform, opacity",
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0.1, 0.7, 0.1],
                    }}
                    transition={{
                      duration: p.speed / 8,
                      repeat: Infinity,
                      delay: p.delay,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              <h1 className="relative font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Building the <span className="text-gradient">Intelligent Future</span>
                <br className="hidden sm:block" /> with Artificial Intelligence
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              DOVIX AI partners with ambitious organizations to design, build, and scale
              production-grade AI systems — from autonomous agents to enterprise LLM platforms.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CTAButton to="/contact">Start an AI Project</CTAButton>
              <CTAButton to="/services" variant="ghost">Explore Services</CTAButton>
            </div>
          </FadeIn>

          {/* hero visual */}
          <FadeIn delay={0.25}>
            <div className="relative mx-auto mt-20 max-w-5xl">
              <div className="glass-strong rounded-3xl p-2 shadow-[0_30px_120px_-30px_rgba(109,93,254,0.55)]">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-linear-to-br from-surface-2 to-background">
                  <div className="absolute inset-0 bg-grid opacity-40" />

                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                    {gridBlocks.map((b, i) => (
                      <motion.div
                        key={i}
                        className="m-2 rounded-lg border border-white/10 bg-white/3"
                        style={{ willChange: "opacity" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.6, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: b.delay }}
                        style={{ gridColumn: `span ${b.span}`, gridRow: `span ${b.row}` }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative w-full h-full">
                      <video
                        src={dovix1}
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        controls
                        className="h-full w-full object-cover rounded-3xl"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {[
                    { p: "top-4 left-4", t: "RAG · Vector Index" },
                    { p: "top-4 right-4", t: "Agents · Tool-Use" },
                    { p: "bottom-4 left-4", t: "Eval · Guardrails" },
                    { p: "bottom-4 right-4", t: "Observability" },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className={`absolute ${x.p} rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-foreground/80 backdrop-blur`}
                    >
                      {x.t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-4">
              <Stat value="50+" label="Enterprise clients" />
              <Stat value="10+" label="Countries served" />
              <Stat value="98%" label="Client retention" />
              <Stat value="50M+" label="AI calls served monthly" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-white/5 bg-white/2 py-12">
        <div className="mx-auto w-full max-w-375 px-6 sm:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by ambitious teams across India & beyond
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-14 text-2xl font-display font-semibold text-foreground/50">
              {[...Array(2)].flatMap((_, k) =>
                ["Rajana Group", "Skyline Realty", "Maharshi Diagnostics", "Pink City Foods", "Marudhar Steel", "Jaipur Gems", "Aravalli Cement", "Saraf Jewellers", "Bani Park Hospital", "Rajasthan Logistics", "Shekhawat Motors", "Thar Energy"].map((n) => (
                  <span key={`${k}-${n}`} className="whitespace-nowrap">{n}</span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTIONS — three highlights */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="See it in motion"
            title={<>Three ways DOVIX AI <span className="text-gradient">delivers value</span>.</>}
            subtitle="Short product walkthroughs of the systems we ship most often — from agents to vision to marketing."
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <FadeIn delay={0.05}>
            <VideoCard
              title="Autonomous Agents in action"
              caption="A live look at a multi-agent operations copilot."
              src="https://cdn.pixabay.com/video/2024/03/15/204306-925355529_large.mp4"
              poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <VideoCard
              title="AI Marketing pipelines"
              caption="Generative campaigns, audience modeling, and SEO automation."
              src="https://cdn.pixabay.com/video/2023/10/06/184244-872881183_large.mp4"
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <VideoCard
              title="Computer Vision deployments"
              caption="Real-time detection, OCR, and visual reasoning at scale."
              src="https://cdn.pixabay.com/video/2022/12/16/143341-781536165_large.mp4"
              poster="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80&auto=format&fit=crop"
            />
          </FadeIn>
        </div>
      </Section>

      {/* COMPANY PROFILE VIDEO */}
      <Section>
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] ">
            <VideoCard
              title="DOVIX AI — Company Profile"
              caption="Who we are, what we build, and the leaders we partner with."
              src="https://cdn.pixabay.com/video/2024/05/22/212447_large.mp4"
              poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop"
            />
            <div>
              <Eyebrow>Company profile</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A frontier AI studio, <span className="text-gradient">born in Jaipur</span>, building for the world.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're a tight team of AI researchers, product engineers, and forward-deployed
                specialists. We ship production-grade AI for enterprises across India, the GCC,
                Europe, and North America — from autonomous agents to vision platforms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="/about">More about us</CTAButton>
                <CTAButton to="/contact" variant="ghost">Book a discovery call</CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* SERVICES */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title={<>End-to-end AI, engineered for <span className="text-gradient">production</span>.</>}
            subtitle="From generative AI and autonomous agents to deep learning and computer vision — we build the systems that move enterprise needles."
          />
        </FadeIn>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-accent/20 to-accent-2/20 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                  Explore {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WHY DOVIX */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Why DOVIX AI"
              title={<>A frontier-lab mindset with <span className="text-gradient">enterprise discipline</span>.</>}
              subtitle="We combine research-grade engineering with the pragmatism of shipping into regulated, high-stakes environments."
            />
            <div className="mt-8 space-y-4">
              {[
                ["Research-grade engineering", "Eval-first development, red-teaming, and continuous benchmarking baked into every system."],
                ["Domain-deep teams", "Vertical squads with real expertise in healthcare, finance, retail, and government."],
                ["Composable AI platforms", "Modular RAG, agents, and MCP-server architectures you can extend in-house."],
                ["Trust and compliance", "SOC 2 Type II ready, HIPAA, GDPR, and ISO 27001 aligned by default."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--highlight)]" />
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-strong rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, t: "10x", s: "Faster releases" },
                  { icon: Shield, t: "0", s: "Production incidents" },
                  { icon: Network, t: "60%", s: "OPEX reduction" },
                  { icon: Cpu, t: "24/7", s: "Agent operations" },
                ].map((m) => (
                  <div key={m.s} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <m.icon className="h-5 w-5 text-accent" />
                    <div className="mt-3 font-display text-3xl font-bold text-gradient">{m.t}</div>
                    <p className="mt-1 text-xs text-muted-foreground">{m.s}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-linear-to-br from-(--accent)/10 to-(--accent-2)/10 p-5">
                <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Operating principle</p>
                <p className="mt-2 text-lg font-semibold">Models are commodities. <span className="text-gradient">Systems compound.</span></p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Products"
            title={<>Pre-built AI software, <span className="text-gradient">ready to deploy</span>.</>}
            subtitle="A modular suite of AI-native business applications that ship in weeks, not quarters."
          />
        </FadeIn>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-accent">
                  <Sparkles className="h-3 w-3" /> Dovix Suite
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/products" variant="ghost">See all products</CTAButton>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Industries"
            title={<>AI built for the realities of <span className="text-gradient">your sector</span>.</>}
          />
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((i, k) => (
            <FadeIn key={i.name} delay={k * 0.04}>
              <Link
                to="/industries"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-8 text-center transition hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <i.icon className="h-7 w-7 text-accent transition group-hover:scale-110" />
                <span className="text-sm font-medium">{i.name}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Technology"
            title={<>The <span className="text-gradient">full AI stack</span>, mastered.</>}
            subtitle="From foundation models and vector databases to MLOps and cloud — we use the right tool, never the trendy one."
          />
        </FadeIn>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/80 transition hover:border-accent/40 hover:text-accent">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Our process"
            title={<>From idea to <span className="text-gradient">intelligent system</span> in weeks.</>}
          />
        </FadeIn>
        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          {process.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.07}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-linear-to-b from-white/[0.06] to-transparent p-6">
                <div className="font-display text-5xl font-bold text-gradient">{p.step}</div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES preview */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Case studies"
            title={<>Outcomes our clients <span className="text-gradient">put in their board decks</span>.</>}
          />
        </FadeIn>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            { sector: "Healthcare", metric: "42%", desc: "Reduction in diagnostic turnaround at a 12-hospital network using our vision platform." },
            { sector: "Finance", metric: "$210M", desc: "Annual fraud loss avoided with our real-time multi-agent anomaly system." },
            { sector: "Retail", metric: "3.4x", desc: "Conversion lift from our agentic personalization engine across 1,200 stores." },
          ].map((c, i) => (
            <FadeIn key={c.sector} delay={i * 0.07}>
              <GlassCard className="h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{c.sector}</p>
                <p className="mt-4 font-display text-5xl font-bold text-gradient">{c.metric}</p>
                <p className="mt-4 text-sm text-muted-foreground">{c.desc}</p>
                <Link to="/case-studies" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent">
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="What leaders say"
            title={<>Trusted by operators who <span className="text-gradient">ship at scale</span>.</>}
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.who} delay={i * 0.07}>
              <GlassCard className="h-full">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-lg leading-relaxed">"{t.quote}"</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.who}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[var(--surface-2)] to-[var(--background)] p-12 sm:p-20">
            <GlowOrb className="-top-20 -right-20 h-100 w-100 bg-[var(--accent-2)]/30" />
            <GlowOrb className="-bottom-20 -left-20 h-100 w-100 bg-var(--accent)/25" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ready to ship <span className="text-gradient">real AI</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Tell us what you're trying to build. We'll come back with an architecture, a plan, and a timeline within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CTAButton to="/contact">Book a strategy call</CTAButton>
                <CTAButton to="/case-studies" variant="ghost">See our work</CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* NEWSLETTER */}
      <Section className="!py-16">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row">
            <div>
              <p className="font-display text-2xl font-semibold">Field notes from the AI frontier</p>
              <p className="mt-1 text-sm text-muted-foreground">Monthly briefings on agents, evals, and the systems shipping at the edge.</p>
            </div>
            <form className="flex w-full max-w-md gap-2 sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60"
              />
              <button className="rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-[var(--background)]">
                Subscribe
              </button>
            </form>
          </div>
        </FadeIn>
      </Section>

      {/* FINAL VIDEO */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <VideoCard
              title="The future of AI"
              caption="A glimpse into what's next at DOVIX."
              src={dovix}

              poster="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80&auto=format&fit=crop"
            />
          </div>
        </FadeIn>
      </Section>
      <Contact />
    </>
  );
}

// Unused suppression for tree-shaken icons referenced in JSX strings
void Code2; void Database; void BarChart3;
