import { useEffect, useRef } from "react";
import Typed from "typed.js";

/**
 * Custom hook for Typed.js text animation
 * @param {Array} strings - Array of strings to type
 * @param {Object} options - Typed.js options
 * @returns {Object} - ref to attach to element
 */
export const useTyped = (strings, options = {}) => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const defaultOptions = {
      strings,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
      ...options,
    };

    typedInstance.current = new Typed(typedRef.current, defaultOptions);

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [strings, options]);

  return typedRef;
};

