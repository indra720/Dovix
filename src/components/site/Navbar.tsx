import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import logoAsset from "@/assets/dovix-logo.asset.json";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../../assets/DovixaiWhite-removebg-preview.png";

type NavItem =
  { to: string; label: string } | { label: string; children: { to: string; label: string }[] };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/solutions", label: "Solutions" },

  { to: "/portfolio", label: "Portfolio" },

  {
    label: "Resoureces",
    children: [
      { to: "/projects", label: "Projects" },
      { to: "/case-studies", label: "Case Studies" },
    ],
  },
  { to: "/contact", label: "Contact Us" },
  // { to: "/careers", label: "Careers" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setWorkOpen(false);
    setMobileWorkOpen(false);
  }, [pathname]);

  const openWork = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setWorkOpen(true);
  };
  const scheduleCloseWork = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setWorkOpen(false), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[var(--background)] border-b border-white/10">
      {/* contact section */}
      <div className="w-full px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-foreground/80 px-4 py-2 border-b border-white/5 gap-2 sm:gap-0">
          <a
            href="mailto:info@dovix.ai"
            className="hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <span>
              <Mail size={16} />
            </span>{" "}
            info@dovix.ai
          </a>
          <a
            href="tel:+919116382399"
            className="hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <span>
              <Phone size={16} />{" "}
            </span>
            Contact us: +91 91163 82399
          </a>
        </div>
        <div className="flex items-center justify-between border-b border-white/10  ">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="DOVIX AI"
              className="h-16 sm:h-24 w-20 sm:w-40 drop-shadow-[0_0_22px_rgba(0,245,255,0.35)] "
            />
            <span className="sr-only">DOVIX AI</span>
          </Link>

          <nav className="hidden items-center  xl:flex">
            {nav.map((n) => {
              if ("children" in n) {
                const active = n.children.some((c) => c.to === pathname);
                return (
                  <div
                    key={n.label}
                    className="relative"
                    onMouseEnter={openWork}
                    onMouseLeave={scheduleCloseWork}
                  >
                    <button
                      onClick={() => setWorkOpen((v) => !v)}
                      className={`relative inline-flex items-center gap-1 px-4 py-2.5 text-[15px] font-semibold tracking-tight transition ${
                        active ? "text-accent" : "text-foreground/80 hover:text-foreground"
                      }`}
                      aria-haspopup="menu"
                      aria-expanded={workOpen}
                    >
                      {n.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${workOpen ? "rotate-180" : ""}`}
                      />
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                      )}
                    </button>
                    {workOpen && (
                      <div
                        role="menu"
                        className="absolute left-1/2 top-full mt-2 w-60 -translate-x-1/2 border border-white/10 bg-[var(--background)] p-2 shadow-lg"
                      >
                        {n.children.map((c) => {
                          const cActive = pathname === c.to;
                          return (
                            <Link
                              key={c.to}
                              to={c.to}
                              role="menuitem"
                              className={`block px-3 py-2.5 text-sm font-medium transition ${
                                cActive
                                  ? "bg-white/5 text-accent"
                                  : "text-foreground/85 hover:bg-white/5 hover:text-foreground"
                              }`}
                            >
                              {c.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2.5 text-[15px] font-semibold tracking-tight transition ${
                    active ? "text-accent" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden bg-gradient-to-r from-blue-600 to-lime-500 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition hover:scale-[1.02] sm:inline-flex"
            >
              Get in Touch{" "}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center border border-white/10 text-foreground xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 max-h-[calc(100vh-240px)] overflow-y-auto border border-white/10 bg-[var(--background)] p-4 xl:hidden">
            <div className="grid grid-cols-2 gap-1">
              {nav.map((n) => {
                if ("children" in n) {
                  return (
                    <div key={n.label} className="col-span-2">
                      <button
                        onClick={() => setMobileWorkOpen((v) => !v)}
                        className="flex w-full items-center justify-between px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-white/5"
                        aria-expanded={mobileWorkOpen}
                      >
                        <span>{n.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileWorkOpen && (
                        <div className="ml-3 mt-1 border-l border-white/10 pl-3">
                          {n.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              className="block px-3 py-2 text-sm text-foreground/80 hover:bg-white/5"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-white/5"
                  >
                    {n.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="col-span-2 mt-2 bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-3 py-3 text-center text-sm font-semibold text-[var(--background)]"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
