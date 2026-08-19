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
  {
    quote: "The Prime Media completely changed the way we present our brand online. From content creation to social media management, their team understands what works and executes it beautifully.",
    name: "Riya Sharma",
    title: "Founder, Lifestyle Brand",
  },
  {
    quote: "What impressed us most was how well they understood our brand. Every post, reel and campaign felt intentional, creative and aligned with our goals.",
    name: "Aman Mehta",
    title: "Business Owner",
  },
  {
    quote: "We no longer have to worry about what to post or how to promote it. The Prime Media handles everything with creativity, consistency and professionalism.",
    name: "Neha Agarwal",
    title: "Founder, Fashion Brand",
  },
  {
    quote: "Their content doesn’t just look good—it gets people talking. Our social media presence has become much more engaging since working with The Prime Media.",
    name: "Rahul Jain",
    title: "Entrepreneur",
  },
  {
    quote: "From strategy and designing to reels and campaigns, the team has been incredibly easy to work with. They truly feel like an extension of our own team.",
    name: "Priya Kapoor",
    title: "Marketing Head",
  },
  {
    quote: "If you’re looking for a team that combines creativity with strategy, The Prime Media is definitely worth working with. They helped us bring our brand to its prime.",
    name: "Karan Malhotra",
    title: "Founder, D2C Brand",
  },
];

const clientLogos = Array.from({ length: 11 }, (_, i) => ({
  src: `/clients/client-${i + 1}.png`,
  alt: `Client Logo ${i + 1}`,
}));

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60"
        style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2.5 text-[#EC4B46] text-xs font-semibold uppercase tracking-[0.25em] mb-6 px-4 py-2 rounded-full bg-[#EC4B46]/10 border border-[#EC4B46]/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#EC4B46] animate-pulse" />
              Creative Growth Agency
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-bold text-white leading-[1.08] tracking-tight mb-8">
              Your Brand,{" "}
              <span className="whitespace-nowrap">
                at it&apos;s{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#F59D6A]">
                  Prime.
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-[22px] font-light leading-relaxed mb-12 max-w-2xl">
              We help brands build a meaningful digital presence, craft viral content, and become impossible to ignore.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-white bg-[#EC4B46] hover:bg-[#d63d38] px-8 py-4 sm:px-9 sm:py-4.5 transition-all shadow-lg shadow-[#EC4B46]/25 hover:shadow-xl hover:shadow-[#EC4B46]/40 hover:-translate-y-0.5"
              >
                Book a Discovery Call &rarr;
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-white/80 border border-white/30 hover:border-white hover:text-white px-8 py-4 sm:px-9 sm:py-4.5 transition-all backdrop-blur-xs hover:bg-white/5 hover:-translate-y-0.5"
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
                The Prime Media solves this. We make your brand impossible to ignore.
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
              We believe in unlocking your brand&apos;s highest potential. Our job is to help you build that legacy — through strategy, creativity, and relentless execution. We don&apos;t just market brands. We build narratives that captivate, identities that resonate, and presences that demand attention.
            </p>
            <p className="text-white/50 text-lg italic">
              &ldquo;Your Brand, at it&apos;s Prime.&rdquo;
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
      <section className="py-24 lg:py-32 bg-[#181818] overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <h6 className="text-[#EC4B46] text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            TRUSTED PARTNERS
          </h6>
          <h2 className="text-3xl lg:text-[42px] font-bold text-white tracking-tight">
            Brands We&apos;ve Helped Shine
          </h2>
        </div>

        {/* Logo Grid container with clean cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.src}
                className="group relative h-40 sm:h-48 bg-zinc-900/60 rounded-2xl border border-white/5 hover:border-white/20 flex items-center justify-center p-6 transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-28 w-auto max-w-[220px] object-contain opacity-70 grayscale filter group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* 12th card for visual balance */}
            <div className="group relative h-40 sm:h-48 bg-zinc-900/30 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-[#EC4B46] font-bold text-xl mb-2">+ Your Brand</span>
              <span className="text-white/40 text-xs">Be Next</span>
            </div>
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
            Ready to Take Your Brand<br />To its Prime?
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
