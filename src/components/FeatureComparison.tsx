/**
 * Feature Comparison Section
 * Shows salaried-focused feature comparison vs competitors
 * Emphasizes why TaxWala is built for salaried professionals
 */

import React from "react";
import { featureComparison } from "./content";
import { CheckCircleIcon, XCircleIcon, ExclamationCircleIcon } from "./icons";

interface ComparisonRowProps {
  feature: string;
  taxwala: string;
  cleartax: string;
  quicko: string;
  taxbuddy: string;
  explanation: string;
}

const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  if (status === "✅")
    return <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto" />;
  if (status === "⚠️")
    return <ExclamationCircleIcon className="w-8 h-8 text-orange-500 mx-auto" />;
  if (status === "❌")
    return <XCircleIcon className="w-8 h-8 text-red-400 mx-auto" />;
  return <span className="text-2xl">{status}</span>;
};

const ComparisonRow: React.FC<ComparisonRowProps> = ({
  feature,
  taxwala,
  cleartax,
  quicko,
  taxbuddy,
  explanation,
}) => (
  <div className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-4 md:px-6">
      {/* Feature Name */}
      <div className="md:col-span-1">
        <div className="font-bold text-foreground text-sm md:text-base mb-2">{feature}</div>
        <div className="text-xs text-gray-600 leading-relaxed">{explanation}</div>
      </div>

      {/* TaxWala */}
      <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
        <StatusIcon status={taxwala} />
        <p className="text-xs text-gray-600 mt-2 font-medium">TaxWala</p>
      </div>

      {/* ClearTax */}
      <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
        <StatusIcon status={cleartax} />
        <p className="text-xs text-gray-600 mt-2 font-medium">ClearTax</p>
      </div>

      {/* Quicko */}
      <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
        <StatusIcon status={quicko} />
        <p className="text-xs text-gray-600 mt-2 font-medium">Quicko</p>
      </div>

      {/* TaxBuddy */}
      <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
        <StatusIcon status={taxbuddy} />
        <p className="text-xs text-gray-600 mt-2 font-medium">TaxBuddy</p>
      </div>
    </div>
  </div>
);

export const FeatureComparison: React.FC = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {featureComparison.heading}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {featureComparison.subheading}
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-10 text-sm flex-wrap reveal-on-scroll" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
          <CheckCircleIcon className="w-6 h-6 text-green-500" />
          <span className="text-gray-700 font-medium">Available</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
          <ExclamationCircleIcon className="w-6 h-6 text-orange-500" />
          <span className="text-gray-700 font-medium">Limited / Paid</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
          <XCircleIcon className="w-6 h-6 text-red-400" />
          <span className="text-gray-700 font-medium">Not Available</span>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
        {/* Header Row */}
        <div className="bg-gradient-to-r from-primary to-blue-600">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-4 md:px-6">
            <div className="md:col-span-1 font-bold text-lg">Feature</div>
            <div className="text-center font-bold text-lg">TaxWala</div>
            <div className="text-center font-bold text-lg">ClearTax</div>
            <div className="text-center font-bold text-lg">Quicko</div>
            <div className="text-center font-bold text-lg">TaxBuddy</div>
          </div>
        </div>

        {/* Rows */}
        <div>
          {featureComparison.features.map((row, idx) => (
            <ComparisonRow key={idx} {...row} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 reveal-on-scroll" style={{ animationDelay: "0.3s" }}>
        <p className="text-lg text-gray-700 mb-6">
          See the difference? <span className="font-bold text-primary">TaxWala is built obsessively for salaried professionals.</span>
        </p>
        <button
          data-tally-open="wgxDQB"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          className="inline-block bg-gradient-to-r from-gold to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg"
        >
          Join 2,847 Salaried Professionals →
        </button>
      </div>
    </div>
  </section>
);
