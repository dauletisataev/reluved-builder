"use client";

import React, { useEffect, useState } from "react";
import { LoadingStep } from "./LoadingStep";
import { analyzeSteps } from "@/app/utils/analyzeSteps";
import { useSimulatedProgress } from "@/app/hooks/useSimulatedProgress";

interface LoadingModalProps {
  onComplete: () => void;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({ onComplete }) => {
  const [isLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = analyzeSteps();

  const progress = useSimulatedProgress({
    isLoading,
    duration: 9000,
    initialProgress: 0,
  });

  // Update current step based on progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1;
        } else {
          clearInterval(interval);
          // Delay the completion callback to allow the user to see all steps
          setTimeout(() => {
            onComplete();
          }, 1000);
          return prevStep;
        }
      });
    }, 1500); // Change to the next step every 2 seconds

    return () => clearInterval(interval);
  }, [steps.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-[var(--background)] bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--background)] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-2">
          Fetching Your Previous Orders...
        </h2>
        <p className="text-[var(--foreground-muted)] mb-6">
          Connecting to brand servers...
        </p>

        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
          <div
            className="absolute h-full bg-blue-600"
            style={{
              width: `${progress}%`,
              transition: "width 100ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        <div className="mt-4">
          <LoadingStep
            key={currentStep}
            title={steps[currentStep].title}
            description={steps[currentStep].description}
            status="loading"
          />
        </div>

        <p className="text-[var(--foreground-muted)] text-sm mt-8">
          This helps you quickly list items you&apos;ve purchased before.
        </p>
      </div>
    </div>
  );
};
