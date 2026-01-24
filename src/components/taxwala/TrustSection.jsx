import React from "react";
import { testimonials } from "./content";

const trustBullets = [
  "Bank-level 256-bit encryption",
  "ISO 27001 compliant infrastructure",
  "Your data never leaves India",
];

const TrustSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
        <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <span className="text-sm font-bold">3</span>
        </div>
        <div className="h-px w-12 bg-gray-900" />
        <span className="text-sm font-semibold uppercase tracking-wider">Trust & Security</span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
        Built by experts, trusted by businesses
      </h2>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16 reveal-on-scroll">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Powered by</p>
                <p className="text-xl font-bold">Elitale Softwares Private Limited</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A registered Indian company building the future of tax automation. Our team combines expertise in AI, finance, and Indian tax regulations to deliver a product you can trust.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {trustBullets.map((text) => (
              <div key={text} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((item, idx) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-on-scroll"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-primary/20"
              />
              <div>
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic mb-4">"{item.quote}"</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, starIdx) => (
                <svg key={starIdx} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center reveal-on-scroll">
        <p className="text-2xl font-bold text-gray-900 mb-4">
          <span className="text-red-600">427 spots remaining</span> in private beta
        </p>
        <p className="text-gray-600 mb-6">Slots are filling fast. Join now to secure your lifetime free access.</p>
        <button
          className="cta-button bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all shadow-lg"
          data-tally-open="wgxDQB"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Be part of the story
        </button>
      </div>
    </div>
  </section>
);

export default TrustSection;
