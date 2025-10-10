import { useState, useEffect } from "react";

/**
 * Custom hook to detect which section is currently active/visible
 * Uses IntersectionObserver to track visible sections
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.getAttribute("id")}`;
          setActiveSection(id);
          
          // Update URL hash without scrolling
          if (window.location.pathname === "/") {
            window.history.replaceState(null, "", id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

