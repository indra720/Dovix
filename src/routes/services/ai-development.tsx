import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { CheckCircle2, Brain, Zap, BarChart3, Users, Shield, Cpu } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <GradientText className="text-sm font-bold uppercase tracking-widest">
              Our Services
            </GradientText>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8">
              Custom AI Development Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your business with intelligent AI solutions tailored to your unique requirements. 
              We build custom Artificial Intelligence solutions that help businesses automate operations, 
              analyze data, improve customer experiences, and make smarter decisions.
            </p>
            <div className="mt-12">
              <CTAButton to="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services List */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Custom AI Solutions", "Machine Learning Models", "Deep Learning Applications",
            "Computer Vision", "Natural Language Processing (NLP)", "Generative AI",
            "Predictive Analytics", "Recommendation Systems", "AI Integration", "AI Consulting"
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <GlassCard className="p-6 h-full flex items-center gap-4">
                <Brain className="h-6 w-6 text-accent shrink-0" />
                <p className="font-semibold">{item}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Improve Productivity" },
              { icon: BarChart3, title: "Reduce Operational Costs" },
              { icon: Brain, title: "Better Business Decisions" },
              { icon: Users, title: "Personalized Customer Experience" },
              { icon: Cpu, title: "Intelligent Automation" },
              { icon: BarChart3, title: "Real-Time Insights" },
            ].map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard className="p-6 text-center">
                  <benefit.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/ai-development")({
  component: ServicePage,
});
