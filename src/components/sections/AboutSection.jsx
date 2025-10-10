import { RevealOnScroll } from "../common/RevealOnScroll";
import { skills } from "../../constants/data";
import { getIconComponent } from "../../utils/iconMapping";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-white relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-fadeIn">
              About Me
            </h2>

            <p className="text-center text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed max-w-3xl mx-auto">
              Full Stack Developer specializing in <span className="text-cyan-400 font-semibold">MERN Stack</span>, with expertise in building scalable, production-ready web applications using modern technologies.
            </p> 
            <p className="text-center text-xs sm:text-sm md:text-base text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto"> 
              Currently working as a <span className="text-green-400 font-semibold">Software Developer Intern</span> at <strong className="text-blue-400">"MBG Card India Pvt. Ltd."</strong> and previously at <strong className="text-blue-400">"Savshka Communications Pvt. Ltd."</strong>, building high-performance web applications with React.js, Node.js, Express.js, and MongoDB. Passionate about solving complex problems, optimizing performance, and creating exceptional user experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skillCategory) => (
              <div 
                key={skillCategory.id} 
                className="group relative rounded-2xl p-4 sm:p-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
                
                <h3 className="relative text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {skillCategory.category}
                </h3>
                
                <div className="relative flex flex-wrap gap-3 sm:gap-4 justify-center">
                  {skillCategory.skills.map((skill, index) => {
                    const IconComponent = getIconComponent(skill.name);
                    return (
                      <div key={index} className="group/item flex flex-col items-center">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center transition-all group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50 border border-white/5 group-hover/item:border-blue-500/50">
                          <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${skill.color} ${skill.hoverColor} transition-all duration-300`} />
                        </div>
                        <span className="text-xs text-gray-400 mt-1.5 group-hover/item:text-cyan-400 transition text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

