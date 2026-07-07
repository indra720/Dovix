import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, FadeIn } from "../components/site/primitives";
import engi from "../assets/engin.jpg"
export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DOVIX AI" },
      { name: "description", content: "Essays and field notes from the DOVIX AI team on agents, evaluation, retrieval, and shipping AI in production." },
      { property: "og:title", content: "Blog — DOVIX AI" },
      { property: "og:description", content: "Field notes and essays from the DOVIX AI team on agents, RAG, evals, and shipping AI in production." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "Why your AI pilot stalled at 80% — and how to get the last 20%", c: "Operations", d: "Most pilots succeed in demo and fail in production. Here's the playbook to bridge the gap.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { t: "The agent stack we ship in 2026", c: "Engineering", d: "Our opinionated agent architecture: LangGraph, MCP, evals, observability, and human handoff.", image:engi },
  { t: "RAG is dead. Long live retrieval.", c: "Research", d: "Why naive RAG keeps disappointing — and the retrieval architecture that actually works.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" },
  { t: "Evals are the product", c: "Research", d: "Without an eval harness, you don't have a model — you have a vibe.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop" },
  { t: "Sovereign LLMs: when self-hosting actually wins", c: "Strategy", d: "A pragmatic guide to choosing between hosted frontier models and self-hosted open models.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
  { t: "Building the AI-native SOC", c: "Security", d: "Multi-agent triage, correlation, and response in modern security operations.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Field notes from the <span className="text-gradient">AI frontier</span>.</>}
        subtitle="Essays, playbooks, and engineering notes from the DOVIX AI team."
      />
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <FadeIn key={p.t} delay={i * 0.04}>
              <Link to="/blog" className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition hover:border-white/25 hover:bg-white/6">
                <div className="relative aspect-16/9 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.t}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{p.c}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
