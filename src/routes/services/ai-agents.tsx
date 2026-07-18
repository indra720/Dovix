import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { CheckCircle2, Bot, BrainCircuit, ShieldCheck, Zap } from "lucide-react";

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
              Intelligent AI Agents for Every Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deploy AI Agents capable of handling customer support, sales, HR, internal operations, and business workflows. 
              Our AI Agents work 24/7 to automate repetitive tasks while improving efficiency, 
              reducing operational costs, and boosting customer satisfaction.
            </p>
            <div className="mt-12">
              <CTAButton to="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Solutions Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Agents</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Customer Support Agent", "Sales Assistant", "HR Agent",
              "Healthcare Agent", "Finance Agent", "Legal Assistant",
              "Research Agent", "Knowledge Base Agent", "Email Automation Agent", "Voice AI Agent"
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <GlassCard className="p-6 h-full flex items-center gap-4">
                  <Bot className="h-6 w-6 text-accent shrink-0" />
                  <p className="font-semibold">{item}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Features & Tech Stack */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn>
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BrainCircuit className="text-accent" /> Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Multi-language Support", "Long-term Memory", "Deep Document Understanding",
                  "CRM & ERP Integration", "Omnichannel (WhatsApp/Slack/Email)", "Voice-enabled Capabilities",
                  "Knowledge Retrieval (RAG)", "LLM Powered Intelligence", "Actionable Workflow Orchestration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-accent" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "OpenAI", "Claude", "Gemini", "LangGraph", "CrewAI", "AutoGen",
                  "Pinecone", "ChromaDB", "FastAPI", "Python"
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                  <h3 className="font-bold mb-2">Why DOVIX Agents?</h3>
                  <p className="text-muted-foreground text-sm">Our agents are built with rigorous safety guardrails, continuous monitoring, and specialized training to ensure they act as reliable, brand-aligned members of your team.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/ai-agents")({
  component: ServicePage,
});
