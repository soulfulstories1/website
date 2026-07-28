"use client";

import { FormEvent } from "react";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-24"
        style={{ backgroundImage: "url('/assets/bg-07-free-img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/90 to-[#0b0c10]/40" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col gap-4 pt-16">
          <div className="w-full">
            <h1 className="text-[100px] sm:text-[140px] lg:text-[180px] font-bold text-white leading-[1] tracking-tight lg:-ml-2">
              Contact
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <div className="max-w-xl">
              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-[1.3]">
                Ready to start your brand&rsquo;s next chapter? Let&rsquo;s talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: "url('/assets/services-bg-overlay-01.png')",
            backgroundPosition: "left center",
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Column - Contact Info */}
            <div className="max-w-md lg:pt-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] mb-8">
                Let&apos;s write your brand&apos;s next chapter.
              </h2>
              <p className="text-[#a3a3a3] text-[15px] leading-relaxed mb-12">
                Tell us about your project. We&apos;ll get back to you within 24 hours to schedule a discovery call.
              </p>

              <div className="space-y-8">
                <div>
                  <h5 className="text-base font-bold text-white mb-2">Email</h5>
                  <p className="text-[#a3a3a3] text-sm">
                    hello@maincharactermedia.com
                  </p>
                </div>
                <div>
                  <h5 className="text-base font-bold text-white mb-2">Follow Us</h5>
                  <div className="flex flex-wrap gap-4">
                    {["Instagram", "LinkedIn", "YouTube", "Twitter", "Facebook"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-sm text-[#a3a3a3] hover:text-[#EC4B46] transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:pt-4">
              <form className="space-y-6" onSubmit={(e: FormEvent) => e.preventDefault()}>
                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Full Name <span className="text-[#EC4B46]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm transition-colors rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Email Address <span className="text-[#EC4B46]">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm transition-colors rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm transition-colors rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Services Required
                  </label>
                  <select className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm transition-colors rounded-md">
                    <option value="" className="bg-[#1A1A1A]">Select a service...</option>
                    <option value="Social Media Management" className="bg-[#1A1A1A]">Social Media Management</option>
                    <option value="Content Creation" className="bg-[#1A1A1A]">Content Creation</option>
                    <option value="Branding" className="bg-[#1A1A1A]">Branding</option>
                    <option value="Website Design" className="bg-[#1A1A1A]">Website Design</option>
                    <option value="LinkedIn Personal Branding" className="bg-[#1A1A1A]">LinkedIn Personal Branding</option>
                    <option value="Performance Marketing" className="bg-[#1A1A1A]">Performance Marketing</option>
                    <option value="Multiple" className="bg-[#1A1A1A]">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Estimated Budget
                  </label>
                  <select className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm transition-colors rounded-md">
                    <option value="" className="bg-[#1A1A1A]">Select a range...</option>
                    <option value="under-5k" className="bg-[#1A1A1A]">Under $5,000</option>
                    <option value="5k-10k" className="bg-[#1A1A1A]">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-[#1A1A1A]">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-[#1A1A1A]">$25,000 - $50,000</option>
                    <option value="50k-plus" className="bg-[#1A1A1A]">$50,000+</option>
                    <option value="not-sure" className="bg-[#1A1A1A]">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-[13px] font-bold mb-3">
                    Project Details <span className="text-[#EC4B46]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 focus:border-white outline-none px-4 py-3.5 text-white text-sm resize-none transition-colors rounded-md"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#EC4B46] hover:bg-[#d6413d] text-white font-bold text-[13px] px-8 py-3.5 tracking-[0.1em] rounded-sm transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
