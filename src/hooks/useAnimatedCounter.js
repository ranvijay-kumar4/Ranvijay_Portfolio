import { useState, useEffect } from 'react';

export const useAnimatedCounter = (targetValue, duration = 2000, isVisible = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * targetValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, isVisible]);

  return count;
};

// Special hook for countdown animation (250 to 25)
export const useAnimatedCountdown = (startValue, targetValue, duration = 2000, isVisible = true) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(startValue - (easeOutQuart * (startValue - targetValue)));
      setCount(Math.max(currentCount, targetValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [startValue, targetValue, duration, isVisible]);

  return count;
};
