import { useState, useEffect } from "react";

interface UseSimulatedProgressOptions {
  isLoading: boolean;
  duration?: number; // in milliseconds
  initialProgress?: number;
}

/**
 * Hook to simulate a progress indicator that naturally slows down as it approaches completion
 */
export const useSimulatedProgress = ({
  isLoading,
  duration = 9000, // Default to 9 seconds
  initialProgress = 0,
}: UseSimulatedProgressOptions) => {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    if (isLoading) {
      // Reset progress when loading starts
      setProgress(initialProgress);

      // Calculate interval based on desired duration
      const totalSteps = 100 - initialProgress;
      const baseInterval = Math.floor(duration / totalSteps);

      const interval = setInterval(() => {
        setProgress((prev) => {
          // Simulate slower progress as we approach 100%
          if (prev < 70) {
            return prev + 3;
          } else if (prev < 90) {
            return prev + 1;
          } else if (prev < 95) {
            return prev + 0.5;
          }
          return prev;
        });
      }, baseInterval);

      return () => clearInterval(interval);
    } else {
      // When actually loaded, quickly complete the progress
      setProgress(100);
    }
  }, [isLoading, initialProgress, duration]);

  return progress;
};
