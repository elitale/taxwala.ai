/**
 * Feature Comparison Section - Mobile-First Redesign
 * Simplified "Us vs Them" with "Who are they?" explanations
 * Built for easy scanning on mobile devices
 */

import React from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  RocketIcon,
  LightBulbIcon,
  StarIcon,
  LockIcon,
  SupportIcon,
  CalendarIcon,
} from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

interface CompetitorInfo {
  name: string;
  whoAreThey: string;
  status: "yes" | "partial" | "no";
  detail?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  whoAreWe: string;
  taxwala: {
    status: "yes";
    detail: string;
  };
  competitors: CompetitorInfo[];
}

const features: Feature[] = [
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: "15-Minute ITR-1 Filing",
    description: "How fast can you file your taxes?",
    whoAreWe: "Built ONLY for salaried ITR-1 (₹8-18L). No business/freelancer bloat = 3x faster.",
    taxwala: {
      status: "yes",
      detail: "15 minutes average",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Generic platform for everyone (business, freelancers, salaried). Too many features you don't need.",
        status: "partial",
        detail: "45+ minutes",
      },
      {
        name: "Quicko",
        whoAreThey: "CA marketplace. You get assigned to a random CA. Quality varies.",
        status: "no",
        detail: "60+ minutes",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "Traditional CA service moved online. Still manual, no real automation.",
        status: "partial",
        detail: "30+ minutes",
      },
    ],
  },
  {
    icon: <span className="text-2xl">₹</span>,
    title: "₹200 Flat Pricing",
    description: "How much does it cost?",
    whoAreWe: "Direct-to-consumer startup. No middleman CAs. No hidden charges.",
    taxwala: {
      status: "yes",
      detail: "₹200 flat",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Well-funded company with high marketing costs. Passes costs to you.",
        status: "partial",
        detail: "₹500-1,500",
      },
      {
        name: "Quicko",
        whoAreThey: "Marketplace takes commission from CAs. You pay premium for middleman.",
        status: "no",
        detail: "₹1,000-3,000",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "CA service charges per-hour fees. Meter keeps running.",
        status: "partial",
        detail: "₹999+",
      },
    ],
  },
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "AI Auto-Detect Deductions",
    description: "Does it find your HRA, 80C, home loan deductions automatically?",
    whoAreWe: "Tech-first company. Built AI specifically for salaried deductions (HRA, 80C, 24).",
    taxwala: {
      status: "yes",
      detail: "Full AI automation",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Generic tax software. You manually enter everything. No AI help.",
        status: "no",
        detail: "Manual entry only",
      },
      {
        name: "Quicko",
        whoAreThey: "Depends on your assigned CA. Most just ask you to send receipts.",
        status: "no",
        detail: "CA-dependent",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "Traditional CA. They ask you questions, you answer. No automation.",
        status: "no",
        detail: "Manual process",
      },
    ],
  },
  {
    icon: <LightBulbIcon className="w-6 h-6" />,
    title: "HRA Optimization",
    description: "Maximize your House Rent Allowance deduction?",
    whoAreWe: "Specialists in salaried deductions. HRA is our bread and butter.",
    taxwala: {
      status: "yes",
      detail: "Auto-calculated",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Generalist tool. HRA is just another field to fill manually.",
        status: "partial",
        detail: "Basic calculator",
      },
      {
        name: "Quicko",
        whoAreThey: "Your CA might know HRA rules... or might not. It's a gamble.",
        status: "partial",
        detail: "CA-dependent",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "CA service. Quality depends on who you get assigned to.",
        status: "partial",
        detail: "Variable quality",
      },
    ],
  },
  {
    icon: <StarIcon fill="#2563eb" strokeWidth={0} className="w-6 h-6" />,
    title: "Multi-Employer Form 16",
    description: "Changed jobs? Multiple Form 16s to reconcile?",
    whoAreWe: "Built for job-changers. AI reconciles all TDS, Form 26AS automatically.",
    taxwala: {
      status: "yes",
      detail: "Auto-reconciliation",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Generic platform. You manually enter each Form 16. Easy to make mistakes.",
        status: "partial",
        detail: "Manual entry",
      },
      {
        name: "Quicko",
        whoAreThey: "Your CA manually adds up Form 16s. Slow and error-prone.",
        status: "no",
        detail: "Manual CA work",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "CA does it manually. Takes days, costs more.",
        status: "partial",
        detail: "Slow manual process",
      },
    ],
  },
  {
    icon: <CalendarIcon className="w-6 h-6" />,
    title: "Year-Round Support",
    description: "Tax help only in March or all year?",
    whoAreWe: "Proactive partner. We alert you about tax planning, refunds, notices throughout the year.",
    taxwala: {
      status: "yes",
      detail: "365-day support",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Software company. No one checks in on you after filing. You're on your own.",
        status: "no",
        detail: "Filing season only",
      },
      {
        name: "Quicko",
        whoAreThey: "Marketplace. After filing, your CA moves to next client. No follow-up.",
        status: "no",
        detail: "One-time service",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "CA service charges per interaction. Follow-ups cost extra.",
        status: "partial",
        detail: "Paid support only",
      },
    ],
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    title: "Data Security & Privacy",
    description: "Where is your tax data stored?",
    whoAreWe: "Indian company. Your data never leaves India. Bank-level encryption.",
    taxwala: {
      status: "yes",
      detail: "India-only servers",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Large company with cloud infrastructure. Data storage location unclear.",
        status: "partial",
        detail: "Cloud-based",
      },
      {
        name: "Quicko",
        whoAreThey: "Marketplace. Your data shared with third-party CAs. No control.",
        status: "no",
        detail: "Shared with CAs",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "CA service. Your docs sent to CA's email. No vault, no encryption.",
        status: "no",
        detail: "Email-based",
      },
    ],
  },
  {
    icon: <SupportIcon className="w-6 h-6" />,
    title: "Dedicated Support Team",
    description: "Who answers your questions?",
    whoAreWe: "Real tax experts on our team. Not outsourced call center.",
    taxwala: {
      status: "yes",
      detail: "In-house experts",
    },
    competitors: [
      {
        name: "ClearTax",
        whoAreThey: "Large company. Support is outsourced call center agents reading scripts.",
        status: "partial",
        detail: "Call center",
      },
      {
        name: "Quicko",
        whoAreThey: "Marketplace support. They can't help with tax questions, only platform issues.",
        status: "no",
        detail: "Platform support only",
      },
      {
        name: "TaxBuddy",
        whoAreThey: "You talk to your CA. But they're busy with other clients. Slow responses.",
        status: "partial",
        detail: "CA availability varies",
      },
    ],
  },
];

const StatusBadge: React.FC<{ status: "yes" | "partial" | "no"; detail: string }> = ({ status, detail }) => {
  if (status === "yes") {
    return (
      <div className="flex items-center gap-2 justify-center">
        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
        <span className="text-sm font-semibold text-green-700">{detail}</span>
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="flex items-center gap-2 justify-center">
        <span className="text-2xl">⚠️</span>
        <span className="text-sm font-semibold text-orange-700">{detail}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 justify-center">
      <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
      <span className="text-sm font-semibold text-red-700">{detail}</span>
    </div>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <div
    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden reveal-on-scroll"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Feature Header */}
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-blue-600">
          {feature.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      </div>
    </div>

    {/* TaxWala - Highlighted */}
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-200 p-6">
      <div className="flex items-start gap-3 mb-3">
        <img src="/logo.svg" alt="TaxWala" className="h-6 flex-shrink-0" />
        <div className="flex-1">
          <StatusBadge status={feature.taxwala.status} detail={feature.taxwala.detail} />
        </div>
      </div>
      <div className="bg-white/80 rounded-lg p-3 border border-green-200">
        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Who are we?</p>
        <p className="text-sm text-gray-700 leading-relaxed">{feature.whoAreWe}</p>
      </div>
    </div>

    {/* Competitors */}
    <div className="p-6 space-y-4">
      {feature.competitors.map((competitor, idx) => (
        <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-sm font-bold text-gray-900 flex-shrink-0">{competitor.name}</span>
            <div className="flex-1">
              <StatusBadge status={competitor.status} detail={competitor.detail} />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Who are they?</p>
            <p className="text-xs text-gray-600 leading-relaxed">{competitor.whoAreThey}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const FeatureComparison: React.FC = () => (
  <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50/30">
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 reveal-on-scroll">
        <div className="inline-block bg-gradient-to-r from-primary to-blue-600 p-4 rounded-full mb-6">
          <RocketIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Built for Salaried Professionals
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Here's why we're different from generic tax platforms and CA services
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12 text-sm flex-wrap reveal-on-scroll">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
          <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-gray-700 font-semibold text-xs md:text-sm">Yes</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-orange-100">
          <span className="text-lg">⚠️</span>
          <span className="text-gray-700 font-semibold text-xs md:text-sm">Partial/Paid</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-red-100">
          <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span className="text-gray-700 font-semibold text-xs md:text-sm">No</span>
        </div>
      </div>

      {/* Feature Cards - One per feature */}
      <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center reveal-on-scroll">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-200">
          <div className="inline-block bg-white p-3 rounded-full shadow-md mb-4">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-base md:text-lg text-gray-700 mb-6 font-semibold">
            See the difference? <span className="text-primary font-bold">TaxWala is built obsessively for salaried professionals.</span>
          </p>
          <button
            onClick={() => {
              window.gtag?.("event", "button_click", {
                button_name: "Start Your Tax Journey",
                section: "comparison_cta"
              });
              window.location.href = TALLY_FORM_URL;
            }}
            className="cta-button inline-block bg-gradient-to-r from-gold to-yellow-500 text-gray-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Start Your Tax Journey →
          </button>
        </div>
      </div>
    </div>
  </section>
);
