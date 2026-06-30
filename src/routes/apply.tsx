import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, FadeIn } from "../components/site/primitives";
import { useState } from "react";

export const Route = createFileRoute("/apply")({
  component: Apply,
});

const roles = [
  "Senior AI Research Engineer",
  "Staff Software Engineer, Agents",
  "Applied AI Engineer, Healthcare",
  "ML Platform Engineer",
  "Forward Deployed Engineer",
  "AI Product Designer",
  "AI Marketing Lead",
  "AI Solutions Architect",
  "AI Intern — Generative AI",
  "Business Development Executive",
];

function Apply() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Application"
        title={<>Apply to <span className="text-gradient">DOVIX AI</span></>}
        subtitle="We're excited to learn more about your experience and how you can contribute to our mission."
      />
      <Section className="!py-16">
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Full Name" />
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Email Address" type="email" />
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Mobile Number" type="tel" />
              
              <select 
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60 text-foreground"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="" className="bg-background">Select a role</option>
                {roles.map(role => (
                  <option key={role} value={role} className="bg-background">{role}</option>
                ))}
              </select>

              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground">Upload Resume (PDF only)</label>
                <input type="file" accept=".pdf" className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-accent/20 file:text-accent hover:file:bg-accent/30 cursor-pointer" />
              </div>
              
              <textarea rows={6} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent/60" placeholder="Tell us why you want to join DOVIX AI and what project you're most proud of." />
              <button className="mt-4 rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-[var(--background)]">
                Submit Application
              </button>
            </form>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
