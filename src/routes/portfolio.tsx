import { createFileRoute, Link } from "@tanstack/react-router";
import { FC, useState } from "react";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Briefcase,
  Clock,
  Zap,
  Smartphone,
  Cloud,
  Heart,
  Brain,
  Lightbulb,
  Globe,
  Rocket,
  ShieldCheck,
  Sparkles,
  Network,
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

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portfolio | DOVIX",
      },
      {
        name: "description",
        content:
          "Explore DOVIX's portfolio of innovative software, AI, cloud, mobile and enterprise solutions built for startups and global businesses.",
      },
    ],
  }),
  component: Portfolio,
});

interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  rating: number;
  users: string;
  timeline: string;
  industry: string;
}

const projects: Project[] = [
  {
    category: "Web Development",
    title: "Enterprise E-Commerce Platform",
    description:
      "Modern AI powered e-commerce ecosystem featuring advanced inventory management, personalized shopping experiences, analytics dashboard and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "AWS",
    ],
    link: "/contact",
    rating: 4.9,
    users: "150K+",
    timeline: "8 Months",
    industry: "Retail",
  },

  {
    category: "AI Solutions",
    title: "AI Business Assistant",
    description:
      "Enterprise AI assistant capable of automating customer support, sales, documentation and workflow management using Large Language Models.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI",
      "React",
      "LangChain",
    ],
    link: "/contact",
    rating: 5,
    users: "80K+",
    timeline: "5 Months",
    industry: "Artificial Intelligence",
  },

  {
    category: "Cloud Solutions",
    title: "Cloud ERP Platform",
    description:
      "Enterprise resource planning solution with multi-tenant architecture, analytics dashboard and secure cloud deployment.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
    techStack: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    link: "/contact",
    rating: 4.8,
    users: "20K+",
    timeline: "12 Months",
    industry: "Enterprise",
  },

  {
    category: "Mobile App",
    title: "Healthcare Mobile Platform",
    description:
      "Cross platform healthcare ecosystem with appointment booking, telemedicine, patient monitoring and AI recommendations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
    techStack: [
      "Flutter",
      "Firebase",
      "Node",
      "MongoDB",
    ],
    link: "/contact",
    rating: 4.8,
    users: "500K+",
    timeline: "7 Months",
    industry: "Healthcare",
  },

  {
    category: "IoT Solutions",
    title: "Smart City Dashboard",
    description:
      "IoT powered smart city monitoring platform providing real-time traffic, energy and environmental analytics.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900",
    techStack: [
      "Node",
      "AWS",
      "MQTT",
      "React",
    ],
    link: "/contact",
    rating: 4.7,
    users: "2M+",
    timeline: "11 Months",
    industry: "Government",
  },

  {
    category: "Cyber Security",
    title: "SOC Security Platform",
    description:
      "AI powered cybersecurity monitoring platform for enterprise security operations with real-time threat detection.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    techStack: [
      "Python",
      "React",
      "Elastic",
      "Docker",
    ],
    link: "/contact",
    rating: 5,
    users: "50K+",
    timeline: "9 Months",
    industry: "Cyber Security",
  },
];

interface Tech {
  name: string;
  image: string;
}

const technologies: Tech[] = [
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  {
    name: "Django",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },

  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  {
    name: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  {
    name: "OpenAI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },

  {
    name: "TensorFlow",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (item) => item.category === activeCategory
      );

  const categories = [
    "All",
    "Web Development",
    "AI Solutions",
    "Cloud Solutions",
    "Mobile App",
    "IoT Solutions",
    "Cyber Security",
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Globe className="w-5 h-5" />;

      case "AI Solutions":
        return <Brain className="w-5 h-5" />;

      case "Cloud Solutions":
        return <Cloud className="w-5 h-5" />;

      case "Mobile App":
        return <Smartphone className="w-5 h-5" />;

      case "IoT Solutions":
        return <Lightbulb className="w-5 h-5" />;

      case "Cyber Security":
        return <ShieldCheck className="w-5 h-5" />;

      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-background">
        <PageHero
          eyebrow="Portfolio"
          title={<>Building <GradientText>Digital Excellence</GradientText></>}
          subtitle="Explore our portfolio of enterprise software, AI-powered platforms, cloud infrastructure, mobile applications, cybersecurity solutions, and digital transformation projects delivered for startups, enterprises and global businesses."
        >
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                icon: Sparkles,
                title: "AI First",
                desc: "Modern Artificial Intelligence solutions that automate workflows and improve business efficiency."
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Ready",
                desc: "Scalable architecture designed for startups, SMEs and enterprise organizations."
              },
              {
                icon: Rocket,
                title: "Future Focused",
                desc: "Cloud-native applications engineered with modern technologies and security standards."
              }
            ].map((item) => (
              <FadeIn key={item.title}>
                <GlassCard className="hover:border-accent/50 transition-all duration-500 h-50 ">
                  <item.icon className="w-10 h-10 text-accent " />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </PageHero>
      </div>

      {/* ================= COMPANY STATS ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            ["150+", "Projects"],
            ["98%", "Success"],
            ["60+", "Experts"],
            ["35+", "Countries"],
            ["24/7", "Support"],
            ["12+", "Industries"],
          ].map(([number, label]) => (
            <FadeIn key={label}>
              <Stat value={number} label={label} />
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

      {/* ================= PROJECT GRID STARTS ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12 ">
        <div className="text-center w-full mb-6">
          <SectionHeading
            eyebrow="Our Work"
            title={<>Featured <GradientText>Projects</GradientText></>}
            subtitle="Every project represents our commitment to innovation, scalability, security and exceptional user experience."
            align="center"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <FadeIn key={project.title} className="flex h-full">
                <GlassCard className="group overflow-hidden flex flex-col h-full hover:border-accent/50 transition-all duration-500 w-full">
                  {/* ================= IMAGE ================= */}
                  <div className="relative aspect-4/3 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-accent/10 p-2 text-accent">
                          {getCategoryIcon(project.category)}
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-bold">{project.rating}</span>
                      </div>
                    </div>
                    
                    {/* Content area that grows to fill space */}
                    <div className="flex flex-col flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                        {project.description}
                      </p>

                      {/* ================= PROJECT INFO ================= */}
                      <div className="mt-auto">
                        <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/5 bg-white/5 p-3 mb-6">
                          <div className="text-center">
                            <Briefcase className="mx-auto h-4 w-4 text-accent mb-1" />
                            <p className="text-[10px] text-muted-foreground uppercase">Industry</p>
                            <h4 className="text-xs font-bold">{project.industry}</h4>
                          </div>
                          <div className="text-center">
                            <Users className="mx-auto h-4 w-4 text-accent mb-1" />
                            <p className="text-[10px] text-muted-foreground uppercase">Users</p>
                            <h4 className="text-xs font-bold">{project.users}</h4>
                          </div>
                          <div className="text-center">
                            <Clock className="mx-auto h-4 w-4 text-accent mb-1" />
                            <p className="text-[10px] text-muted-foreground uppercase">Timeline</p>
                            <h4 className="text-xs font-bold">{project.timeline}</h4>
                          </div>
                          <div className="text-center">
                              <Star className="mx-auto h-4 w-4 text-accent mb-1"/>
                              <p className="text-[10px] text-muted-foreground uppercase">Rating</p>
                              <h4 className="text-xs font-bold">{project.rating}</h4>
                          </div>
                        </div>

                        {/* ================= TECH STACK ================= */}
                        <div className="mb-6">
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ================= BUTTON ================= */}
                        <Link
                          to={project.link}
                          className="flex w-full items-center justify-center rounded-xl bg-accent py-3 text-sm font-bold text-background transition duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]"
                        >
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/5 py-20 text-center">
              <h3 className="text-2xl font-bold text-muted-foreground">
                No Projects Found
              </h3>
              <p className="mt-2 text-muted-foreground">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* ================= TECHNOLOGIES SECTION ================= */}
      <Section className="bg-surface/20 relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="text-center mb-16">
          <SectionHeading eyebrow="Our Tech Stack" title={<>Mastering Modern <GradientText>Technologies</GradientText></>} subtitle="We use the latest, most reliable technologies to build scalable, secure and future-ready software solutions." align="center" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <FadeIn key={tech.name}>
              <GlassCard className="p-8 text-center group hover:border-accent/50 transition-all duration-500">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-14 h-14 mx-auto object-contain transition duration-500 group-hover:scale-110"
                />
                <h3 className="mt-6 font-bold text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </h3>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= WHY DOVIX ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12" >
        <div className="grid  xl:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title={<>We Build <GradientText>Beyond Expectations</GradientText></>}
              subtitle="DOVIX combines innovation, engineering excellence, AI capabilities and modern architecture to deliver software that creates measurable business value."
            />
            <div className="mt-12  space-y-6 ">
              {[
                {
                  icon: Rocket,
                  title: "Fast Delivery",
                  desc: "Agile development process ensuring quick project execution with uncompromised quality."
                },
                {
                  icon: Brain,
                  title: "AI Driven",
                  desc: "Artificial Intelligence integrated into products for automation and smarter decision making."
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  desc: "Modern security standards, encrypted architecture and enterprise-grade protection."
                },
                {
                  icon: Globe,
                  title: "Global Scale",
                  desc: "Solutions designed for startups, enterprises and international businesses."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex  gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative">
              <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[120px]" />
              <GlassCard className="relative p-8 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-1  gap-6">
                  {[
                    { icon: Zap, t: "10x", s: "Faster releases" },
                    { icon: ShieldCheck, t: "0", s: "Production incidents" },
                    { icon: Network, t: "60%", s: "OPEX reduction" },
                    { icon: Brain, t: "24/7", s: "Agent operations" },
                  ].map((m) => (
                    <div key={m.s} className="flex   items-center gap-5 p-5 rounded-2xl border border-white/5">
                      <m.icon className="h-6 w-6 text-accent" />
                      <div>
                        <div className="font-display text-2xl font-bold text-gradient">{m.t}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{m.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ================= CLIENT BENEFITS ================= */}
      <Section className="bg-surface/20 relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Business Impact"
              title={<>Why Businesses <GradientText>Trust DOVIX</GradientText></>}
              subtitle="Every solution we build focuses on innovation, performance, security, scalability and measurable business growth."
            />
            <div className="mt-12 grid md:grid-cols-2  gap-2  space-y-2">
              {[
                "AI Powered Automation",
                "Cloud Native Architecture",
                "Enterprise Grade Security",
                "Scalable Infrastructure",
                "Dedicated Development Team",
                "24/7 Technical Support"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-2 h-full shadow-sm"
                >
                  <CheckCircle className="h-7 w-7 text-accent shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GlassCard className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-10 text-center">Our Core Strengths</h3>
              <div className="space-y-8">
                {[
                  { label: "Performance", value: "99.9% Uptime" },
                  { label: "Scalability", value: "Auto-scaling" },
                  { label: "Security", value: "Enterprise-ready" },
                  { label: "Support", value: "24/7 Dedicated" },
                ].map((item) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                      <span className="font-bold text-accent">{item.value}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>

      {/* ================= CLIENT SUCCESS ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Proven Results"
            title={<>Delivering <GradientText>Measurable Results</GradientText></>}
            subtitle="Our commitment goes beyond software development. We build digital products that accelerate growth, improve efficiency and maximize business value."
            align="center"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "150+", label: "Successful Projects" },
            { value: "35+", label: "Countries Served" },
            { value: "24/7", label: "Technical Support" },
          ].map((item) => (
            <FadeIn key={item.label}>
              <GlassCard className="p-5 text-center hover:border-accent/50 transition-all duration-500">
                <h2 className="text-3xl font-black text-gradient mb-4">{item.value}</h2>
                <p className="text-lg font-semibold text-muted-foreground">{item.label}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Section className="bg-surface/20 relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Client Voices"
            title={<>What <GradientText>Clients Say</GradientText></>}
            subtitle="Real feedback from the leaders we partner with across the globe."
            align="center"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: "Michael Anderson",
              company: "CEO, FinTech Corp",
              review: "DOVIX exceeded every expectation. Their team delivered an enterprise-grade solution with exceptional quality and professionalism.",
            },
            {
              name: "Sarah Johnson",
              company: "Founder, HealthTech",
              review: "Outstanding experience from planning to deployment. Communication, design and engineering were absolutely world-class.",
            },
            {
              name: "David Wilson",
              company: "CTO, Retail Group",
              review: "Highly recommended. DOVIX transformed our business with AI automation and scalable cloud architecture.",
            },
          ].map((client) => (
            <FadeIn key={client.name}>
              <GlassCard className="p-8 h-full flex flex-col border-white/5 hover:border-accent/30 transition-all">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed grow">"{client.review}"</p>
                <div className="mt-8">
                  <h4 className="font-bold text-xl">{client.name}</h4>
                  <p className="text-accent font-medium mt-2">{client.company}</p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section className="relative overflow-hidden  pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="absolute inset-0 -z-10">
          <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[120px]" />
          <GlowOrb className="top-0 right-0 w-1/2 h-1/2 bg-accent-2/10 blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <Eyebrow>Ready to Transform?</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-black mt-8 mb-6">
              Let's Build <GradientText>Your Future</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Whether you're launching a startup, modernizing enterprise systems or building AI-powered platforms, DOVIX is your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <CTAButton to="/contact">Start Your Project</CTAButton>
              <CTAButton to="/services" variant="ghost">Explore Services</CTAButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

export default Portfolio;
