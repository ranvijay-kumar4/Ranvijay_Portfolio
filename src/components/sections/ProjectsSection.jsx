import { RevealOnScroll } from "../common/RevealOnScroll";
import { projects } from "../../constants/data";

// Dynamic import function for images
const getProjectImage = (imageName) => {
  try {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.error(`Image not found: ${imageName}`);
    return "";
  }
};

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Featured Project - Full Width */}
          {featuredProjects.length > 0 && (
            <div className="mb-8 sm:mb-12">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/60"
                >
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg animate-pulse">
                      ⭐ Featured
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/10 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  
                  <div className="relative grid md:grid-cols-2 gap-4 pt-12">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 md:h-64 bg-gray-800/50 flex items-center justify-center p-3">
                      <img
                        src={getProjectImage(project.image)}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center"><div class="text-center"><div class="text-6xl mb-4">💻</div><div class="text-white font-bold text-xl">CodeSync</div></div></div>';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, key) => (
                          <span
                            key={key}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-xs sm:text-sm hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/link"
                      >
                        <span>View Live Project</span>
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-300 text-center">
                More Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative overflow-hidden">
                  <div className="relative overflow-hidden h-48 sm:h-56 bg-gray-800/30 flex items-center justify-center p-3">
                    <img
                      src={getProjectImage(project.image)}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, key) => (
                        <span
                          key={key}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm sm:text-base font-semibold text-blue-400 hover:text-cyan-400 transition-colors group/link"
                      >
                        <span>View Project</span>
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

