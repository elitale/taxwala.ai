import React from "react";

const FinalCTASection = () => (
  <section className="py-32 px-6 bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 reveal-on-scroll">Don't Get Left Behind</h2>

      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-2xl md:text-3xl font-semibold reveal-on-scroll"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>427 spots remaining</span>
        </div>
        <span className="hidden md:block">•</span>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Early access closes in 14 days</span>
        </div>
      </div>

      <p className="text-xl mb-12 opacity-90 reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
        Join 1,247 businesses already on the waitlist. Get lifetime free access before it's too late.
      </p>

      <button
        className="cta-button bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 reveal-on-scroll"
        style={{ animationDelay: "0.3s" }}
        data-tally-open="wgxDQB"
        data-tally-emoji-text="🚀"
        data-tally-emoji-animation="wave"
      >
        Secure Your Spot Now →
      </button>
    </div>
  </section>
);

export default FinalCTASection;
