import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[22px] font-black italic text-white">MCM</span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">Main Character</span>
                <span className="text-[10px] font-medium tracking-[0.35em] text-[#EC4B46]">MEDIA</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Making Your Brand the Main Character.
            </p>
            <p className="text-white/30 text-xs italic">
              &ldquo;Your brand is the main character. We help write the story.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-8">
              Quick Links
            </h6>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-8">
              Services
            </h6>
            <ul className="space-y-3">
              {[
                "Social Media Management",
                "Content Creation",
                "Branding",
                "Website Design",
                "LinkedIn Personal Branding",
                "Performance Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h6 className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-8">
              Connect
            </h6>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { name: "Instagram", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "Twitter", href: "#" },
                { name: "Facebook", href: "#" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-sm font-medium text-white/50 hover:text-[#EC4B46] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-white/50">
                hello@maincharactermedia.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-6 px-6 text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} Main Character Media. All rights reserved.
      </div>
    </footer>
  );
}
