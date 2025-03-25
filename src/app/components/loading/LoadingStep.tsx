"use client";

import React from "react";
import { IconCheck } from "@tabler/icons-react";

interface LoadingStepProps {
  title: string;
  description: string;
  status: "pending" | "loading" | "completed";
}

export const LoadingStep: React.FC<LoadingStepProps> = ({
  title,
  description,
  status,
}) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4 mt-1">
        {status === "completed" ? (
          <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
            <IconCheck size={16} className="text-white" />
          </div>
        ) : (
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${
              status === "loading"
                ? "border-[var(--primary)] animate-pulse"
                : "border-[var(--border)]"
            }`}
          >
            {status === "loading" && (
              <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
            )}
          </div>
        )}
      </div>
      <div>
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-[var(--foreground-muted)]">{description}</p>
      </div>
    </div>
  );
};
