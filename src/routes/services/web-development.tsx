import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { 
  Globe, Zap, ShieldCheck, Search, LayoutTemplate, 
  BarChart3, Cpu, Layers, Rocket, MonitorSmartphone 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <GradientText className="text-sm font-bold uppercase tracking-[0.2em]">
              Digital Presence
            </GradientText>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight">
              Modern <span className="text-gradient">Web Development</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We design and develop responsive, secure, and high-performing websites and web applications 
              that help businesses establish a powerful online presence and drive engagement.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <CTAButton to="/contact">Get Started</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Web Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Corporate Website", "Business Website", "E-commerce", "Portfolio Website", "Landing Pages",
              "CMS Development", "Custom Web Apps", "Progressive Web Apps", "Admin Panels", "Web Portals"
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-surface border border-white/10 p-6 rounded-xl text-center hover:border-accent transition-all hover:-translate-y-1">
                  <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
                  <p className="font-medium text-sm">{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Key Features & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <FadeIn>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Layers className="text-accent" /> Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Search, title: "SEO Friendly" },
                  { icon: MonitorSmartphone, title: "Responsive" },
                  { icon: Rocket, title: "Fast Loading" },
                  { icon: ShieldCheck, title: "Secure" },
                  { icon: Layers, title: "Scalable" },
                  { icon: BarChart3, title: "Analytics Ready" },
                  { icon: LayoutTemplate, title: "Modern UI" }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background/50 p-4 rounded-xl border border-white/5">
                    <feat.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-semibold">{feat.title}</span>
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
                  "React", "Next.js", "Vue", "Angular", "HTML", 
                  "CSS", "Tailwind CSS", "Node.js", "FastAPI", "Django"
                ].map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <h3 className="font-bold text-lg mb-2">Web Mastery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We leverage modern frameworks and architecture to ensure your web presence is not only visually stunning but technically superior.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/web-development")({
  component: ServicePage,
});
