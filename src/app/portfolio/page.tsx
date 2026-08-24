import Link from "next/link";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";

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

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
        {/* Full-coverage background image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/assets/bg-16-free-img.jpg"
            alt="Portfolio at The Prime Media"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/90 to-[#0b0c10]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
          <Reveal preset="fade-up" duration={0.8}>
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
          </Reveal>
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
          <div className="aspect-square bg-gradient-to-br from-[#134981] to-[#16B0C7] flex flex-col items-center justify-center text-center">
            <div className="h-1/2 w-full flex items-center justify-center p-8">
              <h3 className="text-3xl lg:text-[34px] font-bold text-white leading-tight">
                Next Project Will<br />Be Yours
              </h3>
            </div>
            <div className="h-1/2 w-full flex items-center justify-center p-8">
              <Link
                href="/contact"
                className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-white border-2 border-white px-8 py-4 hover:bg-white hover:text-[#134981] transition-colors"
              >
                GET STARTED NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#0c0e14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal preset="fade-up" className="text-center mb-4">
            <h2 className="text-3xl lg:text-[42px] font-bold text-white">
              Client Testimonials
            </h2>
          </Reveal>
          <Reveal preset="fade-up" delay={0.1} className="text-center mb-16 max-w-xl mx-auto">
            <p className="text-white/50">
              See what our clients have to say about working with us.
            </p>
          </Reveal>
          <StaggerContainer
            staggerDelay={0.1}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 snap-x snap-mandatory brand-scrollbar"
          >
            {testimonials.map((t) => (
              <StaggerItem
                key={t.name}
                className="bg-[#11141d] p-8 rounded-lg border border-white/5 hover:border-[#16B0C7]/30 transition-all w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#16B0C7] text-3xl leading-none mb-6">&ldquo;</div>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">{t.quote}</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.title}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-xs text-white/40 tracking-wider">
            <span className="text-[#16B0C7]">←</span> Swipe to read all client reviews <span className="text-[#16B0C7]">→</span>
          </div>
        </div>
      </section>
    </>
  );
}
