import { Link } from "react-router-dom";
import { FaEnvelope, FaCommentDots } from "react-icons/fa";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { useTyped } from "../../hooks/useTyped";
import { personalInfo } from "../../constants/data";
import profilePic from "../assets/profile.jpg";

export const HeroSection = () => {
  const typedRef = useTyped(personalInfo.roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden p-4 sm:p-6 md:p-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center z-10 max-w-5xl w-full text-center md:text-left gap-6 md:gap-8">
          <div className="relative group flex-shrink-0">
            {/* Animated gradient border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            
            {/* Photo container */}
            <div className="relative animate-profile-float">
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white/20 shadow-2xl object-cover object-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 group-hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight animate-gradient bg-300% animate-fadeIn">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-200 animate-fadeIn">
              I'm a <span ref={typedRef} className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold"></span>
            </p>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fadeIn delay-100">
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 animate-fadeIn delay-200">
              <a
                href="#projects"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold transition-all duration-300 overflow-hidden text-sm sm:text-base shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-xl bg-white/5 border-2 border-green-500/50 text-green-400 py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold transition-all duration-300 
                flex items-center justify-center space-x-2 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30 text-sm sm:text-base hover:bg-green-500/10"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
                <span>Mail Me</span>
              </a>

              <a
                href={`https://wa.me/${personalInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold transition-all duration-300 
                flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg hover:shadow-green-500/50 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                <FaCommentDots className="group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">Message Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

