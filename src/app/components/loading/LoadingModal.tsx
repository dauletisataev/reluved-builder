"use client";

import React, { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { LoadingStep } from "./LoadingStep";
import { analyzeSteps } from "@/app/utils/analyzeSteps";

interface LoadingModalProps {
  websiteUrl: string;
  onComplete: () => void;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({
  websiteUrl,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = analyzeSteps();

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
    }, 2000); // Change to the next step every 2 seconds

    return () => clearInterval(interval);
  }, [steps.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-[var(--background)] bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--background)] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-2">Analyzing your website</h2>
        <p className="text-[var(--foreground-muted)] mb-6">
          We're setting up your resale marketplace based on your brand at{" "}
          <span className="font-medium">{websiteUrl}</span>
        </p>

        <ProgressBar currentStep={currentStep} totalSteps={steps.length - 1} />

        <div className="mt-8">
          {steps.map((step, index) => (
            <LoadingStep
              key={index}
              title={step.title}
              description={step.description}
              status={
                index < currentStep
                  ? "completed"
                  : index === currentStep
                  ? "loading"
                  : "pending"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
