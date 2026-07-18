import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { CheckCircle2, Workflow, Zap, BarChart3, Clock, Target, Cpu, BrainCircuit } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <GradientText className="text-sm font-bold uppercase tracking-widest">
              AI Solutions
            </GradientText>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8">
              Business Process Automation with AI
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Automate repetitive workflows using Artificial Intelligence and Robotic Process Automation (RPA). 
              Reduce manual effort, eliminate human errors, and accelerate business operations to drive 
              unprecedented efficiency across your entire organization.
            </p>
            <div className="mt-12">
              <CTAButton to="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Automation Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Workflow Automation", "Email Automation", "Invoice Processing",
              "Document Automation", "Employee Onboarding", "Approval Workflows",
              "CRM Automation", "Marketing Automation", "Data Entry Automation", "Business Intelligence"
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <GlassCard className="p-6 h-full flex items-center gap-4">
                  <Workflow className="h-6 w-6 text-accent shrink-0" />
                  <p className="font-semibold">{item}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Benefits & Tech Stack */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn>
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="text-accent" /> Why Automate?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Clock, title: "Save Significant Time" },
                  { icon: Zap, title: "Drastically Reduce Operational Costs" },
                  { icon: Target, title: "Increase Operational Accuracy" },
                  { icon: BarChart3, title: "Boost Overall Productivity" },
                  { icon: Zap, title: "Enable 24/7 Operations" },
                  { icon: BrainCircuit, title: "Faster Decision Making" }
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{benefit.title}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="text-accent" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python", "UiPath", "Power Automate", "Zapier", "n8n",
                  "OpenAI", "FastAPI", "OCR", "TensorFlow"
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                  <h3 className="font-bold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground text-sm">We don't just script tasks; we engineer intelligent automation ecosystems. Our approach ensures seamless integration, robust error handling, and scalability as your business grows.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/ai-automation")({
  component: ServicePage,
});
