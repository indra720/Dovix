import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/dovix-logo.asset.json";
import logo from "../../assets/logoNewUpdate.png"

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "AI Services" },
      { to: "/solutions", label: "Solutions" },
      { to: "/products", label: "Products" },
      { to: "/technologies", label: "Technologies" },
      { to: "/ai-research", label: "AI Research" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/industries", label: "Industries" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/cookies", label: "Cookie Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-(--surface)/40">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent)/60 to-transparent" />
      <div className="mx-auto w-full max-w-375 px-6 py-10 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)] ">
          <div className="-top-3 relative">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="DOVIX AI" className="h-34 w-50" />
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Building the intelligent future with frontier AI, autonomous agents, and enterprise-grade automation for global organizations.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Headquarters</p>
            <p className="mt-2 text-sm text-foreground/80">Registered Office :-B-18, 2nd Floor, Shiv Marg, Bani Park,<br />Jaipur, Rajasthan 302015, India</p>
            <p className="mt-2 text-sm text-foreground/80">Branch Office :-  Plot no 43 -jugraj apartment shiv shankar colony gopal pura byepass road jaipur 302019
            </p>
            <p className="mt-3 text-sm text-foreground/80">+91 91163 82399 · info@dovix.ai</p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-foreground/75 transition hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DOVIX AI Technologies. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
