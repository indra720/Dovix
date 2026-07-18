import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { 
  Megaphone, TrendingUp, BarChart3, Users, Bot, 
  Search, Mail, Palette, BrainCircuit, Target, LayoutDashboard 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <GradientText className="text-sm font-bold uppercase tracking-[0.2em]">
              Data-Driven Growth
            </GradientText>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight">
              AI-Powered <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Grow your business using AI-driven digital marketing strategies that improve visibility, 
              generate qualified leads, and maximize your return on investment.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <CTAButton to="/contact">Boost Your Growth</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Marketing Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "SEO", "Social Media Marketing", "Google Ads", "Facebook Ads", "Content Marketing",
              "Email Marketing", "Lead Generation", "Brand Strategy", "Marketing Automation", "AI Content Creation"
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-surface border border-white/10 p-6 rounded-xl text-center hover:border-accent transition-all hover:-translate-y-1">
                  <Megaphone className="h-8 w-8 text-accent mx-auto mb-4" />
                  <p className="font-medium text-sm">{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* AI Features & Platforms */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <FadeIn>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BrainCircuit className="text-accent" /> AI Marketing Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Search, title: "Keyword Research" },
                  { icon: Palette, title: "AI Content Writing" },
                  { icon: BarChart3, title: "Predictive Analytics" },
                  { icon: Users, title: "Customer Segmentation" },
                  { icon: Target, title: "Campaign Optimization" },
                  { icon: Bot, title: "Chatbots" },
                  { icon: LayoutDashboard, title: "Marketing Automation" },
                  { icon: BarChart3, title: "Performance Reports" }
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
                <TrendingUp className="text-accent" /> Platforms We Master
              </h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Google", "Facebook", "Instagram", "LinkedIn", "YouTube", 
                  "X (Twitter)", "TikTok", "Pinterest"
                ].map((plat, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    {plat}
                  </span>
                ))}
              </div>
              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <h3 className="font-bold text-lg mb-2">ROI Focused Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Our AI marketing engine continuously monitors performance, optimizes bids, and refines targeting to ensure every dollar you spend works harder for your business.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/ai-digital-marketing")({
  component: ServicePage,
});
