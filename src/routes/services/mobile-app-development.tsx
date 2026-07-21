import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { 
  Smartphone, Zap, Bell, CreditCard, MapPin, MessageSquare, 
  Lock, Cloud, BarChart3, Cpu, LayoutGrid, Layers 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground  pt-14 md:pt-12 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <GradientText className="text-sm font-bold uppercase tracking-[0.2em]">
              Mobile Innovation
            </GradientText>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight">
              Mobile App <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Create high-performance Android and iOS applications with modern technologies. 
              We develop scalable, secure, and user-friendly mobile applications for startups and enterprises.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <CTAButton to="/contact">Build Your App</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Mobile Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Android Apps", "iOS Apps", "Flutter Apps", "React Native", "Enterprise Apps",
              "E-commerce Apps", "Healthcare Apps", "Education Apps", "Booking Apps", "Finance Apps"
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-surface border border-white/10 p-6 rounded-xl text-center hover:border-accent transition-all hover:-translate-y-1">
                  <Smartphone className="h-8 w-8 text-accent mx-auto mb-4" />
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
                  { icon: LayoutGrid, title: "Cross Platform" },
                  { icon: Zap, title: "Offline Support" },
                  { icon: Bell, title: "Push Notifications" },
                  { icon: CreditCard, title: "Payment Gateway" },
                  { icon: MapPin, title: "GPS Tracking" },
                  { icon: MessageSquare, title: "Chat" },
                  { icon: Lock, title: "Authentication" },
                  { icon: Cloud, title: "Cloud Sync" },
                  { icon: BarChart3, title: "Analytics" }
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
                  "Flutter", "Dart", "Swift", "Kotlin", "Firebase",
                  "REST APIs", "Google Maps", "Stripe", "Razorpay"
                ].map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <h3 className="font-bold text-lg mb-2">Our Mobile Expertise</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We deliver seamless, responsive mobile experiences, focusing on performance, UX design, and secure cloud integration for every application we build.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/mobile-app-development")({
  component: ServicePage,
});
