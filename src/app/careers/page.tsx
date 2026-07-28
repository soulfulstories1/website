import Link from "next/link";

const perks = [
  { title: "Creative Freedom", desc: "Own your work. We trust our team to do what they do best." },
  { title: "Growth Mindset", desc: "We invest in your development with learning budgets and mentorship." },
  { title: "Remote-First", desc: "Work from anywhere. Results matter more than hours logged." },
  { title: "Real Impact", desc: "Your work directly shapes brands and drives measurable results." },
  { title: "Great Culture", desc: "Collaborative, supportive, and never boring." },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60"
        style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h6 className="text-white text-sm uppercase tracking-[2px] font-thin mb-6">Careers</h6>
            <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-semibold text-white leading-[1.1] mb-6">
              Join the Main Cast.
            </h1>
            <p className="text-white/75 text-[15px] font-medium leading-[24.75px] max-w-xl">
              We&rsquo;re always looking for talented creatives, marketers, designers, and storytellers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h6 className="text-white/50 text-sm uppercase tracking-[2px] font-thin mb-4">Why Join Us</h6>
            <h2 className="text-3xl lg:text-[45px] font-semibold text-white leading-[1.3]">
              Why Work With Main Character Media.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white/5 border border-white/5 p-8 hover:border-white/10 transition-all">
                <div className="w-10 h-0.5 bg-[#EC4B46] mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{perk.title}</h3>
                <p className="text-white/50 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 lg:py-28 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h6 className="text-white/50 text-sm uppercase tracking-[2px] font-thin mb-4">Our Culture</h6>
              <h2 className="text-3xl lg:text-[45px] font-semibold text-white leading-[1.3] mb-6">
                We believe in doing great work with great people.
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                We&rsquo;re a lean, ambitious team of creatives, strategists, and builders who care deeply about the work we put out. There&rsquo;s no bureaucracy, no pointless meetings — just real ownership and a shared mission to make brands unforgettable.
              </p>
              <p className="text-white/40 text-sm">
                We value curiosity over ego, initiative over waiting for permission, and quality over speed.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#EC4B46] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold italic">MCM</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Main Character Media</p>
                  <p className="text-white/40 text-sm">Creative Growth Agency</p>
                </div>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed">
                &ldquo;Your brand is the main character. We help write the story.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h6 className="text-white/50 text-sm uppercase tracking-[2px] font-thin mb-4">Open Positions</h6>
            <h2 className="text-3xl lg:text-[45px] font-semibold text-white leading-[1.3] mb-4">
              Currently Not Hiring.
            </h2>
            <p className="text-white/50 leading-relaxed">
              We&rsquo;re not actively recruiting right now, but we&rsquo;re always interested in connecting with talented creatives, marketers, designers, and storytellers.
            </p>
          </div>

          <div className="max-w-lg bg-surface-dark/50 border border-white/5 p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Send us your portfolio and resume. We&rsquo;ll reach out when a role opens that matches your skills.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium uppercase tracking-[2px] text-white border-[1.6px] border-white px-[30px] py-[15px] hover:bg-white hover:text-surface-dark transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
