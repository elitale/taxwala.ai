import React from "react";
import { heroCopy } from "./content";

const HeroSection = ({ onPlay }) => (
  <section className="pt-32 pb-20 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
          <span className="text-2xl">🎯</span>
          <span className="text-sm font-semibold text-gray-900">{heroCopy.badgeText}</span>
        </div>
      </div>

      <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6 whitespace-pre-line">
          {heroCopy.headline}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {heroCopy.description.split("Zero fees. Zero hassle.")[0]}
          <span className="font-semibold text-gray-900">Zero fees. Zero hassle.</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative group cursor-pointer" onClick={onPlay}>
          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full p-12 flex items-center justify-center gap-8">
                <div className="receipt-animation">
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <svg className="w-12 h-12 text-primary arrow-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>

                <div className="flex items-center gap-1 ai-bars-animation">
                  <div className="w-2 h-8 bg-primary rounded-full bar-1" />
                  <div className="w-2 h-12 bg-purple-500 rounded-full bar-2" />
                  <div className="w-2 h-10 bg-blue-400 rounded-full bar-3" />
                  <div className="w-2 h-14 bg-primary rounded-full bar-4" />
                  <div className="w-2 h-9 bg-purple-500 rounded-full bar-5" />
                </div>

                <svg className="w-12 h-12 text-primary arrow-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>

                <div className="checkmark-animation">
                  <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="play-button-pulse relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">2:00</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">See how it works (2 min)</p>
        </div>
      </div>

      <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center -space-x-3">
            {[
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt="User"
                className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
              +1.2k
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-bold text-primary">{heroCopy.waitlistCount}</span> already waiting
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <TrustBadge iconColor="text-green-600" text="100% Free Forever">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </TrustBadge>
        <TrustBadge iconColor="text-gold" text="Invite Only Beta">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </TrustBadge>
        <TrustBadge iconColor="text-gray-700" text="Bank-level security">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </TrustBadge>
      </div>

      <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <button
          className="cta-button bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          data-tally-open="wgxDQB"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Request Early Access →
        </button>
      </div>
    </div>

    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
  </section>
);

const TrustBadge = ({ iconColor, text, children }) => (
  <div className="flex items-center gap-2">
    <svg className={`w-5 h-5 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
      {children}
    </svg>
    <span className="font-semibold text-gray-900">{text}</span>
  </div>
);

export default HeroSection;
