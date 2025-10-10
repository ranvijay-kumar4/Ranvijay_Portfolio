import { RevealOnScroll } from "../common/RevealOnScroll";
import { codingProfiles, socialLinks, personalInfo } from "../../constants/data";
import { getIconComponent } from "../../utils/iconMapping";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Coding Profiles Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
              Coding Profiles
            </h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {codingProfiles.map((link) => {
                const IconComponent = getIconComponent(link.icon);
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                      <div
                        className={`relative backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-blue-500/50 ${link.hoverBg}`}
                      >
                        <IconComponent className="text-white w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <span className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
              Connect with Me
            </h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {socialLinks.map((link) => {
                const IconComponent = getIconComponent(link.icon);
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                      <div
                        className={`relative backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-blue-500/50 ${link.hoverBg}`}
                      >
                        <IconComponent className="text-white w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <span className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-block px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full">
              <p className="text-gray-400 text-sm sm:text-base">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">{personalInfo.name}</span>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

