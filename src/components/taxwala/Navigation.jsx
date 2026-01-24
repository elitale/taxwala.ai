import React from "react";

const Navigation = ({ mobileOpen, onToggleMenu }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">TaxWala.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Benefits
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </a>
          <button
            className="cta-button bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
            data-tally-open="wgxDQB"
            data-tally-emoji-text="🚀"
            data-tally-emoji-animation="wave"
          >
            Join Waitlist
          </button>
        </div>
        <button
          onClick={onToggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              className={mobileOpen ? "hidden" : ""}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={mobileOpen ? "" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={`${mobileOpen ? "" : "hidden"} md:hidden mt-4 pb-4 space-y-4`}>
        <a href="#how-it-works" className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          How It Works
        </a>
        <a href="#benefits" className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Benefits
        </a>
        <a href="#faq" className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          FAQ
        </a>
        <button
          className="cta-button w-full bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
          data-tally-open="wgxDQB"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;
