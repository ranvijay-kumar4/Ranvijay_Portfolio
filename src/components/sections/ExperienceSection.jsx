import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { experiences } from "../../constants/data";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-center animate-fadeIn">
            Work Experience
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 border border-blue-500/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex items-start gap-4 mb-4 sm:mb-0">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex-shrink-0 shadow-lg">
                        <FaBriefcase className="text-cyan-400 text-2xl sm:text-3xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                          {exp.position}
                        </h3>
                        <p className="text-base sm:text-lg text-cyan-400 font-semibold mb-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${
                        exp.duration.includes('Present') 
                          ? 'bg-red-500/90 text-white border-2 border-red-400 shadow-lg shadow-red-500/50' 
                          : 'bg-red-500/90 text-white border-2 border-red-400 shadow-lg shadow-red-500/50'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm sm:text-base text-gray-300">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>{exp.location}</span>
                    <span className="px-3 py-1.5 bg-blue-500/90 border-2 border-blue-400 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wide shadow-lg shadow-blue-500/50">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-blue-500/20">
                    <ul className="text-sm sm:text-base text-gray-200 space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

