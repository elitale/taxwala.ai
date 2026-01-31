/**
 * Feature Comparison Section
 * Shows salaried-focused feature comparison vs competitors
 * Emphasizes why TaxWala is built for salaried professionals
 */

import React from "react";
import { featureComparison } from "./content";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  RocketIcon,
  LightBulbIcon,
  LockIcon,
  ClockIcon,
  CalendarIcon,
  ReceiptIcon,
  SupportIcon,
  StarIcon,
} from "./icons";

interface ComparisonRowProps {
  feature: string;
  taxwala: string;
  cleartax: string;
  quicko: string;
  taxbuddy: string;
  explanation: string;
  icon?: React.ReactNode;
}

const iconMap: { [key: string]: React.ReactNode } = {
  "Auto-Fill Salary from Bank API": <RocketIcon className="w-5 h-5 text-blue-600" />,
  "AI Receipt Upload & Auto-Detect Deductions": <ReceiptIcon className="w-5 h-5 text-blue-600" />,
  "5-Minute ITR-1 Filing for Salaried": <ClockIcon className="w-5 h-5 text-blue-600" />,
  "HRA Optimization & Auto-Calculation": <LightBulbIcon className="w-5 h-5 text-blue-600" />,
  "80C Deduction Auto-Detection": <StarIcon className="w-5 h-5 text-blue-600" />,
  "Multi-Employer Form 16 Reconciliation": <RocketIcon className="w-5 h-5 text-blue-600" />,
  "Refund Tracking Dashboard": <CalendarIcon className="w-5 h-5 text-blue-600" />,
  "Tax Notice Monitoring & Alerts": <SupportIcon className="w-5 h-5 text-blue-600" />,
  "Secure Document Vault": <LockIcon className="w-5 h-5 text-blue-600" />,
  "Next-Year Auto-Fill Prefill": <RocketIcon className="w-5 h-5 text-blue-600" />,
  "Proactive Tax Planning Alerts": <LightBulbIcon className="w-5 h-5 text-blue-600" />,
  "Year-Round Salaried Support": <SupportIcon className="w-5 h-5 text-blue-600" />,
  "Built Specifically for Salaried (ITR-1)": <StarIcon className="w-5 h-5 text-blue-600" />,
};

const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  if (status === "✅")
    return <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto" />;
  if (status === "⚠️")
    return <ExclamationCircleIcon className="w-8 h-8 text-orange-500 mx-auto" />;
  if (status === "❌")
    return <XCircleIcon className="w-8 h-8 text-red-400 mx-auto" />;
  return <span className="text-2xl">{status}</span>;
};

const CompetitorLogo: React.FC<{ logo: string; alt: string }> = ({ logo, alt }) => (
  <img
    src={logo}
    alt={alt}
    className="h-8 md:h-10 object-contain mx-auto"
  />
);

const ComparisonRow: React.FC<ComparisonRowProps> = ({
  feature,
  taxwala,
  cleartax,
  quicko,
  taxbuddy,
  explanation,
}) => {
  const icon = iconMap[feature];
  return (
    <div className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-4 md:px-6">
        {/* Feature Name with Icon */}
        <div className="md:col-span-1">
          <div className="flex items-start gap-3 mb-2">
            {icon && (
              <div className="mt-0.5 flex-shrink-0">
                {icon}
              </div>
            )}
            <div className="font-bold text-foreground text-sm md:text-base">{feature}</div>
          </div>
          <div className="text-xs text-gray-600 leading-relaxed ml-8 md:ml-0">{explanation}</div>
        </div>

        {/* TaxWala */}
        <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
          <StatusIcon status={taxwala} />
        </div>

        {/* ClearTax */}
        <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
          <StatusIcon status={cleartax} />
        </div>

        {/* Quicko */}
        <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
          <StatusIcon status={quicko} />
        </div>

        {/* TaxBuddy */}
        <div className="text-center py-2 md:py-0 flex flex-col items-center justify-center">
          <StatusIcon status={taxbuddy} />
        </div>
      </div>
    </div>
  );
};

export const FeatureComparison: React.FC = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
    <div className="max-w-7xl mx-auto">
      {/* Header with Icon */}
      <div className="text-center mb-12 reveal-on-scroll">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-primary to-blue-600 p-4 rounded-full inline-block">
            <RocketIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {featureComparison.heading}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {featureComparison.subheading}
        </p>
      </div>

      {/* Legend with better styling */}
      <div className="flex justify-center gap-6 mb-12 text-sm flex-wrap reveal-on-scroll" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-green-100">
          <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
          <span className="text-gray-700 font-semibold">Fully Available</span>
        </div>
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-orange-100">
          <ExclamationCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
          <span className="text-gray-700 font-semibold">Limited / Paid</span>
        </div>
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-red-100">
          <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
          <span className="text-gray-700 font-semibold">Not Available</span>
        </div>
      </div>

      {/* Table with enhanced styling */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-2xl bg-white reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
        {/* Header Row with gradient and visual hierarchy */}
        <div className="bg-gradient-to-r from-primary via-blue-600 to-blue-700">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-8 px-4 md:px-6">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-white">
                <StarIcon className="w-5 h-5" />
                <span className="font-bold text-lg">Feature</span>
              </div>
            </div>
            <div className="text-center flex items-center justify-center">
              <CompetitorLogo logo="/logo.svg" alt="TaxWala" />
            </div>
            <div className="text-center flex items-center justify-center">
              <CompetitorLogo logo="/cleartax.png" alt="ClearTax" />
            </div>
            <div className="text-center flex items-center justify-center">
              <CompetitorLogo logo="/quicko-logo.png" alt="Quicko" />
            </div>
            <div className="text-center flex items-center justify-center">
              <CompetitorLogo logo="/taxbuddy.png" alt="TaxBuddy" />
            </div>
          </div>
        </div>

        {/* Rows */}
        <div>
          {featureComparison.features.map((row, idx) => (
            <ComparisonRow key={idx} {...row} />
          ))}
        </div>
      </div>

      {/* Bottom CTA with enhanced design */}
      <div className="text-center mt-16 reveal-on-scroll" style={{ animationDelay: "0.3s" }}>
        <div className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-2xl p-8 border border-blue-200">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-md">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6 font-semibold">
            See the difference? <span className="text-primary font-bold">TaxWala is built obsessively for salaried professionals.</span>
          </p>
          <button
            data-tally-open="wgxDQB"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="inline-block bg-gradient-to-r from-gold to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Tax Journey →
          </button>
        </div>
      </div>
    </div>
  </section>
);
