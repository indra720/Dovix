import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Briefcase, Send, Users, Sparkles, GraduationCap, Rocket, ShieldCheck } from "lucide-react";
import { PageHero, Section, SectionHeading, FadeIn, GlassCard } from "../components/site/primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — DOVIX AI" },
      { name: "description", content: "Join DOVIX AI. We're hiring across AI research, engineering, applied AI, marketing, and operations in Jaipur, Bengaluru, Dubai, and remote." },
      { property: "og:title", content: "Careers — DOVIX AI" },
      { property: "og:description", content: "Open roles at DOVIX AI across research, engineering, applied AI, marketing, and operations." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/careers" }],
  }),
  component: Careers,
});

const roles = [
  { t: "Senior AI Research Engineer", l: "Jaipur · Hybrid", team: "Research", type: "Full-time", exp: "5+ yrs" },
  { t: "Staff Software Engineer, Agents", l: "Remote (India)", team: "Engineering", type: "Full-time", exp: "6+ yrs" },
  { t: "Applied AI Engineer, Healthcare", l: "Bengaluru · Hybrid", team: "Applied AI", type: "Full-time", exp: "3+ yrs" },
  { t: "ML Platform Engineer", l: "Remote (India)", team: "Platform", type: "Full-time", exp: "4+ yrs" },
  { t: "Forward Deployed Engineer", l: "Dubai · Hybrid", team: "Applied AI", type: "Full-time", exp: "3+ yrs" },
  { t: "AI Product Designer", l: "Jaipur · Remote", team: "Design", type: "Full-time", exp: "3+ yrs" },
  { t: "AI Marketing Lead", l: "Jaipur · Hybrid", team: "Marketing", type: "Full-time", exp: "4+ yrs" },
  { t: "AI Solutions Architect", l: "Remote (APAC)", team: "GTM", type: "Full-time", exp: "5+ yrs" },
  { t: "AI Intern — Generative AI", l: "Jaipur · On-site", team: "Research", type: "Internship · 6 mo", exp: "Final-year / Fresh grad" },
  { t: "Business Development Executive", l: "Jaipur · On-site", team: "GTM", type: "Full-time", exp: "1–3 yrs" },
];

const perks = [
  { t: "Frontier-grade work", d: "Ship systems that move billion-dollar metrics for clients you've heard of." },
  { t: "Remote-friendly", d: "Hybrid in Jaipur, fully remote across India, with quarterly team offsites." },
  { t: "Compute & tools", d: "Unrestricted access to frontier APIs, GPUs, and the tools you choose." },
  { t: "Equity & ownership", d: "Meaningful equity for everyone — we win as a team." },
];

const hiringSteps = [
  { icon: Send, t: "1. Apply", d: "Send your CV plus a short note about a project you're proud of." },
  { icon: Users, t: "2. Intro call", d: "30-min conversation with the hiring lead to align on the role and your goals." },
  { icon: Sparkles, t: "3. Craft challenge", d: "A scoped, paid take-home (2–4 hours) reflecting real DOVIX work." },
  { icon: GraduationCap, t: "4. Deep dive", d: "Technical and systems interview with the team you'd join." },
  { icon: ShieldCheck, t: "5. Values & leadership", d: "Conversation with a founder on operating principles and ambition." },
  { icon: Rocket, t: "6. Offer", d: "Decision within 7 days of the final round — no ghosting, ever." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the systems that <span className="text-gradient">reshape industries</span>.</>}
        subtitle="We're hiring across research, engineering, applied AI, marketing, design, and go-to-market."
      />

      <Section>
        <FadeIn><SectionHeading eyebrow="Open roles" title="Currently hiring" /></FadeIn>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {roles.map((r) => (
            <div key={r.t} className="grid gap-3 border-b border-white/10 p-6 last:border-0 sm:grid-cols-[2fr_1.2fr_1.1fr_0.9fr_auto] sm:items-center">
              <div className="flex items-start gap-3">
                <Briefcase className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-lg font-semibold">{r.t}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{r.team}</p>
                </div>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {r.l}</p>
              <p className="text-sm text-muted-foreground">{r.type}</p>
              <p className="text-sm text-muted-foreground">{r.exp}</p>
              <Link to="/apply" className="justify-self-start rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 py-2 text-sm font-semibold text-[var(--background)] sm:justify-self-end">Apply now</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* HIRING MODEL */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Hiring model"
            title={<>Our <span className="text-gradient">6-step</span> hiring process.</>}
            subtitle="Transparent, fast, and respectful of your time. Most candidates complete the loop within 3 weeks."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hiringSteps.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.05}>
              <GlassCard className="h-full">
                <s.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* POST A JOB / REFERRAL */}
      <Section>
        <FadeIn>
          <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-linear-to-br from-[var(--surface-2)] to-[var(--background)] p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-display text-3xl font-bold tracking-tight">Don't see your role? <span className="text-gradient">Pitch us.</span></h3>
              <p className="mt-3 text-muted-foreground">If you're exceptional at something we'd benefit from, we'll build a role around you. Send a note describing the impact you want to have at DOVIX AI.</p>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Your full name" />
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Email" type="email" />
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Role you're pitching" />
              <textarea rows={4} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Why DOVIX, and what would you do here?" />
              <button className="rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Submit application</button>
            </form>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn><SectionHeading eyebrow="Life at DOVIX" title={<>Why <span className="text-gradient">people stay</span>.</>} /></FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <FadeIn key={p.t} delay={i * 0.05}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
