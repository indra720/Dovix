import { createFileRoute } from "@tanstack/react-router";
import React, { FC } from "react";
import {
  Section,
  SectionHeading,
  FadeIn,
  GlassCard,
  Stat,
  GlowOrb,
  PageHero,
  CTAButton,
  GradientText,
  Eyebrow
} from "../components/site/primitives";
import { ArrowRight, CheckCircle2, Instagram, Linkedin, Twitter } from "lucide-react";

import mohpng from "../assets/MohPng.jpeg"
import second from "../assets/Secondpng.jpeg"
import third from "../assets/Dnew.jpeg"
import fourth from "../assets/fourthpng.png"

import inder from "../assets/inder.png"

const teamMembers = [
  {
    name: "Indrajeet",
    role: "Frontend Developer",
    description:
      "Experienced frontend engineer passionate about modern UI development.",
    imgSrc: inder,
    imgAlt: "Team Member",
    navigationPath: "/team-member-1",
    skills: ["React","Javascript", "TypeScript", "Tailwind","Html","Css","Git/Github"],
  },
  {
    name: "Team Member 2",
    role: "Senior Backend Developer",
    description:
      "Backend specialist with expertise in scalable enterprise applications.",
    imgSrc: "./team2.jpg",
    imgAlt: "Team Member",
    navigationPath: "/team-member-2",
    skills: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    name: "Team Member 3",
    role: "UI / UX Designer",
    description:
      "Creative designer focused on premium user experiences and branding.",
    imgSrc: "./team3.jpg",
    imgAlt: "Team Member",
    navigationPath: "/team-member-3",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
  {
    name: "Team Member 4",
    role: "Project Manager",
    description:
      "Leading cross-functional teams to deliver quality software solutions.",
    imgSrc: "./team4.jpg",
    imgAlt: "Team Member",
    navigationPath: "/team-member-4",
    skills: ["Leadership", "Agile", "Scrum", "Management"],
  },
];


const founders = [

  {
    name: "Abhay Ranjan",
    role: "Founder",
    experience: "15+ Years Experience  in Digital Marketing  & Growth market",
    image: second,
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/theabhayranjan/",
    instagram: "#",
  },
  {
    name: "Ajeet Singh",
    role: "Founder",
    experience: "14+ Years Experience as Chief Technical Officer",
    image: fourth,
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/ajit-singh-456785222/",
    instagram: "#",
  },
  {
    name: "Mohan Shekhawat",
    role: "Founder",
    experience: "18+ Years Experience as Realtor",
    image: mohpng,
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Deepak Sharma",
    role: "Founder",
    experience: "15+ Years Experience  in Business Investment & Verticals",
    image: third,
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
];

const About: FC = () => {
  return (
    <div className="min-h-screen mt-6 bg-background text-foreground">
      {/* ================= HERO SECTION ================= */}
      <PageHero
        eyebrow="Welcome To Dovix"
        title={<>About <GradientText>DOVIX</GradientText></>}
        subtitle="Dovix is a modern software company focused on delivering world-class digital solutions, AI-powered products, scalable applications and next-generation technologies that help businesses grow faster."
      >
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {[
            {
              title: "Our Mission",
              text: "Deliver secure, scalable and innovative software solutions that transform businesses worldwide.",
            },
            {
              title: "Our Vision",
              text: "Become one of the world's most trusted technology companies through innovation and excellence.",
            },
            {
              title: "Core Values",
              text: "Innovation • Quality • Integrity • Customer Success • Collaboration",
            },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="text-center p-8 h-full">
                <h2 className="text-2xl font-bold text-accent mb-4">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </PageHero>

      {/* ================= LEADERSHIP SECTION ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <GlowOrb className="absolute top-1/2 -left-20 -z-10 h-125 w-auto  bg-(--accent-2)/10" />
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <FadeIn className="h-full">
            <div className="grid md:grid-cols-2 gap-6 h-full">

              {founders.map((person) => (

                <div
                  key={person.name}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-xl transition duration-500 hover:-translate-y-2 flex flex-col h-full"
                >

                  <div className="mx-auto mt-5 h-50 w-52 overflow-hidden rounded-full border-4 border-cyan-500/30 shadow-xl shrink-0">

                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-5 text-center flex flex-col grow justify-between">

                    <div>
                      <h3 className="text-xl font-bold">

                        {person.name}

                      </h3>

                      <div className="mt-2">

                        <p className="text-accent font-semibold">

                          {person.role}

                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">

                          {person.experience}

                        </p>

                      </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-4">

                      <a
                        href={person.twitter} target="_blank"
                        className="rounded-full border border-white/10 p-2 transition hover:bg-sky-500 hover:text-white"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>

                      <a
                        href={person.linkedin} target="_blank"
                        className="rounded-full border border-white/10 p-2 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>

                      <a
                        href={person.instagram} target="_blank"
                        className="rounded-full border border-white/10 p-2 transition hover:bg-pink-500 hover:text-white"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <Eyebrow>Leadership • Innovation • Growth</Eyebrow>
                <blockquote className="text-md sm:text-2xl  font-light italic leading-relaxed border-l-4 border-accent pl-6 text-foreground/80 mt-8">
                  “Technology isn't just about writing software — it's about creating opportunities, solving real-world problems and empowering people.”
                </blockquote>
                <h2 className="mt-10 text-3xl font-bold italic">
                  <GradientText>Your Founders</GradientText>
                </h2>
                <p className="text-xl font-semibold text-muted-foreground mt-3">
                  Founder - DOVIX
                </p>
                <div className="space-y-6 mt-8 text-muted-foreground leading-relaxed">
                  <p>At DOVIX, we believe that every business deserves technology that is innovative, scalable, secure, and built for long-term success.</p>
                  <p>Our mission is to empower startups, enterprises, and organizations by providing world-class software solutions, AI-powered products, cloud applications, enterprise systems, and modern digital experiences.</p>
                  <p>Every solution we create is designed with performance, scalability, user experience, and business growth in mind. We focus on transforming ideas into impactful digital products that create measurable value.</p>
                  <p>From web development to enterprise software, artificial intelligence, automation, UI/UX design, and cloud technologies, DOVIX is committed to delivering excellence at every stage of digital transformation.</p>
                </div>
              </div>
              <div className="mt-8 p-4 sm:p-8 rounded-3xl bg-linear-to-br from-var(--accent)/20 to-var(--accent-2)/20 border border-white/10 backdrop-blur-md">
                <h3 className="text-md sm:text-2xl font-bold mb-3 text-foreground">Leadership Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We lead with innovation, build with passion, deliver with excellence, and continuously evolve through learning. Success comes from creating value for clients, empowering teams, and embracing technology that shapes the future.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ================= COMPANY STORY ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
           
            align="center"
            eyebrow="Our Story"
            title={<>Building The Future With <GradientText>Technology</GradientText></>}
            subtitle="DOVIX started with a simple vision — helping businesses leverage technology to solve real-world challenges. Today, we continue to build scalable, intelligent and future-ready digital products that drive innovation."
          />
        </FadeIn>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <FadeIn delay={0.1}>
            <GlassCard className="p-2 sm:p-10">
              <h3 className="text-xl sm:text-3xl font-bold mb-4 text-accent">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                DOVIX is a technology company delivering innovative software solutions, enterprise applications, AI-powered platforms, cloud services, mobile apps, and digital transformation strategies for businesses worldwide.
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GlassCard className="p-2 sm:p-10">
              <h3 className="text-3xl font-bold mb-6 text-accent">What We Believe</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation is successful only when it creates measurable business impact. That's why every project at DOVIX focuses on quality, security, scalability, user experience, and long-term customer success.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>

      {/* ================= COMPANY STATS ================= */}
      <Section className="relative overflow-hidden  pt-0 sm:pt-0 pb-10 sm:pb-12">
        <GlowOrb className="absolute inset-0 -z-10 h-full w-full bg-linear-to-br from-var(--accent)/10 via-transparent to-var(--accent-2)/10" />
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Impact"
            title={<>Trusted By Businesses <GradientText>Worldwide</GradientText></>}
            subtitle="We don't just build software—we create long-lasting digital experiences that help startups and enterprises scale confidently in today's competitive world."
          />
        </FadeIn>
        <div className="mt-6 grid grid-cols-2  md:grid-cols-3  w-full  lg:grid-cols-4 gap-4  h-full border border-white/10 rounded-3xl bg-linear-to-br from-var(--surface-2) to-var(--background) p-8 sm:p-12">
          {[
            { value: "120+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "12+", label: "Technology Experts" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Stat value={item.value} label={item.label}  />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= WHY CHOOSE DOVIX ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title={<>What Makes <GradientText>DOVIX</GradientText> Different?</>}
            subtitle="We combine creativity, engineering excellence, business strategy and modern technologies to deliver outstanding digital products."
          />
        </FadeIn>
        <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {[
            { title: "Innovation", desc: "We embrace emerging technologies and modern development practices to build future-ready software." },
            { title: "Scalable Architecture", desc: "Applications designed for high performance, security and long-term business growth." },
            { title: "Customer First", desc: "Every decision begins with understanding client goals and delivering measurable value." },
            { title: "Experienced Team", desc: "A passionate team of designers, developers and engineers committed to excellence." },
            { title: "Modern Technology", desc: "AI, Cloud, Full Stack, Mobile Apps, Automation and Enterprise Solutions." },
            { title: "24/7 Support", desc: "Continuous assistance and long-term technical support for every project." },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <GlassCard className="p-2 sm:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-var(--accent) to-var(--accent-2) flex items-center justify-center text-white text-xl font-bold mb-6 shadow-[0_0_20px_var(--accent)]">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>



      {/* ================= OUR TEAM ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Meet Our Experts"
            title={<>The Minds Behind <GradientText>DOVIX</GradientText></>}
            subtitle="Behind every successful project is a passionate team of developers, designers, engineers and innovators committed to building extraordinary digital experiences."
          />
        </FadeIn>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="overflow-hidden flex flex-col h-full p-0 group text-center">
                <div className="relative overflow-hidden h-50 w-50 rounded-full mx-auto bg-linear-to-br from-[#00ddff] to-[#7a73ff] ">
                  <img
                    src={member.imgSrc}
                    alt={member.imgAlt}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "https://placehold.co/500x500/111827/FFFFFF?text=Team";
                    }}
                    className="w-50 h-50 p-2 object-cover object-[center_30%]  transition duration-700 rounded-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className=" flex flex-col grow">
                  <h3 className="text-2xl font-bold mt-2">{member.name}</h3>
                  <p className="text-accent font-semibold mt-2">{member.role}</p>
                  <p className="mt-4 min-h-24 text-muted-foreground leading-relaxed line-clamp-3">{member.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6 min-  ">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <CTAButton to={member.navigationPath}>
                      View Portfolio
                    </CTAButton>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= OUR CORE EXPERTISE ================= */}
      <Section className="">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Expertise"
            title={<>Technologies We <GradientText>Work With</GradientText></>}
          />
        </FadeIn>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Web Development", "Mobile App Development", "Artificial Intelligence", "Cloud Computing",
            "UI / UX Design", "Enterprise Software", "DevOps", "Cyber Security",
          ].map((skill, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-surface border border-white/10 rounded-2xl py-8 h-full text-center sm:font-semibold hover:border-accent transition-all duration-300 group">
                <span className="group-hover:text-accent transition-colors">{skill}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>



      {/* ================= ACHIEVEMENTS ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Achievements"
              title={<>Delivering Excellence <GradientText>Since Day One</GradientText></>}
              subtitle="Our journey has been defined by innovation, customer satisfaction and continuous learning. Every successful project strengthens our commitment to delivering world-class digital solutions."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-6">
              {[
                "100% Transparency", "Quality Assurance", "Secure Development", "Latest Technologies",
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-surface border border-white/10 p-4 text-center shadow-lg hover:border-accent transition duration-300">
                  <CheckCircle2 className="h-6 w-6 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-sm md:text-lg">{item}</h3>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>
      {/* ================= OUR CULTURE ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Work Culture"
            title={<>Collaboration Drives <GradientText>Innovation</GradientText></>}
          />
        </FadeIn>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {[
            { title: "Innovation First", description: "We continuously explore modern technologies and encourage creativity in every project." },
            { title: "Team Collaboration", description: "Great products are built by teams that communicate, learn and grow together." },
            { title: "Continuous Learning", description: "We invest in learning new technologies to stay ahead in the digital world." },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-var(--accent) to-var(--accent-2) text-white flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_var(--accent)]">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= TESTIMONIAL ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-900 via-cyan-900/30 to-slate-900" />
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-12">What Our <GradientText>Clients Say</GradientText></h2>
            <blockquote className="text-2xl leading-relaxed italic text-foreground/80">
              "Working with DOVIX has been an exceptional experience. Their professionalism, technical expertise and commitment to quality exceeded our expectations. The team delivered exactly what our business needed."
            </blockquote>
            <div className="mt-12">
              <h3 className="text-2xl font-bold">Happy Client</h3>
              <p className="text-accent mt-2">CEO • Startup Company</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ================= COMPANY JOURNEY ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title={<>How DOVIX Continues To <GradientText>Grow</GradientText></>}
            subtitle="Every milestone represents our commitment to innovation, customer satisfaction, and building technology that creates real business value."
          />
        </FadeIn>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {[
            { year: "2023", title: "Company Started", desc: "Started our journey with a vision of building world-class software solutions." },
            { year: "2024", title: "Growing Team", desc: "Expanded our talented engineering and design teams while serving clients globally." },
            { year: "2025", title: "Innovation", desc: "Focused on AI, Cloud, Automation and modern scalable application development." },
            { year: "Future", title: "Global Vision", desc: "Expanding worldwide with enterprise software and AI-powered digital transformation." }
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="p-8 h-full">
                <span className="text-4xl font-bold text-accent">{item.year}</span>
                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
                <p className="text-muted-foreground mt-5 leading-relaxed">{item.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Development Process"
            title={<>How We Deliver <GradientText>Excellence</GradientText></>}
          />
        </FadeIn>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {[
            { number: "01", title: "Research", desc: "Understanding business goals and gathering detailed project requirements." },
            { number: "02", title: "Design", desc: "Creating modern UI/UX with scalable architecture and planning." },
            { number: "03", title: "Development", desc: "Building secure, scalable and high-performance software solutions." },
            { number: "04", title: "Launch & Support", desc: "Deployment, optimization, maintenance and continuous improvements." }
          ].map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-var(--accent) to-var(--accent-2) text-white flex items-center justify-center text-2xl font-bold mb-8 shadow-[0_0_20px_var(--accent)]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground mt-5 leading-relaxed">{step.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= FUTURE VISION ================= */}
      <Section className="relative overflow-hidden pt-0 sm:pt-0 pb-10 sm:pb-12">
        <GlowOrb className="absolute inset-0 -z-10 h-full w-full bg-linear-to-br from-(--accent)/10 via-transparent to-(--accent-2)/10" />
        <FadeIn>
          <div className="max-w-5xl mx-auto text-center">
            <Eyebrow>Looking Ahead</Eyebrow>
            <h2 className="text-5xl font-bold mt-6">Building The Future <GradientText>Together</GradientText></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mt-10">
              Our ambition is to become a globally recognized technology company delivering intelligent digital solutions, AI-powered applications, enterprise platforms, and next-generation software that empowers businesses across every industry.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {[
                { title: "Innovation", desc: "Creating future-ready technology products." },
                { title: "Global Expansion", desc: "Serving businesses across multiple countries." },
                { title: "Digital Excellence", desc: "Delivering quality through continuous innovation." }
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ================= JOIN DOVIX CTA ================= */}
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-var(--accent) to-var(--accent-2) text-background text-center p-4 shadow-2xl">
            <GlowOrb className="-top-20 -right-20 h-100 w-100 bg-white/20" />
            <GlowOrb className="-bottom-20 -left-20 h-100 w-100 bg-white/20" />
            <div className="relative w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Build Something Amazing Together</h2>
              <p className="text-xl mt-8 leading-relaxed opacity-90 text-white ">
                Whether you're launching a startup, scaling an enterprise, or transforming your digital presence, DOVIX is ready to turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                <a href="/contact">
                  <button className="bg-background text-accent px-10 py-4 rounded-xl font-bold hover:scale-105 transition shadow-xl">
                    Contact Us
                  </button>
                </a>
                <a href="/services">
                  <button className="border border-white/30 bg-white/10 backdrop-blur px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition">
                    Explore Services
                  </button>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ================= FINAL MESSAGE ================= */}
      <Section className="relative overflow-hidden py-12  pt-0 sm:pt-0 pb-10 sm:pb-12">
        <GlowOrb className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-150 w-200 bg-(--accent-2)/10 blur-3xl" />
        <FadeIn>
          <div className="w-full  text-center">
            <span className="text-accent font-bold uppercase tracking-[0.5em]">DOVIX</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 ">
              Innovation.
              Excellence. <br />
              <GradientText>Digital Transformation.</GradientText>
            </h2>
            <p className="max-w-4xl mx-auto mt-10 text-muted-foreground text-lg leading-relaxed">
              At DOVIX, our passion is building innovative digital experiences that help businesses grow faster, smarter, and stronger. Every project is an opportunity to create something meaningful. Every client is a long-term partner. Every solution is crafted with innovation, quality and excellence.
            </p>
            <div className="mt-14 flex flex-wrap justify-center gap-5">
              {[
                { label: "Innovation", color: "bg-var(--accent)" },
                { label: "Technology", color: "bg-[var(--accent-2)]" },
                { label: "Development", color: "bg-sky-600" },
                { label: "AI Solutions", color: "bg-indigo-600" },
                { label: "Cloud", color: "bg-emerald-600" },
                { label: "Future Ready", color: "bg-orange-500" },
              ].map((tag, i) => (
                <span key={i} className={`px-6 py-3 rounded-full text-white font-medium ${tag.color} shadow-lg`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export const Route = createFileRoute("/about")({
  component: About,
});
