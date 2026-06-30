import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P, UL } from "../components/site/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DOVIX AI" },
      { name: "description", content: "How DOVIX AI collects, uses, and protects personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title={<>Privacy Policy</>} updated="January 2026">
      <section>
        <H2>Overview</H2>
        <P>This Privacy Policy describes how DOVIX AI Technologies ("DOVIX AI", "we", "us") collects, uses, discloses, and safeguards information when you interact with our websites, products, and services.</P>
      </section>
      <section>
        <H2>Information we collect</H2>
        <UL items={[
          "Contact details you provide via forms, including name, email, company, and phone.",
          "Usage and device data such as IP address, browser type, and pages visited.",
          "Project information shared with us during engagements, subject to confidentiality agreements.",
        ]} />
      </section>
      <section>
        <H2>How we use information</H2>
        <UL items={[
          "To respond to inquiries and deliver requested services.",
          "To operate, secure, and improve our products and websites.",
          "To send service updates and, where permitted, marketing communications.",
          "To comply with legal obligations and enforce our terms.",
        ]} />
      </section>
      <section>
        <H2>Data protection</H2>
        <P>We maintain administrative, technical, and physical safeguards aligned to SOC 2 Type II, ISO 27001, HIPAA, and GDPR requirements. Access to personal data is restricted, encrypted in transit and at rest, and audited continuously.</P>
      </section>
      <section>
        <H2>Your rights</H2>
        <P>Subject to applicable law, you may request access, correction, deletion, or portability of your personal information, or object to certain processing. To exercise rights, contact privacy@dovix.ai.</P>
      </section>
      <section>
        <H2>Contact</H2>
        <P>For privacy questions: privacy@dovix.ai · DOVIX AI Technologies, 548 Market Street, San Francisco, CA 94104.</P>
      </section>
    </LegalPage>
  );
}
