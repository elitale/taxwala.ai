/**
 * Trust & Security Section Component
 * Displays company info, testimonials, and security features
 */

import React from "react";
import type { Testimonial } from "../types/index";
import { CheckCircleIcon, StarIcon } from "./icons";
import { TALLY_FORM_ID } from "../constants/config";

export const TrustSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Arjun Mehta",
      role: "E-commerce Founder",
      quote:
        "I was spending 25 hours every month on tax paperwork. TaxWala.ai cut that to 2 hours. This is a game-changer for my business.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Rohan Singh",
      role: "Startup Founder",
      quote:
        "Filing taxes used to be my biggest nightmare. Now it's completely automated. I focus on growing my startup while TaxWala handles the rest.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Karan Patel",
      role: "Freelance Developer",
      quote:
        "As a freelancer, I had zero time for tax paperwork. TaxWala.ai handles everything. I just upload receipts and it's done. Best tool I've used!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold">3</span>
          </div>
          <div className="h-px w-12 bg-gray-900" />
          <span className="text-sm font-semibold uppercase tracking-wider">Trust & Security</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
          Built by experts, trusted by businesses
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
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
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
      <StarIcon key={idx} className="w-5 h-5 text-gold" />
    ))}
  </div>
);

const UrgencySection: React.FC = () => (
  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center reveal-on-scroll">
    <p className="text-2xl font-bold text-gray-900 mb-4">
      <span className="text-red-600">427 spots remaining</span> in private beta
    </p>
    <p className="text-gray-600 mb-6">Slots are filling fast. Join now to secure your lifetime free access.</p>
    <button
      className="cta-button bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all shadow-lg"
      data-tally-open={TALLY_FORM_ID}
      data-tally-emoji-text="🚀"
      data-tally-emoji-animation="wave"
    >
      Be part of the story
    </button>
  </div>
);
