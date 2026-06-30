import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import {
  ArrowRight, Star, Users, Briefcase, Clock, Globe,
  Smartphone, Cloud, Brain, ShieldCheck, Zap, Sparkles,
  Rocket, CheckCircle,
} from "lucide-react";
import {
  Section, SectionHeading, FadeIn, CTAButton, GlassCard, Stat, GlowOrb, Eyebrow,
} from "../components/site/primitives";
import { NeuralBackground } from "../components/site/NeuralBackground";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | DOVIX AI" },
      { name: "description", content: "Explore DOVIX engineering projects including AI platforms, enterprise software, cloud solutions, and autonomous systems." },
    ],
  }),
  component: Projects,
});

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  industry: string;
  rating: number;
  users: string;
  timeline: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Enterprise Commerce Platform",
    description: "AI-powered commerce platform supporting global customers with intelligent recommendations, inventory automation and secure payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    category: "Web Development",
    industry: "Retail",
    rating: 4.9,
    users: "150K+",
    timeline: "8 Months",
    link: "/contact",
  },
  {
    title: "Healthcare Intelligence System",
    description: "Modern healthcare ecosystem with patient management, AI diagnosis support, telemedicine and cloud-based medical records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
    category: "Healthcare",
    industry: "Healthcare",
    rating: 5,
    users: "80K+",
    timeline: "11 Months",
    link: "/contact",
  },
  {
    title: "AI Business Assistant",
    description: "Enterprise AI assistant automating customer support, workflow management, document generation and business intelligence.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    category: "Artificial Intelligence",
    industry: "Enterprise",
    rating: 4.9,
    users: "200K+",
    timeline: "6 Months",
    link: "/contact",
  },
  {
    title: "Cloud ERP Platform",
    description: "Scalable cloud-native ERP platform providing finance, HR, inventory and analytics for growing businesses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
    category: "Cloud Solutions",
    industry: "Enterprise",
    rating: 4.8,
    users: "35K+",
    timeline: "12 Months",
    link: "/contact",
  },
  {
    title: "Cyber Security Operations",
    description: "Enterprise SOC platform providing AI-powered monitoring, threat detection and security automation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    category: "Cyber Security",
    industry: "Security",
    rating: 5,
    users: "50K+",
    timeline: "9 Months",
    link: "/contact",
  },
  {
    title: "Smart City IoT Platform",
    description: "Real-time IoT ecosystem for monitoring transportation, energy usage and environmental conditions.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900",
    category: "IoT",
    industry: "Government",
    rating: 4.8,
    users: "2M+",
    timeline: "14 Months",
    link: "/contact",
  },
];

const categories = [
  "All",
  "Web Development",
  "Artificial Intelligence",
  "Healthcare",
  "Cloud Solutions",
  "Cyber Security",
  "IoT",
];

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (item) => item.category === activeCategory
      );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <NeuralBackground />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,transparent_30%,var(--background)_85%)]" />
        </div>
        
        <div className="mx-auto w-full max-w-325 px-6 text-center">
          <FadeIn>
            <Eyebrow>Engineering Innovation</Eyebrow>
            <h1 className="relative mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering <span className="text-gradient">Innovation</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Discover how DOVIX transforms ambitious ideas into enterprise-grade digital products.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "border border-white/10 bg-white/5 hover:border-accent/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* PROJECTS GRID */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.05}>
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden">
                <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <Eyebrow>{project.category}</Eyebrow>
                  <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                     <span className="text-xs text-muted-foreground">Timeline: {project.timeline}</span>
                     <Link to={project.link} className="text-accent hover:text-accent/80 transition">View Details</Link>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};
