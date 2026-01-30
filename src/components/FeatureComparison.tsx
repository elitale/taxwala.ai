/**
 * Feature Comparison Section
 * Shows salaried-focused feature comparison vs competitors
 * Emphasizes why TaxWala is built for salaried professionals
 */

import React from "react";
import { featureComparison } from "./content";

interface ComparisonRowProps {
  feature: string;
  taxwala: string;
  cleartax: string;
  quicko: string;
  taxbuddy: string;
  explanation: string;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({
  feature,
  taxwala,
  cleartax,
  quicko,
  taxbuddy,
  explanation,
}) => (
  <div className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 px-4 md:px-6">
      {/* Feature Name */}
      <div className="md:col-span-1">
        <div className="font-bold text-foreground text-sm md:text-base mb-2">{feature}</div>
        <div className="text-xs text-gray-600 italic">{explanation}</div>
      </div>

      {/* TaxWala */}
      <div className="text-center py-2 md:py-0 border-b md:border-b-0 border-gray-200">
        <span className="text-2xl">{taxwala}</span>
        <p className="text-xs text-gray-600 mt-1">TaxWala</p>
      </div>

      {/* ClearTax */}
      <div className="text-center py-2 md:py-0 border-b md:border-b-0 border-gray-200">
        <span className="text-2xl">{cleartax}</span>
        <p className="text-xs text-gray-600 mt-1">ClearTax</p>
      </div>

      {/* Quicko */}
      <div className="text-center py-2 md:py-0 border-b md:border-b-0 border-gray-200">
        <span className="text-2xl">{quicko}</span>
        <p className="text-xs text-gray-600 mt-1">Quicko</p>
      </div>

      {/* TaxBuddy */}
      <div className="text-center py-2 md:py-0">
        <span className="text-2xl">{taxbuddy}</span>
        <p className="text-xs text-gray-600 mt-1">TaxBuddy</p>
      </div>
    </div>
  </div>
);

export const FeatureComparison: React.FC = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {featureComparison.heading}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {featureComparison.subheading}
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <span className="text-gray-700">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          <span className="text-gray-700">Limited / Paid</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">❌</span>
          <span className="text-gray-700">Not Available</span>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
        {/* Header Row */}
        <div className="bg-primary text-white">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-4 md:px-6">
            <div className="md:col-span-1 font-bold">Feature</div>
            <div className="text-center font-bold">TaxWala</div>
            <div className="text-center font-bold">ClearTax</div>
            <div className="text-center font-bold">Quicko</div>
            <div className="text-center font-bold">TaxBuddy</div>
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
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-6">
          See the difference? <span className="font-bold text-primary">TaxWala is built obsessively for salaried professionals.</span>
        </p>
        <button
          data-tally-open="wgxDQB"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          className="inline-block bg-gold text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
        >
          Join 2,847 Salaried Professionals →
        </button>
      </div>
    </div>
  </section>
);
