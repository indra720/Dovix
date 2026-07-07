import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-10 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-var(--accent) shadow-[0_0_10px_var(--accent)]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`w-full max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}

export function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  if (variant === "primary") {
    return (
      <Link
        to={to}
        className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-[var(--background)] shadow-[0_10px_40px_-10px_var(--accent)] transition hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_var(--accent)]"
      >
        {children}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    );
  }
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-white/30 hover:bg-white/10"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative  overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/[0.06] to-white/[0.02] p-2 transition hover:border-white/20 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-2)]/20" />
      </div>
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <span className="text-gradient">{value}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-56 sm:pt-48 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(60%_60%_at_50%_0%,#000_30%,transparent_75%)]"
      />
      <GlowOrb className="-top-32 left-1/2 -z-10 h-[420px] w-[700px] -translate-x-1/2 bg-[var(--accent-2)]/25" />
      <GlowOrb className="-top-20 right-0 -z-10 h-[260px] w-[360px] bg-var(--accent)/20" />
      <div className="mx-auto w-full max-w-[1300px] px-6 text-center">
        <FadeIn>
          <Eyebrow>{eyebrow}</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-5 font-display text-2xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          </FadeIn>
        )}
        {children && <FadeIn delay={0.15}><div className="mt-8">{children}</div></FadeIn>}
      </div>
    </section>
  );
}
