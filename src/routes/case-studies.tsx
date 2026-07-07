import { createFileRoute, Link } from "@tanstack/react-router";
import { FC, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Award,
  Target,
  Globe,
  Clock,
  TrendingUp,
  Building,
  ShieldCheck,
  Sparkles,
  Rocket,
  CheckCircle,
  Brain,
} from "lucide-react";
import {
  Section,
  SectionHeading,
  FadeIn,
  CTAButton,
  GlassCard,
  Stat,
  GlowOrb,
  Eyebrow,
  PageHero,
  GradientText,
} from "../components/site/primitives";
import { NeuralBackground } from "../components/site/NeuralBackground";

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  image: string;
  featured: boolean;
  metrics: [string, string][];
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI Commerce Transformation",
    industry: "Retail & Ecommerce",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    challenge:
      "Traditional ecommerce platforms suffered from poor customer engagement, low conversion rates and inefficient inventory management.",
    metrics: [
      ["320%", "Revenue Growth"],
      ["+82%", "Conversion Rate"],
      ["96%", "Customer Satisfaction"],
      ["-65%", "Operational Cost"],
    ],
  },
  {
    title: "Healthcare Intelligence Platform",
    industry: "Healthcare",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
    challenge:
      "Hospitals required AI-assisted diagnostics, centralized patient management and secure healthcare infrastructure.",
    metrics: [
      ["+45%", "Diagnosis Speed"],
      ["99.8%", "Accuracy"],
      ["$6M", "Annual Savings"],
      ["+37%", "Patient Care"],
    ],
  },
  {
    title: "Enterprise Cloud Migration",
    industry: "Cloud Solutions",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    challenge:
      "Legacy infrastructure created high operational costs and poor scalability for enterprise applications.",
    metrics: [
      ["99.99%", "Availability"],
      ["65%", "Infrastructure Savings"],
      ["90%", "Deployment Speed"],
      ["15+", "Countries"],
    ],
  },
  {
    title: "AI Banking Platform",
    industry: "Finance",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
    challenge:
      "Modern banking demanded secure digital experiences, fraud prevention and intelligent financial automation.",
    metrics: [
      ["99.9%", "Fraud Detection"],
      ["10X", "Processing Speed"],
      ["+70%", "Digital Adoption"],
      ["40%", "Operational Savings"],
    ],
  },
  {
    title: "Smart Manufacturing System",
    industry: "Manufacturing",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200",
    challenge:
      "Manufacturers needed predictive maintenance, automation and real-time production monitoring.",
    metrics: [
      ["+52%", "Productivity"],
      ["-38%", "Downtime"],
      ["97%", "Efficiency"],
      ["$12M", "Annual Savings"],
    ],
  },
  {
    title: "Government Digital Platform",
    industry: "Public Sector",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
    challenge:
      "Government agencies required secure citizen services, cloud infrastructure and AI-enabled automation.",
    metrics: [
      ["1.5M+", "Citizens Served"],
      ["24/7", "Availability"],
      ["+90%", "Efficiency"],
      ["99.99%", "Security"],
    ],
  },
];

const categories = [
  "All",
  "Retail & Ecommerce",
  "Healthcare",
  "Cloud Solutions",
  "Finance",
  "Manufacturing",
  "Public Sector",
];

const CaseStudies: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter(
        (item) => item.industry === activeCategory
      );

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-background">
        <NeuralBackground />
        <PageHero
          eyebrow="Success Stories"
          title={<>Real <GradientText>Business Impact</GradientText></>}
          subtitle="Explore how DOVIX has transformed businesses across Healthcare, Finance, AI, Cloud, Manufacturing and Enterprise Software through innovative technology and measurable digital outcomes."
        >
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Success",
                desc: "Every project is backed by measurable business impact and client satisfaction.",
              },
              {
                icon: Sparkles,
                title: "Innovation First",
                desc: "AI-powered solutions designed for scalability, security and long-term growth.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Quality",
                desc: "Built using modern technologies with enterprise-grade architecture.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <GlassCard className="hover:border-accent/50 transition-all duration-500">
                  <item.icon className="h-10 w-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </PageHero>
      </div>

      {/* ================= SUCCESS STATS ================= */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Projects Delivered", icon: <Award className="h-8 w-8 text-accent" /> },
            { value: "98%", label: "Client Satisfaction", icon: <Target className="h-8 w-8 text-accent" /> },
            { value: "50+", label: "Enterprise Clients", icon: <Users className="h-8 w-8 text-accent" /> },
            { value: "35+", label: "Countries Served", icon: <Globe className="h-8 w-8 text-accent" /> },
          ].map((item) => (
            <FadeIn key={item.label}>
              <Stat value={item.value} label={item.label} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= CATEGORY FILTER ================= */}
      <Section className="bg-surface/30 relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-accent text-background border-accent shadow-lg shadow-accent/20"
                  : "bg-white/5 border-white/10 text-foreground hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* ================= CASE STUDIES ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Showcase"
            title={<>Business <GradientText>Transformation</GradientText></>}
            subtitle="Every success story demonstrates how technology, strategy and innovation combine to create measurable business outcomes."
            align="center"
          />
        </div>

        <div className="space-y-12">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((study) => (
              <FadeIn key={study.title}>
                <GlassCard className="group overflow-hidden p-0 border-white/10">
                  <div className="grid lg:grid-cols-2">
                    {/* ================= IMAGE ================= */}
                    <div className="relative h-64 lg:h-full min-h-75 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                      {study.featured && (
                        <div className="absolute left-6 top-6">
                          <span className="rounded-full bg-accent px-2 md:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-background shadow-lg">
                            ⭐ Featured Case Study
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6">
                        <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/20">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="flex flex-col justify-between  lg:p-12">
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-foreground">{study.title}</h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{study.challenge}</p>
                      </div>

                      {/* ================= RESULTS ================= */}
                      <div className="mt-10">
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Key Impact Metrics</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {study.metrics.map(([value, label]) => (
                            <div key={label} className="rounded-2xl bg-accent/5 border border-accent/10 p-4 text-center w-auto">
                              <h4 className="text-2xl font-black text-gradient">{value}</h4>
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-tight">{label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ================= ACTIONS ================= */}
                      <div className="mt-10 flex flex-wrap gap-4">
                        <Link to="/contact" className="flex items-center rounded-xl bg-accent px-3 md:px-6 py-3 font-bold text-background transition hover:scale-105">
                          Start Similar Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <button className="flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-foreground backdrop-blur hover:bg-white/10 transition">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 py-24 text-center">
              <Brain className="mx-auto h-16 w-16 text-muted-foreground/50" />
              <h2 className="mt-8 text-2xl font-bold text-muted-foreground">No Case Studies Found</h2>
              <p className="mt-2 text-muted-foreground">Try selecting another category to explore more stories.</p>
            </div>
          )}
        </div>
      </Section>

      {/* ================= WHY DOVIX ================= */}
      <Section className="bg-surface/30 relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="The DOVIX Advantage"
            title="We Deliver More Than Software"
            subtitle="Every engagement focuses on measurable business outcomes, modern engineering and long-term digital transformation."
            align="center"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 h-full">
          {[
            { title: "Business Growth", desc: "Solutions designed to accelerate revenue and operational efficiency.", icon: <TrendingUp className="h-8 w-8" /> },
            { title: "Enterprise Quality", desc: "Scalable architecture following industry best practices.", icon: <Building className="h-8 w-8" /> },
            { title: "AI Innovation", desc: "AI integrated into products for smarter automation.", icon: <Brain className="h-8 w-8" /> },
            { title: "Trusted Security", desc: "Enterprise-grade security ensuring privacy and compliance.", icon: <ShieldCheck className="h-8 w-8" /> },
          ].map((item) => (
            <FadeIn key={item.title}>
              <GlassCard className="p-8 hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="relative rounded-3xl overflow-hidden p-3 md:p-12 text-center bg-linear-to-br from-accent/20 to-accent-2/20 border border-accent/20">
          <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl  font-black mb-6">Ready to Create <GradientText>Your Success Story?</GradientText></h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">Whether you're planning an AI platform, enterprise application, or cloud solution, DOVIX is ready to bring your vision to life.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton to="/contact">Start Your Project</CTAButton>
              <CTAButton to="/services" variant="ghost">Explore Services</CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      {
        title: "Case Studies | DOVIX",
      },
      {
        name: "description",
        content:
          "Explore real-world success stories delivered by DOVIX across Artificial Intelligence, Cloud, Enterprise Software, Healthcare, Finance and Digital Transformation.",
      },
    ],
  }),
  component: CaseStudies,
});
