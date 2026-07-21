import { Link } from "@tanstack/react-router";
import logo from "../../assets/logoNewUpdate.png";
import qr from "../../assets/qr.jpeg";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy", label: "Privacy" },
  { to: "/contact", label: "Contact Us" },
];

const servicesLinks = [
  { to: "/services/ai-development", label: "AI Development" },
  { to: "/services/ai-agents", label: "AI Agents" },
  { to: "/services/ai-automation", label: "AI Automation" },
  { to: "/services/ai-erp-solutions", label: "AI ERP Solutions" },
  { to: "/services/software-development", label: "Software Development" },
  { to: "/services/mobile-app-development", label: "Mobile App Development" },
  { to: "/services/web-development", label: "Web Development" },
  { to: "/services/ai-digital-marketing", label: "AI Digital Marketing" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1428] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Logo + About */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="DOVIX AI" className="h-20 w-30" />
            
          </div>

          <p className="mt-6 text-slate-400 leading-relaxed text-[15px]">
            DOVIX AI is a global AI, software development, ERP, and digital transformation company
            helping businesses automate operations, modernize systems, and accelerate growth through
            next-generation technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://www.linkedin.com/company/dovixai"
              target="_Blank"
              className="text-slate-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
           
            <a
              href="https://www.facebook.com/profile.php?id=61590717617219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/dovixai"
              target="_Blank"
              className="text-slate-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCl5U-IZOQ9wv1DLFCrjQStg"
              target="_Blank"
              className="text-slate-400 hover:text-white text-xl"
            >
              <FaYoutube />
            </a>
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
              <a href="tel:+919116382399" className="hover:text-white">
                +91 91163 82399
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <a href="mailto:info@dovix.ai" className="hover:text-white">
                info@dovix.ai
              </a>
            </div>
            <div className="leading-relaxed">
              <p className="mt-2 text-sm ">
                Registered Office :-B-18, 2nd Floor, Shiv Marg, Bani Park,
                <br />
                Jaipur, Rajasthan 302015, India
              </p>
              <p className="mt-2 text-sm ">
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
