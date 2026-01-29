/**
 * Pricing Section Component
 * Displays transparent pricing for ITR filing
 */

import React from "react";
import { CheckCircleIcon, RocketIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";
import { useGTMTracking } from "../hooks";

export const PricingSection: React.FC = () => {
  const { trackButtonClick } = useGTMTracking();

  const handleFileITR = () => {
    trackButtonClick('File my ITR', 'pricing');
    window.location.href = TALLY_FORM_URL;
  };
  return (
    <section id="pricing" className="py-16 px-6 min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No monthly fees. No hidden charges. Just straightforward pricing for ITR filing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
          {/* ITR Filing Card */}
          <div className="max-w-md w-full reveal-on-scroll">
            <div className="rounded-3xl p-8 border-2 border-blue-200 shadow-2xl bg-white">
              <div className="text-center pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ITR Filing
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">₹200</span>
                  <span className="text-lg text-gray-600">/filing</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  One-time payment per ITR filing
                </p>
              </div>

              {/* Features List - Compact */}
              <div className="py-6 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900"><span className="font-semibold">AI-Powered Filing</span> — Automated data extraction</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900"><span className="font-semibold">All ITR Forms</span> — ITR-1, ITR-2, ITR-3, ITR-4</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900"><span className="font-semibold">Expert Review</span> — Verified by tax professionals</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900"><span className="font-semibold">E-Filing Ready</span> — Direct portal submission</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-900"><span className="font-semibold">Free Re-Filing</span> — Errors corrected at no cost</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleFileITR}
                className="block bg-primary w-full text-white text-center py-3 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-2">
                  <RocketIcon className="w-5 h-5" />
                  File my ITR
                </span>
              </button>
            </div>
          </div>

          {/* GST Filing - Coming Soon Card */}
          <div className="max-w-md w-full reveal-on-scroll">
            <div className="rounded-3xl p-8 border-2 border-gray-300 shadow-2xl bg-white opacity-75 relative">
              {/* Coming Soon Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold shadow-md border border-blue-300">
                  ✨ Coming Soon
                </div>
              </div>

              <div className="text-center pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  GST Filing
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-400">₹?</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Coming Q2 2026
                </p>
              </div>

              {/* Features List - Coming Soon */}
              <div className="py-6 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600"><span className="font-semibold">Automated GST Returns</span> — Monthly/Quarterly</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600"><span className="font-semibold">Invoice Tracking</span> — Real-time reconciliation</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600"><span className="font-semibold">ITC Management</span> — Automatic credit calculation</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600"><span className="font-semibold">GSTR E-filing</span> — Direct portal submission</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600"><span className="font-semibold">Expert Support</span> — Compliance assistance</p>
                </div>
              </div>

              {/* CTA Button - Disabled */}
              <button
                disabled
                className="block w-full bg-gray-300 text-gray-600 text-center py-3 px-6 rounded-xl font-bold cursor-not-allowed opacity-75"
              >
                <span className="flex items-center justify-center gap-2">
                  🔒 Launching Soon
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
