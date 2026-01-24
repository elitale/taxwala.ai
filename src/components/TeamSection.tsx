/**
 * Team Section Component
 * Displays the founding team members
 */

import React from "react";
import type { TeamMember } from "../types/index";

export const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Aarav Kumar",
      role: "Co-Founder",
      bio: "Built automation systems for 100+ businesses",
      subtitle: "Ex-Fintech, IIT Delhi",
      image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400&h=400&fit=crop&crop=faces",
      badgeColor: "bg-primary",
    },
    {
      name: "Vihaan Sharma",
      role: "Co-Founder",
      bio: "15+ years in Indian taxation & compliance",
      subtitle: "Ex-CA, Tax Expert",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces",
      badgeColor: "bg-primary",
    },
    {
      name: "Dhruv Desai",
      role: "Lead Engineer",
      bio: "Built ML models used by millions globally",
      subtitle: "Ex-Google, AI Specialist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
      badgeColor: "bg-purple-600",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built by Entrepreneurs, For Entrepreneurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of founders who felt the pain of tax paperwork firsthand. Now we're solving it for you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={member.name} member={member} delay={`${(idx + 1) * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  delay: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay }) => (
  <div className="text-center reveal-on-scroll" style={{ animationDelay: delay }}>
    <div className="mb-6 relative inline-block">
      <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl mx-auto">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 ${member.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}
      >
        {member.role}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
    <p className="text-gray-600 text-sm mb-3">{member.subtitle}</p>
    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
  </div>
);
