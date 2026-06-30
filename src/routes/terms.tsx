import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P } from "../components/site/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — DOVIX AI" },
      { name: "description", content: "The terms that govern your use of DOVIX AI websites, products, and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="January 2026">
      <section><H2>Agreement</H2><P>By accessing or using DOVIX AI websites, products, or services, you agree to be bound by these Terms. If you do not agree, do not use our services.</P></section>
      <section><H2>Services</H2><P>DOVIX AI provides AI development, consulting, and software products. Specific deliverables and commitments are governed by separately executed engagement agreements.</P></section>
      <section><H2>Intellectual property</H2><P>All content, trademarks, software, and materials on this site are owned by DOVIX AI or its licensors. No license is granted except as expressly set out in writing.</P></section>
      <section><H2>Acceptable use</H2><P>You agree not to misuse the services, including reverse engineering, attempting to access non-public areas, or using the services to violate any law.</P></section>
      <section><H2>Disclaimers</H2><P>Services are provided "as is". To the maximum extent permitted by law, we disclaim all implied warranties of merchantability, fitness, and non-infringement.</P></section>
      <section><H2>Limitation of liability</H2><P>To the extent permitted by law, DOVIX AI's aggregate liability shall not exceed the fees paid in the twelve months preceding the claim.</P></section>
      <section><H2>Governing law</H2><P>These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles.</P></section>
    </LegalPage>
  );
}
