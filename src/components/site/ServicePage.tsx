import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { CheckCircle2 } from "lucide-react";

export function createServiceRoute(title: string, description: string, features: string[]) {
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
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="mt-12">
                <CTAButton to="/contact">Book a Consultation</CTAButton>
              </div>
            </div>
          </FadeIn>

          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-lg font-medium">{feature}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>
    );
  };

  return ServicePage;
}
