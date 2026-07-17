// import { Link } from "@tanstack/react-router";
// import logoAsset from "@/assets/dovix-logo.asset.json";
// import logo from "../../assets/logoNewUpdate.png"

// const cols = [
//   {
//     title: "Company",
//     links: [
//       { to: "/about", label: "About Us" },
//       { to: "/careers", label: "Careers" },
//       { to: "/case-studies", label: "Case Studies" },
//       { to: "/portfolio", label: "Portfolio" },
//       { to: "/contact", label: "Contact" },
//       { to: "/projects", label: "Projects" },
//     ],
//   },
//   {
//     title: "Services",
//     links: [
//       { to: "/services", label: "AI Services" },
//       { to: "/solutions", label: "Solutions" },
//       { to: "/products", label: "Products" },
//       { to: "/technologies", label: "Technologies" },
//       { to: "/ai-research", label: "AI Research" },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { to: "/blog", label: "Blog" },
//       { to: "/faq", label: "FAQ" },
//       { to: "/industries", label: "Industries" },
//       { to: "/sitemap", label: "Sitemap" },
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       { to: "/privacy", label: "Privacy Policy" },
//       { to: "/terms", label: "Terms & Conditions" },
//       { to: "/cookies", label: "Cookie Policy" },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="relative mt-20 border-t border-white/10 bg-(--surface)/40">
//       <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent)/60 to-transparent" />
//       <div className="mx-auto w-full max-w-375 px-6 py-10 sm:px-10">
//         <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)] ">
//           <div className="-top-3 relative">
//             <Link to="/" className="flex items-center gap-2">
//               <img src={logo} alt="DOVIX AI" className="h-34 w-50" />
//             </Link>
//             <p className="mt-5 max-w-sm text-sm text-muted-foreground">
//               Building the intelligent future with frontier AI, autonomous agents, and enterprise-grade automation for global organizations.
//             </p>
//             <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Headquarters</p>
//             <p className="mt-2 text-sm text-foreground/80">Registered Office :-B-18, 2nd Floor, Shiv Marg, Bani Park,<br />Jaipur, Rajasthan 302015, India</p>
//             <p className="mt-2 text-sm text-foreground/80">Branch Office :-  Plot no 43 -jugraj apartment shiv shankar colony gopal pura byepass road jaipur 302019
//             </p>
//             <p className="mt-3 text-sm text-foreground/80">+91 91163 82399 · info@dovix.ai</p>
//           </div>

//           {cols.map((c) => (
//             <div key={c.title}>
//               <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
//                 {c.title}
//               </h4>
//               <ul className="mt-5 space-y-3 text-sm">
//                 {c.links.map((l) => (
//                   <li key={l.to}>
//                     <Link
//                       to={l.to}
//                       className="text-foreground/75 transition hover:text-accent"
//                     >
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
//           <p>© {new Date().getFullYear()} DOVIX AI Technologies. All rights reserved.</p>

//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "@tanstack/react-router";
import logo from "../../assets/logoNewUpdate.png";
import qr from "../../assets/qrimg.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

const servicesLinks = [
  { to: "/services", label: "AI Development" },
  { to: "/services", label: "AI Agents" },
  { to: "/services", label: "AI Automation" },
  { to: "/services", label: "AI ERP Solutions" },
  { to: "/services", label: "Web Development" },
  { to: "/services", label: "AI Digital Marketing" },
  { to: "/services", label: "IT Consulting" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1428] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Logo + About */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="DOVIX AI" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-white tracking-tight">DOVIX AI</span>
          </div>

          <p className="mt-6 text-slate-400 leading-relaxed text-[15px]">
            DOVIX AI is a global AI, software development, ERP, and digital transformation company
            helping businesses automate operations, modernize systems, and accelerate growth through
            next-generation technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            <Link to="#" className="text-slate-400 hover:text-white text-xl">
              <FaLinkedin />
            </Link>
            <Link to="#" className="text-slate-400 hover:text-white text-xl">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-slate-400 hover:text-white text-xl">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-slate-400 hover:text-white text-xl">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.to} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {servicesLinks.map((service, i) => (
              <li key={i}>
                <Link to={service.to} className="hover:text-white transition">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>
          <div className="space-y-4 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <span>📞</span>
              <Link to="tel:+919116382399" className="hover:text-white">
                +91 91163 82399
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <Link to="mailto:info@dovix.ai" className="hover:text-white">
                info@dovix.ai
              </Link>
            </div>
            <div className="leading-relaxed">
             
              <p className="mt-2 text-sm text-foreground/80">
                Registered Office :-B-18, 2nd Floor, Shiv Marg, Bani Park,
                <br />
                Jaipur, Rajasthan 302015, India
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Branch Office :- Plot no 43 -jugraj apartment shiv shankar colony gopal pura byepass
                road jaipur 302019
              </p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="md:col-span-12 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
          <p className="text-white font-medium mb-3 text-sm">Scan to Visit Our Website</p>
          <div className="bg-white p-2 rounded-2xl">
            <img src={qr} alt="QR Code" className="w-36 h-36" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-white/10 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 DOVIX AI. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
