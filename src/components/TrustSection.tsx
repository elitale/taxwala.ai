/**
 * Trust & Security Section Component
 * Displays company info, testimonials, and security features
 */

import React from "react";
import type { Testimonial } from "../types/index";
import { CheckCircleIcon, StarIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

export const TrustSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      quote:
        "I had no idea I was missing ₹28,000 in HRA deductions. TaxWala found them automatically from my rent payments. My CA never bothered.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Rahul Verma",
      role: "Marketing Manager, Mumbai",
      quote:
        "Changed jobs twice last year. Had 3 Form 16s to reconcile. TaxWala handled it perfectly in 10 minutes. Never using a CA again.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Ananya Desai",
      role: "Finance Professional, Pune",
      quote:
        "Filed my ITR-1 in 12 minutes. Found ₹22,000 in home loan interest deductions I forgot about. Worth way more than the ₹200 fee.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold">1</span>
          </div>
          <div className="h-px w-12 bg-gray-900" />
          <span className="text-sm font-semibold uppercase tracking-wider">Social Proof & Trust</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
          Built by experts, trusted by salaried professionals
        </h2>

        {/* Company Info Card */}
        <CompanyInfo />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={`${(idx + 1) * 0.1}s`} />
          ))}
        </div>

        {/* Urgency Section */}
        <UrgencySection />
      </div>
    </section>
  );
};

const CompanyInfo: React.FC = () => (
  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16 reveal-on-scroll">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
            <img src="/elitale-logo.png" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Powered by</p>
            <p className="text-xl font-bold">Elitale Softwares Private Limited</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          A registered Indian company building the future of tax automation. Our team combines expertise in AI,
          finance, and Indian tax regulations to deliver a product you can trust.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {["Bank-level 256-bit encryption", "ISO 27001 compliant infrastructure", "Your data never leaves India"].map(
          (feature) => (
            <SecurityFeature key={feature} feature={feature} />
          )
        )}
      </div>
    </div>
  </div>
);

interface SecurityFeatureProps {
  feature: string;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ feature }) => (
  <div className="flex items-center gap-3">
    <CheckCircleIcon className="w-6 h-6 text-green-600" />
    <span className="font-semibold">{feature}</span>
  </div>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => (
  <div
    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-on-scroll"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-primary/20"
      />
      <div>
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed italic mb-4">"{testimonial.quote}"</p>
    <StarRating />
  </div>
);

const StarRating: React.FC = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, idx) => (
      <StarIcon key={idx} className="w-5 h-5 text-gold fill-gold" />
    ))}
  </div>
);

const UrgencySection: React.FC = () => (
  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center reveal-on-scroll">
    <p className="text-2xl font-bold text-gray-900 mb-4">
      <span className="text-green-600">Trusted by 12,847 professionals</span> across India
    </p>
    <p className="text-gray-600 mb-6">Join thousands who've reclaimed their time and recovered ₹1L+ in deductions.</p>
    <button
      className="cta-button bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all shadow-lg"
      onClick={() => {
        window.gtag?.("event", "button_click", {
          button_name: "Start Filing Now",
          section: "trust_urgency"
        });
        window.location.href = TALLY_FORM_URL;
      }}
    >
      Start Filing Now
    </button>
  </div>
);
