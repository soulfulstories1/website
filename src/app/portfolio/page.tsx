import Link from "next/link";

const categories = [
  "All", "Social Media Management", "Content Creation", "Branding", "Website Design", "LinkedIn Personal Branding", "Performance Marketing"
];

const portfolioItems = [
  { title: "Wellness Brand Co.", category: "Social Media Management", image: "/assets/portfolio-00002-free-img.jpg" },
  { title: "Tech Startup X", category: "Branding", image: "/assets/portfolio-00006-free-img.jpg" },
  { title: "Fashion Label Y", category: "Content Creation", image: "/assets/portfolio-0001-free-img.jpg" },
  { title: "Restaurant Group Z", category: "Performance Marketing", image: "/assets/portfolio-0008-free-img.jpg" },
  { title: "Real Estate Firm", category: "Website Design", image: "/assets/portfolio-0004-free-img.jpg" },
  { title: "E-Commerce Brand", category: "Social Media Management", image: "/assets/portfolio-0005-free-img.jpg" },
  { title: "Consulting Agency", category: "LinkedIn Personal Branding", image: "/assets/portfolio-0007-free-img.jpg" },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-24"
        style={{ backgroundImage: "url('/assets/bg-16-free-img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/90 to-[#0b0c10]/40" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16">
          <h1 className="text-[90px] sm:text-[130px] lg:text-[180px] font-bold text-white leading-none tracking-tight mb-4 lg:-ml-2">
            Portfolio
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6" />
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-[1.3] max-w-xl">
                Real results. Real transformations. See how we&rsquo;ve helped brands become impossible to ignore.
              </p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
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
          <div className="aspect-square bg-gradient-to-b from-[#EC4B46] from-50% to-[#F59D6A] to-50% flex flex-col items-center justify-center text-center">
            <div className="h-1/2 w-full flex items-center justify-center p-8">
              <h3 className="text-3xl lg:text-[34px] font-bold text-white leading-tight">
                Next Project Will<br />Be Yours
              </h3>
            </div>
            <div className="h-1/2 w-full flex items-center justify-center p-8">
              <Link
                href="/contact"
                className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-white border-2 border-white px-8 py-4 hover:bg-white hover:text-[#F59D6A] transition-colors"
              >
                GET STARTED NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[42px] font-bold text-white text-center mb-4">
            Client Testimonials
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            See what our clients have to say about working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Our engagement rates tripled within the first two months. The team's content strategy completely transformed how our audience sees us.", name: "Sarah Mitchell", title: "Founder, Wellness Brand Co." },
              { quote: "They understood our vision immediately and brought it to life. The website they built for us is our single biggest lead generation tool.", name: "James Park", title: "CEO, Tech Startup X" },
              { quote: "Working with The Prime Media felt like a true partnership. They cared about our brand as much as we did.", name: "Priya Sharma", title: "CMO, Fashion Label Y" },
            ].map((t) => (
              <div key={t.name} className="bg-[#222222] p-8 rounded-lg border border-white/5">
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
    </>
  );
}
