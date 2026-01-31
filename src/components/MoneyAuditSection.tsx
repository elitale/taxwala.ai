/**
 * Money Audit Section
 * Showcases salaried-specific value exchange moments
 * Shows real professionals and the deductions they found
 */

import React from "react";
import { moneyAuditScenarios } from "./content";

interface MoneyAuditItemProps {
  profession: string;
  income: string;
  found: string;
  context: string;
}

const MoneyAuditItem: React.FC<MoneyAuditItemProps> = ({ profession, income, found, context }) => (
  <div className="bg-white rounded-2xl p-6 border-2 border-gold/30 hover:border-gold transition-all hover:shadow-lg">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h4 className="text-lg font-bold text-foreground">{profession}</h4>
        <p className="text-sm text-gray-600">{income}</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold text-gold">{found}</p>
        <p className="text-xs text-gray-500 font-medium">Found</p>
      </div>
    </div>
    <p className="text-sm text-gray-700 border-t border-gray-100 pt-4">{context}</p>
  </div>
);

export const MoneyAuditSection: React.FC = () => (
  <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          See What Real Salaried Professionals Found
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your audit could look similar. TaxWala finds deductions in your profile right now.
        </p>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {moneyAuditScenarios.map((scenario, idx) => (
          <MoneyAuditItem
            key={idx}
            profession={scenario.profession}
            income={scenario.income}
            found={scenario.found}
            context={scenario.context}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          data-tally-open="wgxDQB"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Get Your Money Audit (2 min) →
        </button>
        <p className="text-sm text-gray-600 mt-4">
          See exactly what deductions you're missing before filing
        </p>
      </div>
    </div>
  </section>
);
