import { useState, useEffect, useRef } from "react";
import { FaCode, FaTrophy, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { achievements } from "../../constants/data";
import { useAnimatedCounter, useAnimatedCountdown } from "../../hooks/useAnimatedCounter";

const iconMap = {
  code: FaCode,
  trophy: FaTrophy,
  event: FaCalendarAlt,
  leadership: FaUsers,
};

export const AchievementsSection = () => {
  // Simplified approach - start counters immediately for testing
  const [isVisible, setIsVisible] = useState(true);

  // Counter animations
  const dsaProblems = useAnimatedCounter(400, 2000, isVisible);
  const hackathonRank = useAnimatedCountdown(250, 25, 2000, isVisible);
  const participants = useAnimatedCounter(100, 2000, isVisible);
  const eventsOrganized = useAnimatedCounter(5, 2000, isVisible);

  // Debug logging
  console.log('Counters:', { dsaProblems, hackathonRank, participants, eventsOrganized });

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-fuchsia-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-fadeIn">
              Awards & Achievements
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Recognized for technical excellence, leadership, and community contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon];
              return (
                <div
                  key={achievement.id}
                  className={`group relative backdrop-blur-xl bg-gradient-to-br ${achievement.bgGradient} border ${achievement.borderColor} ${achievement.hoverBorder} p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl ${achievement.shadowColor} transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-50 group-hover:opacity-100 rounded-2xl transition-all duration-500`}></div>
                  
                  <div className="relative">
                    {/* Icon and Category */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`p-3 bg-gradient-to-br ${achievement.iconBg} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`text-3xl sm:text-4xl text-white`} />
                      </div>
                      <span className={`px-4 py-2 bg-red-500/90 border-2 border-red-400 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-lg shadow-red-500/50 backdrop-blur-sm`}>
                        {achievement.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold mb-3 text-white leading-tight">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-200 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Highlights */}
                    <div className={`pt-5 border-t ${achievement.borderColor}`}>
                      <h4 className={`text-xs font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent uppercase tracking-wide mb-3`}>
                        Key Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {achievement.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-100">
                            <span className={`bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mr-2.5 flex-shrink-0 font-black text-base`}>
                              ✓
                            </span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decorative corner gradient - subtle */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${achievement.gradient}/10 rounded-bl-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-2xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${achievement.gradient}/8 rounded-tr-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl`}></div>
                </div>
              );
            })}
          </div>

          {/* Achievement Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="group/stat backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-5 sm:p-6 rounded-2xl text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                {dsaProblems || 0}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">DSA Problems Solved</div>
            </div>
            
            <div className="group/stat backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-5 sm:p-6 rounded-2xl text-center hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                Top {hackathonRank || 250}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">at DPBH 2023, IIT BHU</div>
            </div>
            
            <div className="group/stat backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-5 sm:p-6 rounded-2xl text-center hover:border-fuchsia-400/60 hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                {participants || 0}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">Participants Engaged</div>
            </div>
            
            <div className="group/stat backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 p-5 sm:p-6 rounded-2xl text-center hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                {eventsOrganized || 0}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">Events Organized</div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

