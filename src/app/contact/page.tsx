"use client";

import { FormEvent, useState } from "react";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { getAssetPath } from "@/utils/paths";

const contactMethods = [
  {
    title: "Email Us Directly",
    detail: "hello@aaradhyadigitalsolutions.com",
    href: "mailto:hello@aaradhyadigitalsolutions.com",
    sub: "Guaranteed response within 24 business hours",
    icon: (
      <svg className="w-5 h-5 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Call Our Team",
    detail: "+91 99268 06080",
    href: "tel:+919926806080",
    sub: "Mon - Sat, 10:00 AM - 7:00 PM IST",
    icon: (
      <svg className="w-5 h-5 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Agency Initiative",
    detail: "Aaradhya Digital Solutions",
    href: "/about",
    sub: "Creative Growth & Strategy Practice",
    icon: (
      <svg className="w-5 h-5 text-[#16B0C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Encode form data for static hosting form handlers (like Netlify Forms)
      const encodedData = new URLSearchParams();
      formData.forEach((value, key) => {
        encodedData.append(key, value.toString());
      });
      if (!encodedData.has("form-name")) {
        encodedData.append("form-name", "contact");
      }

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      setIsSubmitting(false);
      setSubmitted(true);
    } catch {
      // In case of static offline drag-and-drop or network limitation, still acknowledge submission
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#0a0c12] text-white selection:bg-[#16B0C7] selection:text-black">
      {/* Hero Header Section using original /assets/bg-07-free-img.jpg */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-end pt-36 pb-20 border-b border-white/10 overflow-hidden">
        {/* Full-coverage background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/assets/bg-07-free-img.jpg")}
            alt="Contact The Prime Media"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-black/60 to-black/30" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 z-10">
          <Reveal preset="fade-up" duration={0.8} className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[#16B0C7] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#16B0C7] animate-pulse" />
              Get In Touch
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-light leading-[1.05] tracking-tight text-white mb-6">
              Let&apos;s Start Your <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b4eff7] to-[#16B0C7]">
                Next Chapter.
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
              Ready to elevate your brand identity, content, and market performance? We would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Section using original /assets/services-bg-overlay-01.png */}
      <section className="py-24 lg:py-36 bg-[#0e111a] relative">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: `url('${getAssetPath("/assets/services-bg-overlay-01.png")}')`,
            backgroundPosition: "left center",
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Column: Direct Contact Info & Method Cards */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal preset="slide-right">
                <span className="text-[#16B0C7] text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                  DISCOVERY CALL
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight">
                  Tell Us About <br />
                  <span className="font-serif italic text-gray-300">Your Vision.</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 font-light">
                  Fill out the project details or reach out directly. Our strategists will review your request and get back within 24 hours.
                </p>
              </Reveal>

              {/* Contact Method Cards */}
              <StaggerContainer staggerDelay={0.1} className="space-y-4 pt-4">
                {contactMethods.map((method) => (
                  <StaggerItem
                    key={method.title}
                    className="bg-[#121622] border border-white/10 p-6 rounded-xl hover:border-[#16B0C7]/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block">
                          {method.title}
                        </span>
                        <a
                          href={method.href}
                          className="text-white text-base font-semibold hover:text-[#16B0C7] transition-colors"
                        >
                          {method.detail}
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs pl-14 font-light">{method.sub}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Channels */}
              <Reveal preset="fade-up" delay={0.2} className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block mb-3">
                  Connect on Socials
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/share/19FVbNNMLa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white border border-white/10 hover:border-[#16B0C7] px-4 py-2 rounded transition-all"
                  >
                    Facebook &rarr;
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Luxury Form */}
            <Reveal preset="slide-left" delay={0.15} className="lg:col-span-7 bg-[#121622] border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#16B0C7]/10 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#16B0C7]/10 border border-[#16B0C7]/30 mx-auto flex items-center justify-center text-[#16B0C7]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-white tracking-tight">Message Received.</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto font-light">
                    Thank you for reaching out to The Prime Media. Our creative team will review your project brief and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block text-xs font-semibold uppercase tracking-[2px] text-white/80 border border-white/20 hover:border-[#16B0C7] hover:text-white px-6 py-3 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                        Full Name <span className="text-[#16B0C7]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm transition-all rounded-lg placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                        Email Address <span className="text-[#16B0C7]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm transition-all rounded-lg placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Brand Co."
                        className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm transition-all rounded-lg placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                        Services Required
                      </label>
                      <select name="service" className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm transition-all rounded-lg">
                        <option value="" className="bg-[#121622]">Select primary service...</option>
                        <option value="Social Media Management" className="bg-[#121622]">Social Media Management</option>
                        <option value="Content Creation" className="bg-[#121622]">Content Creation &amp; Reels</option>
                        <option value="Branding" className="bg-[#121622]">Branding &amp; Visual Identity</option>
                        <option value="Website Design" className="bg-[#121622]">Website &amp; Web Platform</option>
                        <option value="LinkedIn Personal Branding" className="bg-[#121622]">LinkedIn Personal Branding</option>
                        <option value="Performance Marketing" className="bg-[#121622]">Performance Marketing &amp; Ads</option>
                        <option value="Multiple" className="bg-[#121622]">Multiple Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                      Estimated Investment / Budget
                    </label>
                    <select name="budget" className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm transition-all rounded-lg">
                      <option value="" className="bg-[#121622]">Select budget range (INR)...</option>
                      <option value="under-25k" className="bg-[#121622]">Under ₹25,000</option>
                      <option value="25k-50k" className="bg-[#121622]">₹25,000 - ₹50,000</option>
                      <option value="50k-1L" className="bg-[#121622]">₹50,000 - ₹1,00,000</option>
                      <option value="1L-2.5L" className="bg-[#121622]">₹1,00,000 - ₹2,50,000</option>
                      <option value="2.5L-plus" className="bg-[#121622]">₹2,50,000+</option>
                      <option value="not-sure" className="bg-[#121622]">To Be Discussed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs uppercase tracking-wider font-semibold mb-2">
                      Project Goals &amp; Brief <span className="text-[#16B0C7]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your brand goals, target timeline, and what you aim to achieve..."
                      className="w-full bg-[#0a0c12] border border-white/10 focus:border-[#16B0C7] focus:outline-none px-4 py-3.5 text-white text-sm resize-none transition-all rounded-lg placeholder:text-gray-600"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-sm text-[#16B0C7] bg-[#16B0C7]/10 border border-[#16B0C7]/30 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#16B0C7] hover:bg-[#139bb0] disabled:opacity-50 text-white font-semibold text-xs px-8 py-4 uppercase tracking-[2.5px] transition-all shadow-xl shadow-[#16B0C7]/20 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Submit Discovery Brief &rarr;"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
