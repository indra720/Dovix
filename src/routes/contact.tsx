import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Linkedin, Twitter, Github, Instagram, Facebook, Youtube, Heart, MessageSquare } from "lucide-react";
import { PageHero, Section, FadeIn, GlassCard, SectionHeading } from "../components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DOVIX AI" },
      { name: "description", content: "Talk to DOVIX AI about your AI project. Offices in San Francisco, London, Bengaluru, and Dubai." },
      { property: "og:title", content: "Contact — DOVIX AI" },
      { property: "og:description", content: "Talk to DOVIX AI about your AI project. Headquartered in Jaipur, India — we respond within 48 hours." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/contact" }],
  }),
  component: Contact,
});

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">intelligent</span>.</>}
        subtitle="Tell us what you're working on. We'll come back with an architecture and a plan within 48 hours."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <GlassCard>
              <h2 className="font-display text-2xl font-bold">Start the conversation</h2>
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" />
                <div className="sm:col-span-2">
                  <Field label="Project type" name="topic" placeholder="e.g. Generative AI · Agents · Computer Vision" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Tell us about your project</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/60"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy.</p>
                  <button className="rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-6 py-3 text-sm font-semibold text-[var(--background)]">
                    {sent ? "Thanks — we'll reach out shortly" : "Send message"}
                  </button>
                </div>
              </form>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <GlassCard>
                <h3 className="font-display text-lg font-semibold">Reach us directly</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <Info icon={Mail} text="info@dovix.ai" />
                  <Info icon={Phone} text="+91 91163 82399" />
                  <Info icon={MessageCircle} text="WhatsApp · +91 91163 82399" />
                  <Info icon={MapPin} text="B-18, 2nd Floor, Shiv Marg, Opposite Maharshi Raman Diagnostic Center, Kanti Nagar, Bani Park, Jaipur, Rajasthan 302015, India" />
                  <Info icon={Clock} text="Mon — Sat · 10:00 to 19:00 IST" />
                </div>
              </GlassCard>
              <GlassCard>
                <h3 className="font-display text-lg font-semibold">Follow us</h3>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { I: Linkedin, label: "LinkedIn", href: "#" },
                    { I: Instagram, label: "Instagram", href: "#" },
                    { I: Twitter, label: "Twitter / X", href: "#" },
                    { I: Facebook, label: "Facebook", href: "#" },
                    { I: Youtube, label: "YouTube", href: "#" },
                    { I: Github, label: "GitHub", href: "#" },
                  ].map(({ I, label, href }) => (
                    <a key={label} href={href} aria-label={`DOVIX AI on ${label}`} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs transition hover:border-accent/50 hover:text-accent">
                      <I className="h-4 w-4" /> {label}
                    </a>
                  ))}
                </div>
              </GlassCard>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 bg-linear-to-br from-[var(--accent)]/15 via-transparent to-[var(--accent-2)]/25" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-accent" />
                      <p className="mt-2 text-sm text-muted-foreground">Global HQ map</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* INSTAGRAM FEED */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="@dovix.ai on Instagram"
            title={<>From our studio to your <span className="text-gradient">feed</span>.</>}
            subtitle="Behind-the-scenes of agent demos, product launches, and team life."
          />
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <a href="https://instagram.com/dovix.ai" target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10">
                <div
                  className="absolute inset-0 transition group-hover:scale-110"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, var(--accent), var(--accent-2))`,
                    opacity: 0.35,
                  }}
                />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <Instagram className="h-8 w-8 text-white/70 transition group-hover:scale-125 group-hover:text-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> {120 + i * 37}</span>
                  <span className="inline-flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {8 + i * 3}</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://instagram.com/dovix.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-accent/50">
            <Instagram className="h-4 w-4" /> Follow @dovix.ai
          </a>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/60"
      />
    </div>
  );
}

function Info({ icon: Icon, text }: { icon: typeof Mail; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      <p className="text-foreground/85">{text}</p>
    </div>
  );
}
