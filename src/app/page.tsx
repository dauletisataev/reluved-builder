"use client";

import { useState } from "react";
import { IconHeartFilled } from "@tabler/icons-react";
import { Header } from "./components/header/Header";
import { PlatformBenefits } from "./components/benefits/PlatformBenefits";
import { LoadingModal } from "./components/loading/LoadingModal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const handleLaunch = () => {
    if (websiteUrl) {
      setIsLoading(true);
    }
  };

  const handleAnalysisComplete = () => {
    setIsLoading(false);
    setIsComplete(true);
    // In a real application, we would navigate to the configuration page
    // For now, we'll just reset the state after 2 seconds
    setTimeout(() => {
      setIsComplete(false);
      setWebsiteUrl("");
      router.push("/customization");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        {/* Animated Heart Logo */}
        <div className="mb-8 relative w-24 h-24 gradient-bg rounded-2xl overflow-hidden flex items-center justify-center animate-pulse-slow">
          <IconHeartFilled className="animate-pulse w-12 h-12 text-white" />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span>Brand to </span>
          <span className="gradient-text">resale</span>
          <span> in seconds.</span>
        </h1>

        <p className="text-xl text-[var(--foreground-muted)] text-center mb-12 max-w-2xl">
          Reluved is your superhuman tool for launching brand resale
          marketplaces effortlessly.
        </p>

        {/* URL Input */}
        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your brand website URL"
              className="input-primary"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              disabled={isLoading || isComplete}
            />
            <button
              className={`btn-primary absolute right-1 top-1 h-[calc(100%-8px)] ${
                isLoading || isComplete ? "opacity-70" : ""
              }`}
              onClick={handleLaunch}
              disabled={isLoading || isComplete || !websiteUrl}
            >
              {isComplete ? "Complete!" : "Launch"}
            </button>
          </div>
        </div>

        {/* Platform Benefits */}
        <PlatformBenefits />
      </main>

      {/* Loading Modal */}
      {isLoading && (
        <LoadingModal
          websiteUrl={websiteUrl}
          onComplete={handleAnalysisComplete}
        />
      )}
    </div>
  );
}
