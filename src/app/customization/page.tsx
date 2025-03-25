"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/header/Header";
import {
  IconExternalLink,
  IconReload,
  IconCopy,
  IconLock,
  IconChevronRight,
  IconCheck,
} from "@tabler/icons-react";

// Step interface
interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
}

export default function CustomizationPage() {
  // State for steps
  const [steps, setSteps] = useState<Step[]>([
    {
      id: "platform-name",
      title: "Resale Platform Name",
      description: "Set the name for your resale marketplace",
      completed: false,
      active: true,
    },
    {
      id: "orders-integration",
      title: "Orders Integration",
      description: "Connect sell form with existing orders from your brand",
      completed: false,
      active: false,
    },
    {
      id: "coupon-api",
      title: "Coupon API",
      description: "Provide API for generating coupons for sellers",
      completed: false,
      active: false,
    },
  ]);

  // State for form values
  const [formValues, setFormValues] = useState({
    platformName: "",
    ordersApiEndpoint: "",
    ordersApiKey: "",
    couponApiEndpoint: "",
    couponApiKey: "",
  });

  // Add state for preview URL
  const [previewUrl, setPreviewUrl] = useState("https://resale.yourbrand.com");

  // Add loading state
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);

  // Get active step
  const activeStep = steps.find((step) => step.active) || steps[0];

  // Handle form value changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle step click
  const handleStepClick = (clickedStep: Step) => {
    if (clickedStep.completed || isAdjacentToActive(clickedStep)) {
      setSteps(
        steps.map((step) => ({
          ...step,
          active: step.id === clickedStep.id,
        }))
      );
    }
  };

  // Check if a step is adjacent to the active step
  const isAdjacentToActive = (step: Step) => {
    const activeIndex = steps.findIndex((s) => s.active);
    const clickedIndex = steps.findIndex((s) => s.id === step.id);
    return Math.abs(activeIndex - clickedIndex) === 1;
  };

  // Handle step completion
  const handleStepComplete = () => {
    const currentIndex = steps.findIndex((step) => step.active);

    setSteps(
      steps.map((step, index) => {
        if (step.active) {
          return { ...step, completed: true, active: false };
        }
        if (index === currentIndex + 1) {
          return { ...step, active: true };
        }
        return step;
      })
    );
  };

  // Handle copy URL
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(previewUrl);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  // Handle reload preview
  const handleReload = () => {
    setIsPreviewLoading(true);
    // Simulate reload delay
    setTimeout(() => {
      setIsPreviewLoading(false);
    }, 1000);
  };

  // Handle open in new tab
  const handleOpenInNewTab = () => {
    window.open(previewUrl, "_blank");
  };

  // Update preview URL when platform name changes
  useEffect(() => {
    if (formValues.platformName) {
      const sanitizedName = formValues.platformName
        .toLowerCase()
        .replace(/\s+/g, "-");
      setPreviewUrl(`https://${sanitizedName}.reluved.io`);
    } else {
      setPreviewUrl("https://resale.yourbrand.com");
    }
  }, [formValues.platformName]);

  // Render the active step content
  const renderStepContent = () => {
    switch (activeStep.id) {
      case "platform-name":
        return (
          <div className="space-y-4 mt-6">
            <label htmlFor="platformName" className="block mb-2">
              Platform Name
            </label>
            <input
              type="text"
              id="platformName"
              name="platformName"
              value={formValues.platformName}
              onChange={handleInputChange}
              className="input-primary w-full"
              placeholder="e.g. Brand Name Resale"
            />
          </div>
        );
      case "orders-integration":
        return (
          <div className="space-y-4 mt-6">
            <label htmlFor="ordersApiEndpoint" className="block mb-2">
              Orders API Endpoint
            </label>
            <input
              type="text"
              id="ordersApiEndpoint"
              name="ordersApiEndpoint"
              value={formValues.ordersApiEndpoint}
              onChange={handleInputChange}
              className="input-primary w-full"
              placeholder="https://yourbrand.com/api/orders"
            />

            <label htmlFor="ordersApiKey" className="block mb-2 mt-4">
              API Key
            </label>
            <input
              type="password"
              id="ordersApiKey"
              name="ordersApiKey"
              value={formValues.ordersApiKey}
              onChange={handleInputChange}
              className="input-primary w-full"
              placeholder="Your API key"
            />
          </div>
        );
      case "coupon-api":
        return (
          <div className="space-y-4 mt-6">
            <label htmlFor="couponApiEndpoint" className="block mb-2">
              Coupon API Endpoint
            </label>
            <input
              type="text"
              id="couponApiEndpoint"
              name="couponApiEndpoint"
              value={formValues.couponApiEndpoint}
              onChange={handleInputChange}
              className="input-primary w-full"
              placeholder="https://yourbrand.com/api/coupons"
            />

            <label htmlFor="couponApiKey" className="block mb-2 mt-4">
              API Key
            </label>
            <input
              type="password"
              id="couponApiKey"
              name="couponApiKey"
              value={formValues.couponApiKey}
              onChange={handleInputChange}
              className="input-primary w-full"
              placeholder="Your API key"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex">
        {/* Left sidebar with steps */}
        <div className="w-[400px] min-w-[400px] bg-[var(--background)] border-r border-[var(--border)] h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-6 border-b border-[var(--border)] bg-[var(--background)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Customize Your Resale Platform
            </h2>
          </div>

          {/* Steps */}
          <div className="divide-y divide-[var(--border)]">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => handleStepClick(step)}
                className={`relative p-6 transition-colors ${
                  step.active ? "step-active" : ""
                } ${"step-hover cursor-pointer"}`}
              >
                <div className="flex items-start gap-4 text-white">
                  {/* Step number/check */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all text-white ${
                      step.completed
                        ? "border-[var(--primary)]"
                        : step.active
                        ? "border-[var(--primary)]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    {step.completed ? (
                      <IconCheck className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold`}>{step.title}</h3>
                      {!step.completed && step.active && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStepComplete();
                          }}
                          className="btn-primary py-1.5 px-4 text-sm"
                        >
                          {index === steps.length - 1 ? "Finish" : "Next"}
                        </button>
                      )}
                      {step.completed && !step.active && (
                        <IconChevronRight className="w-5 h-5" />
                      )}
                    </div>

                    <p className="text-sm mt-1">{step.description}</p>

                    {/* Form fields */}
                    {step.active && (
                      <div className="mt-6 space-y-4">
                        {renderStepContent()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side for preview */}
        <div className="flex-1 flex flex-col">
          {/* Browser-like navbar */}
          <div className="flex items-center gap-2 p-4 border-b border-[var(--border)] bg-[var(--background)]">
            <div className="flex-1 flex items-center gap-2">
              {/* URL bar */}
              <div className="flex-1 flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-lg px-3 py-1.5">
                <IconLock className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-[var(--foreground)] text-sm flex-1 font-mono">
                  {previewUrl}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyUrl}
                className="p-2 hover:bg-[var(--hover)] rounded-lg transition-colors"
                title="Copy URL"
              >
                <IconCopy className="w-5 h-5 text-[var(--foreground-muted)] hover:text-[var(--foreground)]" />
              </button>
              <button
                onClick={handleReload}
                className={`p-2 hover:bg-[var(--hover)] rounded-lg transition-colors ${
                  isPreviewLoading ? "animate-spin" : ""
                }`}
                title="Reload preview"
              >
                <IconReload className="w-5 h-5 text-[var(--foreground-muted)] hover:text-[var(--foreground)]" />
              </button>
              <button
                onClick={handleOpenInNewTab}
                className="p-2 hover:bg-[var(--hover)] rounded-lg transition-colors"
                title="Open in new tab"
              >
                <IconExternalLink className="w-5 h-5 text-[var(--foreground-muted)] hover:text-[var(--foreground)]" />
              </button>
            </div>
          </div>

          {/* Preview content */}
          <div className="flex-1 bg-[var(--background)] p-4">
            <div
              className={`h-full w-full transition-opacity duration-300 ${
                isPreviewLoading ? "opacity-50" : "opacity-100"
              }`}
            >
              <iframe
                src="https://minikid.reluved.com/en"
                className="w-full h-full rounded-lg border border-[var(--border)]"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
