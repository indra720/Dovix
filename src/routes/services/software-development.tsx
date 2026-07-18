import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { 
  Code2, Database, LayoutDashboard, Settings, Layers, 
  Search, Palette, Terminal, Bug, Rocket, RefreshCw, Cpu 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <GradientText className="text-sm font-bold uppercase tracking-[0.2em]">
              Engineering Excellence
            </GradientText>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight">
              Custom <span className="text-gradient">Software Development</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We build scalable, secure, and high-performance software solutions tailored to your business needs. 
              From enterprise systems to SaaS platforms, we deliver software that drives business growth.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <CTAButton to="/contact">Get a Quote</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Enterprise Software", "CRM Development", "ERP Development", "HRMS", "Hospital Management",
              "School Management", "Inventory System", "POS System", "Accounting Software", "Custom Dashboard"
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-surface border border-white/10 p-6 rounded-xl text-center hover:border-accent transition-all hover:-translate-y-1">
                  <Code2 className="h-8 w-8 text-accent mx-auto mb-4" />
                  <p className="font-medium text-sm">{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Development Process & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <FadeIn>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <LayoutDashboard className="text-accent" /> Development Process
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Search, title: "Requirement Analysis" },
                  { icon: Palette, title: "UI/UX Design" },
                  { icon: Terminal, title: "Development" },
                  { icon: Bug, title: "Testing" },
                  { icon: Rocket, title: "Deployment" },
                  { icon: RefreshCw, title: "Maintenance" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <step.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-semibold">{step.title}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Cpu className="text-accent" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "React", "Next.js", "Node.js", "Python", "FastAPI",
                  "Django", "PostgreSQL", "MongoDB", "Docker", "AWS"
                ].map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <h3 className="font-bold text-lg mb-2">Why Partner With Us?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We combine technical expertise with business insight to build software that is not just functional, but a strategic asset for your company.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/software-development")({
  component: ServicePage,
});
