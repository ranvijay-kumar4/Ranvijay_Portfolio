import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { navLinks } from "../../constants/data";

export const MobileMenu = () => {
  const { menuOpen, closeMenu } = useAppContext();
  const location = useLocation();
  const activeSection = useActiveSection();

  const handleLinkClick = (e, link) => {
    // If we're on the home page and clicking a section link, smooth scroll
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Close menu after clicking
    closeMenu();
  };

  const isActive = (path, hash) => {
    // On homepage, check against active section from scroll detection
    if (location.pathname === "/") {
      return activeSection === hash;
    }
    // On other pages, check against current path
    return location.pathname === path;
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-xl z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={closeMenu}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-blue-400 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {navLinks.map((link, index) => (
        <Link
          key={link.id}
          to={link.path}
          onClick={(e) => handleLinkClick(e, link)}
          className={`text-xl sm:text-2xl font-semibold my-3 sm:my-4 transform transition-all duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                    ${
                      isActive(link.path, link.hash)
                        ? "text-blue-400"
                        : "text-white hover:text-cyan-400"
                    }
            `}
          style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

