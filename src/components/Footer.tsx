import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  "Social Media Management",
  "Content Creation & Reels",
  "Branding & Visual Identity",
  "Website Design & Dev",
  "LinkedIn Personal Branding",
  "Performance Marketing & Ads",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/19FVbNNMLa/", icon: FaFacebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/main-character-media-by-aaradhya-digital-solutions?trk=public_post_feed-actor-name", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/theprime__media?igsh=MWZrODJzOGVxNDllYQ%3D%3D", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-[#080a0f] text-white border-t border-white/10 relative overflow-hidden selection:bg-[#16B0C7] selection:text-black">
      {/* Top Footer Callout Banner */}
      <div className="border-b border-white/10 py-12 lg:py-16 bg-[#0b0e14] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#16B0C7] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
              Ready to Scale?
            </span>
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Let&apos;s bring your brand to its <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b4eff7] to-[#16B0C7]">Prime.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white bg-[#16B0C7] hover:bg-[#139bb0] px-8 py-4 transition-all shadow-lg shadow-[#16B0C7]/20 shrink-0"
          >
            Book a Discovery Call &rarr;
          </Link>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/Logo.svg"
                alt="The Prime Media"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(22,176,199,0.15)] hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-white font-serif italic text-lg leading-relaxed">
              &ldquo;Your Brand, at it&apos;s Prime.&rdquo;
            </p>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-light">
              Full-service creative growth agency specializing in strategic branding, viral content creation, high-converting digital platforms, and performance marketing.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#16B0C7] font-semibold bg-[#16B0C7]/10 border border-[#16B0C7]/20 px-3 py-1.5 rounded-full inline-block">
                Aaradhya Digital Solutions Initiative
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-semibold tracking-[0.2em] text-[#16B0C7] uppercase mb-6">
              Navigation
            </h6>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16B0C7] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h6 className="text-xs font-semibold tracking-[0.2em] text-[#16B0C7] uppercase mb-6">
              Services
            </h6>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block hover:translate-x-1 transition-transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Connect (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h6 className="text-xs font-semibold tracking-[0.2em] text-[#16B0C7] uppercase mb-6">
              Connect
            </h6>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1">Direct Email</span>
                <a
                  href="mailto:hello@aaradhyadigitalsolutions.com"
                  className="text-sm text-white font-medium hover:text-[#16B0C7] transition-colors block"
                >
                  hello@aaradhyadigitalsolutions.com
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1">Phone Contact</span>
                <a
                  href="tel:+919926806080"
                  className="text-sm text-white font-medium hover:text-[#16B0C7] transition-colors block"
                >
                  +91 99268 06080
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-3">Social Media</span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-[#16B0C7]/40 px-3 py-1.5 rounded transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 px-6 lg:px-12 bg-[#040609]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Prime Media. All rights reserved.</p>
          <p className="text-gray-400">
            Digital Growth Initiative by <span className="text-white font-medium">Aaradhya Digital Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
