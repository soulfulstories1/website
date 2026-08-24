import Link from "next/link";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";

const perks = [
  {
    number: "01",
    title: "Creative Freedom",
    desc: "Own your vision. We trust our creators to lead without micromanagement or unnecessary bureaucracy.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Growth Mindset",
    desc: "We invest in your development with mentorship, specialized training, and access to top-tier creative tools.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Remote-First Flexibility",
    desc: "Work from anywhere. We prioritize real creative output and high performance over hours logged in an office.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Real Brand Impact",
    desc: "Your work directly shapes market leaders, turning stories into memorable brand experiences and revenue.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Vibrant Culture",
    desc: "Collaborative, transparent, and zero ego. We work hard, celebrate every win, and push boundaries together.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Prime Execution",
    desc: "No unnecessary meetings or red tape. Rapid prototyping and high-velocity creative deployment.",
    icon: (
      <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const cultureValues = [
  "Curiosity over ego",
  "Initiative over permission",
  "Quality over speed",
  "Results over buzzwords",
];

const talentRoles = [
  { title: "Social Media & Reel Creator", type: "Full-Time / Contract", location: "Remote" },
  { title: "Brand & Visual Designer", type: "Full-Time / Contract", location: "Remote" },
  { title: "Performance Marketer (Meta & Ads)", type: "Full-Time / Contract", location: "Remote" },
  { title: "LinkedIn Content Strategist", type: "Part-Time / Contract", location: "Remote" },
];

export default function Careers() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex flex-col justify-center overflow-hidden">
        {/* Full-coverage background image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/assets/bg-hero.jpg"
            alt="Careers at The Prime Media"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-20">
          <Reveal preset="fade-up" duration={0.8} className="max-w-3xl">
            <h6 className="text-[#16B0C7] text-xs uppercase tracking-[0.25em] font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#16B0C7]" />
              Careers at The Prime Media
            </h6>
            <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-bold text-white leading-[1.05] tracking-tight mb-6">
              Join the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b4eff7] to-[#16B0C7]">
                Main Cast.
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-light">
              We&rsquo;re a team of ambitious strategists, storytellers, designers, and growth marketers building brands that demand attention.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#talent-network"
                className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white bg-[#16B0C7] hover:bg-[#139bb0] px-7 py-4 rounded-none transition-all shadow-lg shadow-[#16B0C7]/20"
              >
                Explore Open Talent Roles
              </a>
              <a
                href="#our-culture"
                className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white/80 border border-white/20 hover:border-[#16B0C7] hover:text-white px-7 py-4 rounded-none transition-all"
              >
                Our Culture
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 lg:py-32 bg-[#0e111a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal preset="fade-up" className="max-w-2xl mb-16">
            <h6 className="text-[#16B0C7] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              Why Join Us
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.2]">
              Built for Creators &amp; Growth Thinkers.
            </h2>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.08}
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 snap-x snap-mandatory brand-scrollbar"
          >
            {perks.map((perk) => (
              <StaggerItem
                key={perk.title}
                className="bg-[#121622] border border-white/5 p-8 rounded-xl hover:border-[#16B0C7]/40 hover:bg-[#161b2a] transition-all duration-300 group relative flex flex-col justify-between w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {perk.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-white/30 group-hover:text-[#16B0C7] transition-colors">
                      {perk.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#16B0C7] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-xs text-white/40 tracking-wider">
            <span className="text-[#16B0C7]">←</span> Swipe to explore all perks <span className="text-[#16B0C7]">→</span>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section id="our-culture" className="py-24 lg:py-32 bg-[#0a0d14] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal preset="slide-right" className="lg:col-span-7">
              <h6 className="text-[#16B0C7] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Our Culture
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.25] mb-6">
                We Believe in Great Work with Great People.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                We&rsquo;re a lean, ambitious team of creators, strategists, and builders who care deeply about every campaign we execute. There&rsquo;s no corporate fluff — just ownership and a shared passion for making brands impossible to ignore.
              </p>

              {/* Culture Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-8">
                {cultureValues.map((val) => (
                  <div key={val} className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-3 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-[#16B0C7]" />
                    <span className="text-white text-sm font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right Card with Official Logo */}
            <Reveal preset="slide-left" delay={0.15} className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#161b2a] to-[#0e111a] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#16B0C7]/10 rounded-full blur-3xl -z-0 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/10">
                    <img
                      src="/Logo.svg"
                      alt="The Prime Media"
                      className="h-14 w-auto object-contain shrink-0"
                    />
                    <div>
                      <h3 className="text-white font-bold text-xl leading-snug">The Prime Media</h3>
                      <p className="text-[#16B0C7] text-xs font-semibold uppercase tracking-wider mt-0.5">
                        Creative Growth Agency
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-base italic leading-relaxed mb-6 border-l-2 border-[#16B0C7] pl-4 py-1">
                    &ldquo;Your Brand, at it&apos;s Prime.&rdquo;
                  </blockquote>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    Based in India, operating globally. We craft high-impact brand identities, performance campaigns, and digital experiences.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open Positions & Talent Network Section */}
      <section id="talent-network" className="py-24 lg:py-32 bg-[#0e111a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal preset="fade-up" className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Talent Network Open
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.2]">
                Join Our Creative Roster.
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              Even when specific roles aren&rsquo;t actively posted, we are always looking for top 1% talent to collaborate with on client projects.
            </p>
          </Reveal>

          {/* Talent Roles Grid */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {talentRoles.map((role) => (
              <StaggerItem
                key={role.title}
                className="bg-[#121622] border border-white/5 p-6 rounded-xl flex items-center justify-between hover:border-[#16B0C7]/30 transition-all group"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#16B0C7] transition-colors mb-1">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{role.type}</span>
                    <span>&bull;</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white border border-white/10 group-hover:border-[#16B0C7] px-4 py-2.5 rounded transition-all shrink-0 ml-4"
                >
                  Pitch Us
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Direct Contact Pitch Box */}
          <Reveal preset="fade-up" className="bg-gradient-to-r from-[#121622] via-[#161b2a] to-[#121622] border border-white/10 p-10 lg:p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#16B0C7]/10 border border-[#16B0C7]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Don&rsquo;t See Your Exact Role?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Send us your portfolio, resume, or a link to your best work. We review every pitch and reach out as soon as a fitting project opens up.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@aaradhyadigitalsolutions.com"
                className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white bg-[#16B0C7] hover:bg-[#139bb0] px-8 py-4 rounded-none transition-all shadow-lg shadow-[#16B0C7]/20"
              >
                Email hello@aaradhyadigitalsolutions.com
              </a>
              <Link
                href="/contact"
                className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white/80 border border-white/20 hover:border-[#16B0C7] hover:text-white px-8 py-4 rounded-none transition-all"
              >
                Contact Form
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
