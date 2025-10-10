import { FaUniversity } from "react-icons/fa";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { education } from "../../constants/data";

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-fadeIn">
            Education
          </h2>

          <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="p-5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl">
                  <FaUniversity className="text-blue-400 text-4xl sm:text-5xl" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {education.degree}
              </h3>
              
              <p className="text-lg sm:text-xl text-cyan-400 mb-4">
                {education.institution}
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                {education.duration}
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

