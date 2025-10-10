import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Wrapper component for scroll reveal animations
 */
export const RevealOnScroll = ({ children, options }) => {
  const ref = useScrollReveal(options);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

