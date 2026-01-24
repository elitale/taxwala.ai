import React from "react";

const steps = [
  {
    title: "1. Connect",
    desc: "Link your bank account in 30 seconds. Upload receipts with a photo. Sync your billing tools.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "2. Relax",
    desc: "Our AI categorizes transactions, matches receipts, and processes while you sleep.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    path: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "3. Done",
    desc: "Download your tax filing in 1 click. Review, approve, and submit. That's it.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
        <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <span className="text-sm font-bold">1</span>
        </div>
        <div className="h-px w-12 bg-gray-900" />
        <span className="text-sm font-semibold uppercase tracking-wider">How It Works</span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
        Three steps to never worry about taxes again
      </h2>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {steps.map((step, idx) => (
          <div key={step.title} className="reveal-on-scroll" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
            <div className="mb-6">
              <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                <svg className={`w-8 h-8 ${step.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.path} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center reveal-on-scroll">
        <p className="text-gray-600 mb-6 text-lg">Watch the video to see it in action</p>
        <button
          className="cta-button bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all shadow-lg"
          data-tally-open="wgxDQB"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Get Early Access
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
