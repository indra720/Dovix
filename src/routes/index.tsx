import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import trust from "../assets/trustedimg.png";
import { MdOutlinePerson2 } from "react-icons/md";
import {
  Bot,
  Brain,
  Sparkles,
  Zap,
  Shield,
  Network,
  Code2,
  Cpu,
  Database,
  Stethoscope,
  Banknote,
  ShoppingBag,
  Factory,
  GraduationCap,
  Building2,
  Workflow,
  Eye,
  MessageSquare,
  BarChart3,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpenid,
  SiLangchain,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGoogle,
  SiTrustpilot,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { FaMicrosoft, FaAmazon, FaStar } from "react-icons/fa6";
import {
  Section,
  SectionHeading,
  FadeIn,
  CTAButton,
  GlassCard,
  Stat,
  GlowOrb,
  Eyebrow,
} from "../components/site/primitives";
import { VideoCard } from "../components/site/VideoCard";
import { NeuralBackground } from "../components/site/NeuralBackground";
// @ts-expect-error - JSX component without types
import Ferrofluid from "../components/Ferrofluid.jsx";
import { Contact } from "./contact";
import logoAsset from "@/assets/dovix-logo.asset.json";
import rightsideimg from "../assets/rightsideimg.png";
import erp from "../assets/erp.jpg";
import chat from "../assets/aichat.jpg";
import eco from "../assets/eco.jpg";
import mobile from "../assets/mobile.jpg";
import real from "../assets/real.jpg";

import chatgpt from "../assets/logoIcons/openai.webp";
import pytorchLogo from "../assets/logoIcons/pytorch.webp";
import googleLogo from "../assets/logoIcons/Google.png";
import langchainLogo from "../assets/logoIcons/langchanin.jpg";
import reactLogo from "../assets/logoIcons/react2.webp";

import awsLogo from "../assets/logoIcons/aws3.png";
import azureLogo from "../assets/logoIcons/azure2-removebg-preview.png";
import clutchLogo from "../assets/logoIcons/clutch.png";
import goodfirmsLogo from "../assets/logoIcons/goodfirms.png";
import trustpilotLogo from "../assets/logoIcons/Trustpilot.png";
import { useMemo, useState, useRef } from "react";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOVIX AI — Enterprise AI, Agents & Automation" },
      {
        name: "description",
        content:
          "DOVIX AI engineers frontier AI systems, autonomous agents, LLM platforms, and enterprise automation for global organizations.",
      },
      { property: "og:title", content: "DOVIX AI — Enterprise AI & Agents" },
      {
        property: "og:description",
        content:
          "Frontier AI, autonomous agents, and enterprise automation, engineered for production.",
      },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DOVIX AI",
          url: "https://doovix-vision-forge.lovable.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://doovix-vision-forge.lovable.app/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Custom LLMs, RAG pipelines, fine-tuning, and multimodal generation engineered for production.",
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    desc: "Goal-driven AI agents with tool-use, memory, and orchestration across CrewAI, LangGraph, and MCP.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "End-to-end business process automation that compounds productivity across every department.",
  },
  {
    icon: BarChart3,
    title: "AI Marketing",
    desc: "Generative campaigns, audience modeling, SEO automation, and creative pipelines that scale revenue.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Deep learning, predictive analytics, and recommendation engines tailored to your domain.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Detection, segmentation, OCR, and visual reasoning at scale, on the edge or in the cloud.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "Multilingual voice and chat assistants powered by OpenAI, Claude, Gemini, and open models.",
  },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Banknote, name: "Finance" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Government" },
];

const stack = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "Llama",
  "DeepSeek",
  "Mistral",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "Qdrant",
  "Pinecone",
  "Weaviate",
  "PyTorch",
  "TensorFlow",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
];

function Home() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        speed: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      })),
    [],
  );

  const gridBlocks = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        span: 1 + (i % 3),
        row: 1 + (i % 2),
        delay: i * 0.15,
      })),
    [],
  );

  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description:
        "Custom AI solutions, machine learning models, deep learning, predictive analytics and more.",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Intelligent AI agents and chatbots to automate conversations, support and business workflows.",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description:
        "Process automation using AI & RPA to improve efficiency and reduce operational costs.",
    },
    {
      icon: MdBusinessCenter,
      title: "AI ERP Solutions",
      description:
        "Smart ERP systems integrated with AI for data-driven decision-making and business intelligence.",
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software development for web, desktop, enterprise and cloud platforms.",
    },
    {
      icon: Cpu,
      title: "Mobile App Development",
      description:
        "Native & cross-platform mobile apps for iOS and Android with modern technologies.",
    },
    {
      icon: AiOutlineGlobal,
      title: "Web Development",
      description: "Responsive, scalable and secure web applications using latest technologies.",
    },
    {
      icon: BarChart3,
      title: "AI Digital Marketing",
      description:
        "AI-powered marketing strategies, SEO, ads, analytics & automation to grow your brand.",
    },
  ];

  const industries = [
    { icon: Stethoscope, name: "Healthcare" },
    { icon: Banknote, name: "Finance" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Factory, name: "Manufacturing" },
    { icon: GraduationCap, name: "Education" },
    { icon: Building2, name: "Real Estate" },
    { icon: Network, name: "Logistics" },
    { icon: Zap, name: "Hospitality" },
    { icon: Shield, name: "Government" },
    { icon: Sparkles, name: "And More" },
  ];

  const whyChoose = [
    "150+ AI-Powered Software Solutions",
    "Custom-Built for Every Industry",
    "Expert Team with End-to-End Development",
    "End-to-End Commitment 100% Satisfaction",
    "Cutting Edge Technologies",
    "Domain Knowledge",
    "24/7 Support",
    "Focus",
  ];

  const projects = [
    {
      image: erp, // Replace with real images
      title: "AI-Powered ERP System",
      category: "Manufacturing",
    },
    {
      image: chat,
      title: "AI Chatbot Platform",
      category: "Healthcare",
    },
    {
      image: eco,
      title: "E-Commerce Platform",
      category: "Retail",
    },
    {
      image: mobile,
      title: "Mobile Banking App",
      category: "Finance",
    },
    {
      image: real,
      title: "Real Estate Portal",
      category: "Real Estate",
    },
  ];

  const technologies = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
    { image: pytorchLogo, name: "PyTorch" },
    { image: chatgpt, name: "OpenAI" },
    { image: langchainLogo, name: "LangChain" },
    { image: reactLogo, name: "React" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { image: awsLogo, name: "AWS" },
    { image: azureLogo, name: "Azure" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fogFlow1 {
          0% { transform: translateX(-12%) translateY(0) scaleY(0.95); }
          50% { transform: translateX(12%) translateY(-10px) scaleY(1.05); }
          100% { transform: translateX(-12%) translateY(0) scaleY(0.95); }
        }
        @keyframes fogFlow2 {
          0% { transform: translateX(12%) translateY(0) scaleY(1.05); }
          50% { transform: translateX(-12%) translateY(10px) scaleY(0.95); }
          100% { transform: translateX(12%) translateY(0) scaleY(1.05); }
        }
        @keyframes starDrift {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(15px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
        }
        .animate-fog-1 {
          animation: fogFlow1 22s ease-in-out infinite;
        }
        .animate-fog-2 {
          animation: fogFlow2 30s ease-in-out infinite;
        }
        .animate-star-node {
          animation: starDrift 8s ease-in-out infinite;
        }
      `}} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111f]">
        {/* Animated Fog Flow Layers at the bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none z-0 select-none">
          {/* Layer 1 - Cyan/Blue AI Flow */}
          <div className="absolute -bottom-24 left-[-50%] w-[200%] h-64 bg-gradient-to-r from-blue-600/10 via-[#429cb3]/15 to-transparent blur-[100px] animate-fog-1"></div>
          {/* Layer 2 - Lime/Emerald Automation Flow */}
          <div className="absolute -bottom-24 left-[-50%] w-[200%] h-64 bg-gradient-to-r from-transparent via-lime-500/10 to-emerald-400/5 blur-[110px] animate-fog-2"></div>
          
          {/* Floating Star Nodes (Rounded Data Points) */}
          <div className="absolute inset-x-0 bottom-6 h-24">
            <div className="absolute left-[10%] bottom-[20%] w-1.5 h-1.5 bg-white/40 rounded-full animate-star-node" style={{ animationDelay: '0s' }}></div>
            <div className="absolute left-[25%] bottom-[50%] w-2 h-2 bg-[#429cb3]/50 rounded-full animate-star-node" style={{ animationDelay: '1.5s', animationDuration: '10s' }}></div>
            <div className="absolute left-[40%] bottom-[30%] w-1 h-1 bg-lime-400/40 rounded-full animate-star-node" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
            <div className="absolute left-[55%] bottom-[60%] w-2 h-2 bg-white/30 rounded-full animate-star-node" style={{ animationDelay: '0.5s', animationDuration: '12s' }}></div>
            <div className="absolute left-[70%] bottom-[15%] w-1.5 h-1.5 bg-[#429cb3]/40 rounded-full animate-star-node" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
            <div className="absolute left-[85%] bottom-[45%] w-1 h-1 bg-lime-400/50 rounded-full animate-star-node" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
            <div className="absolute left-[92%] bottom-[25%] w-2 h-2 bg-white/40 rounded-full animate-star-node" style={{ animationDelay: '5.5s', animationDuration: '11s' }}></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20  lg:pt-36 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
                AI Powered | Future Ready
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-tight ">
                <span className="text-white">Intelligent Solutions.</span>

                <br />

                <span className="text-lime-400">Real-World Impact.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                DOVIX AI is a global AI, software development, ERP and digital transformation
                company helping businesses automate operations, modernize systems and accelerate
                growth through next-generation technology.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button
                  onClick={() =>
                    navigate({
                      to: "/services",
                    })
                  }
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-lime-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Explore Our Services →
                </button>

                <button
                  onClick={() =>
                    navigate({
                      to: "/contact",
                    })
                  }
                  className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Book a Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">150+</h3>
                  <p className="mt-2 text-gray-400">AI Software Solutions</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">20+</h3>
                  <p className="mt-2 text-gray-400">Industries Served</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Global</h3>
                  <p className="mt-2 text-gray-400">Clients Worldwide</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">100%</h3>
                  <p className="mt-2 text-gray-400">Customer Focus</p>
                </div>
              </div>

              {/* Service Category Buttons */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3  gap-3 w-full">
                {[
                  { label: "AI Agents", to: "/services/ai-agents" },
                  { label: "AI Automation", to: "/services/ai-automation" },
                  { label: "Enterprise Software", to: "/services/software-development" },
                  { label: "Mobile Apps", to: "/services/mobile-app-development" },
                  { label: "Web Apps", to: "/services/web-development" },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate({ to: item.to })}
                    className="cursor-pointer text-center flex items-center justify-center py-3 px-4 bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-lime-500 hover:border-transparent transition-all duration-300 w-full min-h-[50px]"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              </div>

            {/* RIGHT */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative w-full">
                <img
                  src={rightsideimg}
                  alt="Hero Feature"
                  className="w-full h-64 md:h-80 lg:h-[700px] object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Rated & Reviewed Card Overlay */}
                <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[92%] bg-slate-900/90 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-2xl">
                  <h4 className="text-sm font-bold text-center text-white uppercase tracking-wider mb-3">
                    Rated & Reviewed Globally
                  </h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
                    {/* Clutch */}
                    <div className="flex flex-col items-center text-center">
                      <img src={clutchLogo} alt="Clutch" className="h-5 object-contain mb-1" />
                      <p className="text-[10px] text-gray-300 font-medium">5.0 ⭐⭐⭐⭐⭐</p>
                    </div>

                    {/* Google */}
                    <div className="flex flex-col items-center text-center">
                      <img src={googleLogo} alt="Google" className="h-5 object-contain mb-1" />
                      <p className="text-[10px] text-gray-300 font-medium">4.4 ⭐⭐⭐⭐☆</p>
                    </div>

                    {/* DesignRush */}
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[11px] font-bold text-white tracking-tight mb-1">DesignRush</span>
                      <p className="text-[10px] text-gray-300 font-medium">5.0 ⭐⭐⭐⭐⭐</p>
                    </div>

                    {/* TopDevelopers */}
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[11px] font-bold text-white tracking-tight mb-1">TopDevelopers</span>
                      <p className="text-[10px] text-gray-300 font-medium">5.0 ⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-[#0A1428] py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              OUR{" "}
              <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
                AI-POWERED{" "}
              </span>{" "}
              SERVICES
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              End-to-end AI, software and digital solutions to transform your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link
                  key={index}
                  to={`/services/${serviceSlug}`}
                  className="group bg-[#13213A] hover:bg-[#1A2A4A] border border-white/10 hover:border-[#4A90E2]/30 rounded-2xl p-8 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="mb-6 flex justify-center items-center text-[#429cb3] w-16 h-20 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-[15px] text-center">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 grid lg:grid-cols-12 gap-8 items-stretch">
            {/* IT Consulting Card */}
            <div className="lg:col-span-4 bg-[#13213A] border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
              <div className="text-[#4A90E2]  flex justify-center text-3xl">
                <MdOutlinePerson2 size={48} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">IT Consulting</h3>
              <p className="text-slate-400 leading-relaxed text-center text-sm">
                Strategic IT consulting to help you innovate, optimize and achieve business goals.
              </p>
            </div>

            {/* Ready to Transform CTA */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#13213A] to-[#0F1B2E] border border-white/10 rounded-3xl p-8 overflow-hidden flex items-center justify-between">
              <div className="max-w-lg z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Let’s build intelligent solutions that drive growth and efficiency.
                </p>
                <button
                  onClick={() =>
                    navigate({
                      to: "/contact",
                    })
                  }
                  className="bg-gradient-to-r from-blue-600 to-lime-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:scale-105 text-sm"
                >
                  Let’s Talk
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* Decorative 3D Cubes (Right Side) */}
              <div className="hidden lg:block w-80 h-full opacity-80">
                <img src={trust} alt="AI Cubes" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTIONS — three highlights */}
      <section className="bg-[#0A1428] py-6 px-6 border-t border-white/10">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              INDUSTRIES{" "}
              <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
                WE SERVE
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Powering innovation across diverse industries.</p>
          </div>

          {/* Industries Grid / Scroll */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center bg-[#13213A] hover:bg-[#1A2A4A] border border-white/10 hover:border-[#4A90E2] p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 text-[#787fff] group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-10 w-10" />
                </div>
                <p className="text-white font-medium text-center text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE VIDEO */}
      <section className="bg-[#0A1428] py-6 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              WHY CHOOSE{" "}
              <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
                DOVIX AI?
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 group-hover:bg-emerald-500/30 transition-colors">
                    <span className="text-emerald-400 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <p className="text-white text-[17px] leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0A1428] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                OUR WORK{" "}
                <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
                  SPEAKS
                </span>
              </h2>
              <p className="text-slate-400 mt-3 text-lg">
                Delivering intelligent solutions that create real impact.
              </p>
            </div>

            <button  onClick={() =>
                    navigate({
                      to: "/projects",
                    })
                  } className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 px-8 py-3.5 rounded-2xl text-white font-semibold flex items-center gap-2 transition-all hover:scale-105">
              View All Projects
              <span>→</span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#13213A] rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="flex h-28 flex-col justify-between p-6">
                  <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-emerald-400">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY DOVIX */}
      <section className="bg-[#0A1428] py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              TECHNOLOGIES{" "}
              <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
                WE WORK WI
              </span>
              TH
            </h2>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-10 items-center justify-items-center">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center gap-3 hover:scale-110 transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform group-hover:-rotate-6 l">
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-contain filter  brightness-90 contrast-125 group-hover:brightness-110 transition-all duration-300"
                      />
                    ) : Icon ? (
                      <Icon className="w-full h-full text-[#429cb3]" />
                    ) : null}
                  </div>
                  <p className="text-slate-300 text-[10px] font-medium text-center">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#0A1428] py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-[#13213A] rounded-[2rem] p-6 md:p-8 border border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                WHAT OUR CLIENTS SAY
              </h2>

              <div className="text-3xl mb-2">💬</div>

              <p className="text-sm md:text-base leading-relaxed text-slate-300 mb-6 max-w-xl">
                DOVIX AI transformed our business with their AI solutions. Their team is
                professional, innovative and always delivers beyond expectations.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                <p className="text-emerald-400 font-semibold text-[10px]">
                  — CEO, Leading Manufacturing Company
                </p>
              </div>

              {/* Client Logos with Manual Slider */}
              <div className="w-full relative pt-8 border-t border-white/5">
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => {
                      const container = document.getElementById("client-logos");
                      if (container) container.scrollLeft -= 150;
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-emerald-500/50 flex items-center justify-center text-white transition hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    ←
                  </button>

                  <div
                    id="client-logos"
                    className="flex items-center gap-12 overflow-hidden scroll-smooth w-full max-w-lg"
                  >
                    <img
                      src={googleLogo}
                      alt="Google"
                      className="h-12 object-contain flex-shrink-0"
                    />
                    <img
                      src={clutchLogo}
                      alt="Clutch"
                      className="h-12 object-contain flex-shrink-0"
                    />
                    <img
                      src={goodfirmsLogo}
                      alt="GoodFirms"
                      className="h-12 object-contain flex-shrink-0"
                    />
                    <img
                      src={trustpilotLogo}
                      alt="Trustpilot"
                      className="h-12 object-contain flex-shrink-0"
                    />
                  </div>

                  <button
                    onClick={() => {
                      const container = document.getElementById("client-logos");
                      if (container) container.scrollLeft += 150;
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-emerald-500/50 flex items-center justify-center text-white transition hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden h-[50vh] max-w-7xl mx-auto rounded-2xl">
        {/* Gradient Background */}
        <div className="bg-gradient-to-r from-blue-600 to-lime-500 py-20 px-6 relative">
          {/* Background Network Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:30px_30px] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-10"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Build the Future Together
            </h2>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Have a project in mind? Let&apos;s turn your ideas into intelligent solutions.
            </p>

            <button
              onClick={() =>
                navigate({
                  to: "/contact",
                })
              }
              className=" text-white bg-gradient-to-r from-blue-600 to-lime-500 transition-all font-semibold text-lg px-10 py-4 rounded-2xl inline-flex items-center gap-3 group"
            >
              Get Started Today
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Unused suppression for tree-shaken icons referenced in JSX strings
void Code2;
void Database;
void BarChart3;
