export default function About() {
  const values = [
    { name: "Creativity", desc: "Every brand has a unique story worth telling." },
    { name: "Strategy", desc: "Every decision should have purpose and direction." },
    { name: "Authenticity", desc: "Real brands build real connections." },
    { name: "Growth", desc: "Focused on sustainable long-term success." },
    { name: "Partnership", desc: "We grow alongside our clients." },
  ];

  const acts = [
    { act: "Act 1", title: "Discovery", desc: "Understanding the business, audience, goals, and market." },
    { act: "Act 2", title: "Character Development", desc: "Building brand positioning, identity, and messaging." },
    { act: "Act 3", title: "Storytelling", desc: "Creating engaging content and campaigns." },
    { act: "Act 4", title: "Spotlight", desc: "Growing visibility, engagement, and audience reach." },
    { act: "Act 5", title: "Legacy", desc: "Establishing authority and long-term brand recognition." },
  ];

  const differentiators = [
    { title: "Strategy-First Approach", desc: "Every decision is intentional, backed by research and a clear growth roadmap." },
    { title: "Creative Storytelling", desc: "We craft narratives that captivate audiences and make your brand unforgettable." },
    { title: "Personalized Service", desc: "You are not a ticket in a queue. You get dedicated attention and custom solutions." },
    { title: "Measurable Growth", desc: "We focus on real metrics that move the needle — traffic, engagement, and conversions." },
    { title: "Long-Term Partnerships", desc: "We invest in your success because your growth is our growth." },
  ];

  return (
    <>
      <section
        className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/about-hero-demo.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-20">
          <h1 className="text-[110px] sm:text-[160px] lg:text-[220px] font-bold text-white leading-none tracking-tight mb-4 lg:-ml-2">
            About
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5" />
            <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
              <p className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-[1.3] mb-6 max-w-2xl">
                We created Main Character Media because we saw great brands going unnoticed.
              </p>
              <p className="text-base sm:text-lg text-[#a3a3a3] leading-relaxed max-w-2xl">
                The market was crowded. Most agencies treated clients like numbers. We believed every brand deserves to be the main character in its own story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#1a1a1a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            <div className="max-w-lg">
              <h6 className="text-[#EC4B46] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
                OUR MISSION
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.2]">
                To help brands build meaningful digital presence and become impossible to ignore.
              </h2>
            </div>

            <div className="lg:pt-[140px] lg:pl-16 max-w-lg">
              <h6 className="text-[#F59D6A] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
                OUR VISION
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.2]">
                To become the creative growth partner behind the next generation of standout brands.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 lg:py-36 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/about-wave-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h6 className="text-[#EC4B46] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
              WHAT WE STAND FOR
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.3]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div
                key={v.name}
                className={`bg-[#222222]/80 backdrop-blur-sm p-8 rounded-lg border-l-4 ${i % 2 === 0 ? "border-[#EC4B46]" : "border-[#F59D6A]"} hover:bg-[#222222] transition-colors`}
              >
                <h3 className="text-white text-lg font-bold mb-3">{v.name}</h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h6 className="text-[#EC4B46] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
              OUR PROCESS
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.3] mb-4">
              The Main Character Framework™
            </h2>
            <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
              Our proprietary process for making brands unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {acts.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-8 bg-[#222222] rounded-lg border border-gray-800 hover:border-[#EC4B46]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EC4B46] to-[#F59D6A] flex items-center justify-center mb-6 shadow-lg shadow-[#EC4B46]/20">
                  <span className="text-white text-xl font-bold">{i + 1}</span>
                </div>
                <span className="text-[#EC4B46] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
                  {item.act}
                </span>
                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h6 className="text-[#EC4B46] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
              WHY BRANDS CHOOSE US
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.3]">
              Why Brands Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-[#222222] rounded-lg border border-gray-800 hover:border-[#F59D6A]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EC4B46]/20 to-[#F59D6A]/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#EC4B46]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
