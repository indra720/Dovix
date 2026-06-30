import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, FadeIn } from "../components/site/primitives";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — DOVIX AI" },
      { name: "description", content: "A directory of every page on the DOVIX AI website." },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: Sitemap,
});

const sections = [
  { title: "Company", links: [["/", "Home"], ["/about", "About Us"], ["/careers", "Careers"], ["/contact", "Contact"], ["/faq", "FAQ"]] },
  { title: "Work", links: [["/services", "AI Services"], ["/solutions", "Solutions"], ["/products", "Products"], ["/case-studies", "Case Studies"], ["/portfolio", "Portfolio"]] },
  { title: "Tech & Research", links: [["/technologies", "Technologies"], ["/ai-research", "AI Research"], ["/industries", "Industries"], ["/blog", "Blog"]] },
  { title: "Legal", links: [["/privacy", "Privacy Policy"], ["/terms", "Terms & Conditions"], ["/cookies", "Cookie Policy"]] },
] as const;

function Sitemap() {
  return (
    <>
      <PageHero eyebrow="Sitemap" title={<>Every page on <span className="text-gradient">DOVIX AI</span>.</>} />
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-foreground/85 transition hover:text-accent">{label}</Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
