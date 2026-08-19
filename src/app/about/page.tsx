import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Strategic Branding & Identity",
    subtitle: "Brand Architecture & Position",
    desc: "We define brand identities, logo design, design systems, and strategic positioning that turn quiet companies into unmistakable market leaders.",
  },
  {
    number: "02",
    title: "Visual Storytelling & Reels",
    subtitle: "High-Impact Content Creation",
    desc: "Commercial video production, high-converting social reels, and editorial photography engineered to capture instant audience attention.",
  },
  {
    number: "03",
    title: "Performance & Growth Marketing",
    subtitle: "Paid Ads & Conversion Funnels",
    desc: "Data-driven Meta ad campaigns, retargeting architectures, and community growth strategies built for high-ROI scalability.",
  },
  {
    number: "04",
    title: "Next-Gen Web Platforms",
    subtitle: "Next.js & Digital Experiences",
    desc: "Lightning-fast business websites, landing pages, and interactive digital platforms designed for maximum conversion and brand prestige.",
  },
];

const editorialStats = [
  { value: "100+", label: "Brands Empowered Globally" },
  { value: "300%", label: "Average Reach & Engagement Lift" },
  { value: "0%", label: "Generic Templates Used" },
  { value: "100%", label: "Bespoke Creative Execution" },
];

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-[#EC4B46] selection:text-white">
      {/* Editorial Hero Header */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-end pt-36 pb-20 lg:pb-28 border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: "url('/assets/about-hero-demo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-[#EC4B46] text-xs font-semibold uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#EC4B46] animate-pulse" />
              About The Agency
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-light leading-[1.02] tracking-tight text-white mb-8">
              Crafting Identities. <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#F59D6A]">
                Elevating Leaders.
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mb-12">
              <strong className="text-white font-medium">The Prime Media</strong> is a luxury creative growth agency bridging aesthetic mastery with commercial performance.
            </p>

            <div className="flex flex-wrap gap-6 items-center pt-4">
              <Link
                href="/contact"
                className="inline-block text-xs font-semibold uppercase tracking-[2.5px] text-white bg-[#EC4B46] hover:bg-[#d63d38] px-8 py-4 transition-all shadow-xl shadow-[#EC4B46]/10"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-xs font-semibold uppercase tracking-[2.5px] text-gray-300 hover:text-white border-b border-white/30 hover:border-white py-2 transition-all"
              >
                Explore Portfolio &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Brand Manifesto */}
      <section className="py-24 lg:py-36 bg-[#0e0e0e] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#F59D6A] text-xs uppercase tracking-[0.3em] font-semibold block mb-8">
            OUR MANIFESTO
          </span>

          <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-white/95 leading-[1.35] font-light mb-10 max-w-4xl mx-auto">
            &ldquo;In an era of fleeting attention, extraordinary brands are not built by chance. They are sculpted with intention, vision, and relentless creative discipline.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center gap-3 pt-6 border-t border-white/10 max-w-xs mx-auto">
            <img src="/Logo.svg" alt="The Prime Media" className="h-10 w-auto object-contain mb-1" />
            <p className="text-white font-bold tracking-wide text-base">The Prime Media</p>
            <p className="text-[#EC4B46] text-xs uppercase tracking-[0.25em] font-medium">
              Your Brand, at it&apos;s Prime.
            </p>
          </div>
        </div>
      </section>

      {/* The Story & Origin Narrative */}
      <section className="py-28 lg:py-40 bg-[#0a0a0a] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Sticky Left Column */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-36 space-y-6">
                <span className="text-[#EC4B46] text-xs uppercase tracking-[0.3em] font-semibold block">
                  ORIGIN &amp; VISION
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
                  Born to Break <br />
                  <span className="font-serif italic text-gray-300">Digital Noise.</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md pt-2">
                  A flagship creative initiative by <strong className="text-white font-medium">Aaradhya Digital Solutions</strong>, designed for forward-thinking brands.
                </p>

                <div className="pt-8 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {editorialStats.slice(0, 2).map((s) => (
                      <div key={s.label}>
                        <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{s.value}</p>
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Narrative */}
            <div className="lg:col-span-7 space-y-10 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed border-l-2 border-[#EC4B46] pl-6 py-2">
                We started with a singular proposition: businesses deserve far more than standard social posts and generic templates. They deserve a commanding digital presence that reflects their true caliber.
              </p>

              <p>
                In today&rsquo;s crowded marketplace, attention is the ultimate currency. <strong className="text-white">The Prime Media</strong> combines strategic narrative design, high-production reel storytelling, and performance marketing to build brands that remain unforgettable.
              </p>

              <p>
                We do not believe in superficial vanity metrics or cookie-cutter campaigns. Every visual identity, video script, and target ad funnel is engineered with deliberate purpose to drive customer acquisition and long-term brand equity.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Editorial Strategic Pillars */}
      <section className="py-28 lg:py-40 bg-[#0e0e0e] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-[#F59D6A] text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                CORE CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                Our Core Pillars <br />
                <span className="font-serif italic text-gray-300">of Practice.</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-md font-light">
              Four specialized disciplines designed to take your brand from initial positioning to dominant industry authority.
            </p>
          </div>

          {/* Editorial Accordion-style List */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors px-4 rounded-lg group"
              >
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="text-xs font-mono text-[#EC4B46] tracking-widest">{p.number}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{p.subtitle}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-[#EC4B46] transition-colors">
                    {p.title}
                  </h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Luxury Closing CTA */}
      <section className="py-32 lg:py-44 bg-[#0a0a0a] text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
          <span className="text-[#EC4B46] text-xs uppercase tracking-[0.3em] font-semibold block mb-6">
            ELEVATE YOUR BRAND
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            Your Brand, at it&apos;s <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#F59D6A]">
              Prime.
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Let&rsquo;s discuss your visual identity, content strategy, and commercial targets.
          </p>

          <div className="flex flex-wrap justify-center gap-6 items-center">
            <Link
              href="/contact"
              className="inline-block text-xs font-semibold uppercase tracking-[2.5px] text-white bg-[#EC4B46] hover:bg-[#d63d38] px-9 py-4.5 transition-all shadow-xl shadow-[#EC4B46]/10"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/careers"
              className="inline-block text-xs font-semibold uppercase tracking-[2.5px] text-gray-300 hover:text-white border-b border-white/30 hover:border-white py-2 transition-all"
            >
              Join Our Team &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
