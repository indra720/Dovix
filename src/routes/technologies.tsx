import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FadeIn } from "../components/site/primitives";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — DOVIX AI" },
      { name: "description", content: "The full DOVIX AI technology stack — models, frameworks, vector databases, clouds, and MLOps tooling." },
      { property: "og:title", content: "Technologies — DOVIX AI" },
      { property: "og:description", content: "The full DOVIX AI technology stack — foundation models, frameworks, vector databases, clouds, and MLOps tooling." },
      { property: "og:url", content: "https://doovix-vision-forge.lovable.app/technologies" },
    ],
    links: [{ rel: "canonical", href: "https://doovix-vision-forge.lovable.app/technologies" }],
  }),
  component: Technologies,
});

const groups = [
  { t: "Languages & Frameworks", items: ["Python", "Django", "FastAPI", "Flask", "Node.js", "Go", "React", "Next.js", "Flutter"] },
  { t: "Foundation Models", items: ["OpenAI", "Claude", "Gemini", "Llama", "DeepSeek", "Mistral"] },
  { t: "Orchestration & Agents", items: ["LangChain", "LangGraph", "CrewAI", "n8n", "MCP Servers"] },
  { t: "Vector Databases", items: ["Qdrant", "Pinecone", "Weaviate", "Milvus"] },
  { t: "ML Frameworks", items: ["TensorFlow", "PyTorch"] },
  { t: "Data & Messaging", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"] },
  { t: "Cloud", items: ["AWS", "Azure", "GCP"] },
  { t: "DevOps & MLOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
];

function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={<>The <span className="text-gradient">full AI stack</span>, mastered.</>}
        subtitle="We pick the right tool for the job — never the trendy one. Here's what we use to ship to production."
      />
      <Section className="relative pt-0 sm:pt-0 pb-10 sm:pb-12">
        <div className="space-y-16">
          {groups.map((g, gi) => (
            <FadeIn key={g.t} delay={gi * 0.04}>
              <SectionHeading eyebrow={`0${gi + 1}`} title={g.t} />
              <div className="mt-8 flex flex-wrap gap-3">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-foreground/85 transition hover:border-accent/40 hover:text-accent"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
