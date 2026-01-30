/**
 * Post-Filing Lifecycle Section
 * Showcases Step 4 benefits - the year-round value after filing
 * Emphasizes retention, refund tracking, notice monitoring, etc.
 */

import React from "react";
import { postFilingLifecycle } from "./content";

interface LifecycleCardProps {
  title: string;
  description: string;
  details: string[];
  icon: string;
  index: number;
}

const LifecycleCard: React.FC<LifecycleCardProps> = ({ title, description, details, icon, index }) => (
  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all transform hover:scale-105 h-full flex flex-col">
    {/* Icon & Title */}
    <div className="mb-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
    </div>

    {/* Description */}
    <p className="text-gray-700 mb-6 flex-grow">{description}</p>

    {/* Details List */}
    <div className="space-y-3 border-t border-gray-100 pt-6">
      {details.map((detail, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <span className="text-primary text-lg font-bold">✓</span>
          <span className="text-sm text-gray-700">{detail}</span>
        </div>
      ))}
    </div>
  </div>
);

export const PostFilingLifecycle: React.FC = () => (
  <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          We Take Care of You After Filing
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Your TaxWala relationship doesn't end at filing. We track your refunds, monitor tax notices, store documents, prefill next year, and send proactive tax planning alerts.
        </p>
        <p className="text-lg text-primary font-semibold">
          This is the lifetime value that keeps you coming back.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {postFilingLifecycle.map((item, idx) => (
          <LifecycleCard key={idx} {...item} index={idx} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          data-tally-open="wgxDQB"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg mb-4"
        >
          Claim Your Year-Round Support →
        </button>
        <p className="text-sm text-gray-600">
          Limited 500 beta spots. Lifetime free access for early salaried professionals.
        </p>
      </div>
    </div>
  </section>
);
