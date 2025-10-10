import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { navLinks } from "../../constants/data";

export const Navbar = () => {
  const { menuOpen, setMenuOpen } = useAppContext();
  const location = useLocation();
  const activeSection = useActiveSection();

  const isActive = (path, hash) => {
    // On homepage, check against active section from scroll detection
    if (location.pathname === "/") {
      return activeSection === hash;
    }
    // On other pages, check against current path
    return location.pathname === path;
  };

  const handleNavigation = (e, link) => {
    // If we're on the home page and clicking a section link, smooth scroll
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Otherwise, use the Link component's default behavior (navigate to route)
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <Link to="/" className="group font-mono text-base sm:text-lg font-bold text-white flex items-center space-x-2">
            <span className="relative">
              <span className="relative z-10">ranvijay</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">-kumar4</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </span>
          </Link>

          <div
            className="text-2xl sm:text-3xl relative cursor-pointer z-40 md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={(e) => handleNavigation(e, link)}
                className={`relative px-2 lg:px-3 py-2 transition-all duration-300 group text-xs lg:text-sm ${
                  isActive(link.path, link.hash) ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    isActive(link.path, link.hash) ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

