import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#EC4B46] mt-1 mr-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const FunnelDollarIcon = () => (
  <svg className="w-10 h-10 text-white mb-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.5 3H1.5C0.7 3 0 3.7 0 4.5v1.8c0 1.2 0.6 2.3 1.5 3l7.5 6.2v6c0 0.6 0.4 1.2 1 1.4l4.5 1.5c0.8 0.3 1.5-0.3 1.5-1V15.5l7.5-6.2c0.9-0.7 1.5-1.8 1.5-3V4.5C24 3.7 23.3 3 22.5 3zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
  </svg>
);

const services = [
  {
    id: "01",
    title: "Social Media Management",
    color: "bg-[#EC4B46]",
    includes: [
      "Content strategy",
      "Content calendar",
      "Graphic design",
      "Reel planning",
      "Posting and scheduling",
      "Community management",
      "Monthly reporting",
    ],
    benefits: [
      "Consistent online presence",
      "Increased engagement",
      "Stronger brand awareness",
    ],
  },
  {
    id: "02",
    title: "Content Creation",
    color: "bg-[#F59D6A]",
    includes: [
      "Reels",
      "Photography",
      "Product shoots",
      "Video editing",
      "Script writing",
      "Creative concepts",
    ],
    benefits: [
      "High-quality content",
      "Better audience retention",
      "Stronger storytelling",
    ],
  },
  {
    id: "03",
    title: "Branding",
    color: "bg-[#EC4B46]",
    includes: [
      "Logo design",
      "Brand identity",
      "Brand guidelines",
      "Typography and color systems",
      "Brand messaging",
    ],
    benefits: [
      "Professional brand image",
      "Better recognition",
      "Consistent communication",
    ],
  },
  {
    id: "04",
    title: "Website Design",
    color: "bg-[#F59D6A]",
    includes: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
    ],
    benefits: [
      "Professional online presence",
      "Better user experience",
      "Increased conversions",
    ],
  },
  {
    id: "05",
    title: "LinkedIn Personal Branding",
    color: "bg-[#EC4B46]",
    includes: [
      "Profile optimization",
      "Content strategy",
      "Post creation",
      "Thought leadership development",
    ],
    benefits: [
      "Increased visibility",
      "Strong personal brand",
      "Professional authority",
    ],
  },
  {
    id: "06",
    title: "Performance Marketing",
    color: "bg-[#F59D6A]",
    includes: [
      "Meta Ads",
      "Lead generation campaigns",
      "Conversion campaigns",
      "Retargeting strategies",
    ],
    benefits: [
      "Increased leads",
      "Better ROI",
      "Faster business growth",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-24"
        style={{ backgroundImage: "url('/assets/services-hero-demo.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/90 to-[#0b0c10]/40" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16">
          <h1 className="text-[90px] sm:text-[130px] lg:text-[180px] font-bold text-white leading-none tracking-tight mb-4 lg:-ml-2">
            Services
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6" />
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-[1.3] max-w-xl">
                We offer a full range of creative and marketing services to make your brand impossible to ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - What We Do */}
      <section
        className="min-h-screen flex items-center py-24 lg:py-32 bg-[#181818] relative bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/services-bg-overlay-01.png')",
          backgroundPosition: "left center",
          backgroundSize: "auto 100%"
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            <div className="max-w-lg">
              <h6 className="text-[#999999] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
                WHAT WE DO
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.2]">
                What We Do
              </h2>
            </div>

            <div className="lg:pl-16 max-w-lg">
              <h3 className="text-xl lg:text-[22px] font-bold text-white mb-6">
                From strategy to execution — we help brands at every stage.
              </h3>
              <p className="text-[#a3a3a3] text-[15px] leading-[1.8] mb-10">
                From building a brand from scratch to scaling your online presence, we cover the full marketing spectrum. Our team combines creative vision with data-driven strategies to deliver content, campaigns, and experiences that actually move the needle. Whether you need a social media engine, a complete rebrand, or a high-converting website — we bring the expertise to make it happen.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-[#d1d1d1] text-[13px] uppercase tracking-[0.1em] font-semibold">STRATEGY & EXECUTION</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-[#d1d1d1] text-[13px] uppercase tracking-[0.1em] font-semibold">CREATIVE EXCELLENCE</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="text-[#d1d1d1] text-[13px] uppercase tracking-[0.1em] font-semibold">MEASURABLE RESULTS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#1a1a1a] min-h-screen flex items-center py-24 lg:py-32">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.id} className={`${service.color} p-12 lg:p-20 text-white rounded-sm`}>
                <FunnelDollarIcon />
                <h3 className="text-3xl font-bold mb-1">{service.title}</h3>
                <div className="text-[13px] font-semibold opacity-90 mb-10">{service.id}</div>
                <div className="text-white/90 text-[15px] leading-[1.8] space-y-6">
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Includes:</h4>
                    <ul className="space-y-1.5">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-white/50">&#8226;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Benefits:</h4>
                    <ul className="space-y-1.5">
                      {service.benefits.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-white/50">&#10022;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section
        className="relative min-h-screen flex items-center py-28 lg:py-40 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/services-bg-01.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h6 className="text-[#999999] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
              LET&apos;S TALK
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.3] mb-12">
              Ready to get started?
            </h2>
            <p className="text-[#a3a3a3] text-lg leading-[1.8] mb-10 max-w-lg">
              Let&apos;s talk about how we can take your brand to its Prime.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border-2 border-white text-white text-sm font-semibold tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
