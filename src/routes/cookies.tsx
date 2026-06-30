import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P, UL } from "../components/site/legal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — DOVIX AI" },
      { name: "description", content: "How DOVIX AI uses cookies and similar technologies." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie Policy" updated="January 2026">
      <section><H2>What are cookies</H2><P>Cookies are small text files placed on your device that help websites remember information about your visit and improve your experience.</P></section>
      <section>
        <H2>How we use cookies</H2>
        <UL items={[
          "Essential cookies for site functionality, security, and load balancing.",
          "Analytics cookies that help us understand how the site is used so we can improve it.",
          "Preference cookies that remember your settings such as language or region.",
          "Marketing cookies that help us measure campaign effectiveness, where you have consented.",
        ]} />
      </section>
      <section><H2>Managing cookies</H2><P>You can control cookies through your browser settings. Disabling certain cookies may impact site functionality.</P></section>
      <section><H2>Contact</H2><P>For cookie-related questions, contact privacy@dovix.ai.</P></section>
    </LegalPage>
  );
}
