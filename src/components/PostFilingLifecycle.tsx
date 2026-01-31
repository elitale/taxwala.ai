/**
 * Post-Filing Lifecycle Section
 * Showcases Step 4 benefits - the year-round value after filing
 * Emphasizes retention, refund tracking, notice monitoring, etc.
 */

import React from "react";
import {
  DollarSign,
  AlertTriangle,
  Lock,
  Zap,
  BarChart3,
  TrendingUp,
  Check as CheckIcon,
} from "lucide-react";
import { postFilingLifecycle } from "./content";

interface LifecycleCardProps {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

// Map emoji/icon names to Lucide components
const iconMap: { [key: string]: React.ReactNode } = {
  "💰": <DollarSign className="w-8 h-8 text-primary" />,
  "🚨": <AlertTriangle className="w-8 h-8 text-red-500" />,
  "🔐": <Lock className="w-8 h-8 text-green-600" />,
  "⚡": <Zap className="w-8 h-8 text-yellow-500" />,
  "📊": <BarChart3 className="w-8 h-8 text-purple-600" />,
  "📈": <TrendingUp className="w-8 h-8 text-emerald-500" />,
};

const LifecycleCard: React.FC<LifecycleCardProps> = ({ title, description, details, icon }) => (
  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all transform hover:scale-105 h-full flex flex-col">
    {/* Icon & Title */}
    <div className="mb-6">
      <div className="mb-4">{iconMap[icon] || icon}</div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
    </div>

    {/* Description */}
    <p className="text-gray-700 mb-6 flex-grow">{description}</p>

    {/* Details List */}
    <div className="space-y-3 border-t border-gray-100 pt-6">
      {details.map((detail, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
          Tax Doesn't Stop After March 31st
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Salaried professionals think tax is a March panic. We turn it into a 3-minute annual ritual. Refund tracking, notice monitoring, auto-prefill next year, and tax-saving alerts keep working for you all year.
        </p>
        <p className="text-lg text-primary font-semibold">
          Year 2 costs you ₹0 of your time. Year 5, you've recovered 10x more wealth than Year 1.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {postFilingLifecycle.map((item, idx) => (
          <LifecycleCard key={idx} {...item} />
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
          Lifetime free access for all salaried professionals filing taxes in India.
        </p>
      </div>
    </div>
  </section>
);
