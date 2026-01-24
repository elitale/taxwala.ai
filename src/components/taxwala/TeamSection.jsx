import React from "react";
import { team } from "./content";

const TeamSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built by Entrepreneurs, For Entrepreneurs</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a team of founders who felt the pain of tax paperwork firsthand. Now we're solving it for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {team.map((member, idx) => (
          <div key={member.name} className="text-center reveal-on-scroll" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
            <div className="mb-6 relative inline-block">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl mx-auto">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div
                className={`absolute -bottom-3 left-1/2 -translate-x-1/2 ${member.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}
              >
                {member.tag}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{member.sub}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
