import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  FadeIn,
  GlassCard,
  GradientText,
  CTAButton,
} from "../../components/site/primitives";
import { 
  Bot, BarChart3, Database, FileText, LayoutDashboard, 
  Settings, Users, Briefcase, Zap, ShieldCheck 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16 pb-20">
      <Section className="px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <GradientText className="text-sm font-bold uppercase tracking-[0.2em]">
              Enterprise Intelligent Systems
            </GradientText>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight">
              AI-Powered <span className="text-gradient">ERP Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Modern ERP software enhanced with Artificial Intelligence to streamline operations, 
              improve forecasting, automate core processes, and provide real-time business insights.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <CTAButton to="/contact">Request Demo</CTAButton>
            </div>
          </div>
        </FadeIn>

        {/* Modules Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Core ERP Modules</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "HR Management", "Payroll", "Inventory", "Sales", "CRM",
              "Accounting", "Purchase", "Manufacturing", "Project Management", "Customer Support"
            ].map((module, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-surface border border-white/10 p-4 rounded-xl text-center hover:border-accent transition-all hover:-translate-y-1">
                  <LayoutDashboard className="h-6 w-6 text-accent mx-auto mb-3" />
                  <p className="font-medium text-sm">{module}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* AI Features & Industries */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <FadeIn>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Bot className="text-accent" /> AI-Driven Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Demand Forecasting", "Inventory Prediction", "Smart Reports",
                  "Chat Assistant", "Document Analysis", "Predictive Analytics",
                  "Fraud Detection", "Automated Approval"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-white/5">
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <GlassCard className="p-10 h-full">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-accent" /> Industries Served
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Manufacturing", "Education", "Healthcare", "Retail", 
                  "Construction", "Finance", "Real Estate", "Hospitality"
                ].map((ind, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                    {ind}
                  </span>
                ))}
              </div>
              <div className="mt-10 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <ShieldCheck className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Enterprise Grade</h3>
                <p className="text-sm text-muted-foreground">Built for security, scalability, and seamless integration with your existing infrastructure.</p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/services/ai-erp-solutions")({
  component: ServicePage,
});
