import Link from "next/link";

const services = [
  { number: "01", title: "Social Media Management", desc: "Content strategy, scheduling, graphic design, reel planning, community management, and monthly reporting to keep your brand visible every day.", color: "bg-[#EC4B46]" },
  { number: "02", title: "Content Creation", desc: "High-quality reels, photography, product shoots, video editing, and script writing that capture attention and tell your story.", color: "bg-[#F59D6A]" },
  { number: "03", title: "Branding", desc: "Logo design, brand identity, guidelines, typography, color systems, and messaging that make your brand instantly recognizable.", color: "bg-[#EC4B46]" },
  { number: "04", title: "Website Design", desc: "Business websites, landing pages, portfolio sites, and e-commerce experiences built for conversions and user delight.", color: "bg-[#F59D6A]" },
  { number: "05", title: "LinkedIn Personal Branding", desc: "Profile optimization, content strategy, post creation, and thought leadership development for professionals and executives.", color: "bg-[#EC4B46]" },
  { number: "06", title: "Performance Marketing", desc: "Meta Ads, lead generation, conversion campaigns, and retargeting strategies that deliver measurable ROI.", color: "bg-[#F59D6A]" },
];

const portfolioItems = [
  { title: "Wellness Brand Co.", category: "Social Media Management", image: "/assets/portfolio-1.jpg" },
  { title: "Tech Startup X", category: "Branding & Web Design", image: "/assets/portfolio-2.jpg" },
  { title: "Fashion Label Y", category: "Content Creation", image: "/assets/portfolio-3.jpg" },
  { title: "Restaurant Group Z", category: "Performance Marketing", image: "/assets/portfolio-4.jpg" },
  { title: "Real Estate Firm", category: "Branding", image: "/assets/portfolio-5.jpg" },
  { title: "E-Commerce Brand", category: "Social Media & Ads", image: "/assets/portfolio-6.jpg" },
  { title: "Consulting Agency", category: "LinkedIn Branding", image: "/assets/portfolio-7.jpg" },
];

const testimonials = [
  { quote: "They transformed our social media presence entirely. Our engagement is up 300% and we're finally seeing real ROI from our content.", name: "Sarah Mitchell", title: "Founder, Wellness Brand Co." },
  { quote: "Main Character Media didn't just build our website — they helped us find our voice. Our conversion rate doubled within three months.", name: "James Park", title: "CEO, Tech Startup X" },
  { quote: "The team's strategic approach to our brand identity was exactly what we needed. We went from invisible to unforgettable in six months.", name: "Priya Sharma", title: "CMO, Fashion Label Y" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60"
        style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-semibold text-white leading-[1.1] lg:leading-[1.4] mb-6">
              Making Your Brand the Main Character.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              We help brands build meaningful digital presence and become impossible to ignore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block text-sm font-medium uppercase tracking-[2px] text-white border-[1.6px] border-white px-[30px] py-[15px] hover:bg-white hover:text-surface-dark transition-all"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-sm font-medium uppercase tracking-[2px] text-white/70 border-[1.6px] border-white/30 px-[30px] py-[15px] hover:border-white hover:text-white transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-28 lg:py-36 bg-[#222222]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-lg">
              <h6 className="text-[#EC4B46] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
                THE PROBLEM
              </h6>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-[1.2] mb-6">
                Great Brands Often<br />Go Unnoticed.
              </h2>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-10">
                In a crowded digital landscape, even the best brands struggle to break through. Without the right strategy, your message gets lost.
              </p>
            </div>
            <div className="max-w-lg">
              <ul className="space-y-6">
                {[
                  { problem: "Lack of visibility", desc: "Your audience can't find you." },
                  { problem: "Inconsistent branding", desc: "Your message gets mixed up." },
                  { problem: "Poor content strategy", desc: "Your content doesn't connect." },
                  { problem: "Low engagement", desc: "Your audience isn't interacting." },
                  { problem: "Crowded markets", desc: "You blend in when you should stand out." },
                ].map((item) => (
                  <li key={item.problem} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC4B46] mt-2 shrink-0" />
                    <div>
                      <strong className="text-white text-sm">{item.problem}</strong>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-[15px] leading-relaxed mt-10">
                Main Character Media solves this. We make your brand impossible to ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-28 lg:py-36 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h6 className="text-[#F59D6A] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
              OUR PHILOSOPHY
            </h6>
            <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-[1.2] mb-6">
              Every Brand Deserves the Spotlight.
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We believe your brand is the main character of its own story. Our job is to help you write that story — through strategy, creativity, and relentless execution. We don't just market brands. We build narratives that captivate, identities that resonate, and presences that demand attention.
            </p>
            <p className="text-white/50 text-lg italic">
              &ldquo;Your brand is the main character. We help write the story.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[42px] font-bold text-white text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.number} className={`${s.color} p-8 lg:p-9 text-white group`}>
                <div className="text-4xl mb-6 opacity-80">
                  {s.number === "01" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {s.number === "02" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
                  {s.number === "03" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
                  {s.number === "04" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {s.number === "05" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                  {s.number === "06" && <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{s.number}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link href="/services" className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors">
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 lg:py-36 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[42px] font-bold text-white text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            Real results from real partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#1a1a1a] p-8 rounded-lg border border-white/5">
                <div className="text-[#EC4B46] text-3xl leading-none mb-6">&ldquo;</div>
                <p className="text-white/70 text-sm leading-relaxed mb-8">{t.quote}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 lg:py-28 bg-[#222222]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-16 tracking-wide">
            Brands We've Helped Shine
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="relative h-36 sm:h-44 flex items-center justify-center p-6 group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gray-700/50" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-700/50" />
                {i > 4 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gray-700/50" />
                )}
                <img
                  src={`/assets/client-logo-${i % 2 === 0 ? 2 : 1}.png`}
                  alt={`Client Logo ${i}`}
                  className="max-h-9 max-w-[140px] object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden bg-zinc-900"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl lg:text-[28px] font-bold text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
          {/* CTA Box */}
          <div className="aspect-square bg-[#EC4B46] flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
              Next Project Will<br />Be Yours
            </h3>
            <Link
              href="/contact"
              className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-white border border-white px-8 py-4 hover:bg-white hover:text-[#EC4B46] transition-colors"
            >
              GET STARTED NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 lg:py-36 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h6 className="text-[#EC4B46] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
            LET&apos;S BEGIN
          </h6>
          <h2 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.2] mb-6">
            Ready to Become the<br />Main Character?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Let&apos;s write your brand&apos;s next chapter together.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-medium uppercase tracking-[2px] text-white bg-[#EC4B46] px-[36px] py-[16px] hover:bg-[#d6413d] transition-all"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
