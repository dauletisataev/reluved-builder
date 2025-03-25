import React from "react";
import {
  IconBulb,
  IconExternalLink,
  IconFlag,
  IconCube,
  IconChartBar,
  IconLeaf,
} from "@tabler/icons-react";

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

export const PlatformBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <IconBulb size={20} stroke={1.5} />,
      text: "One-click integration",
    },
    {
      icon: <IconExternalLink size={20} stroke={1.5} />,
      text: "API connectivity",
    },
    {
      icon: <IconFlag size={20} stroke={1.5} />,
      text: "Customizable storefront",
    },
    {
      icon: <IconCube size={20} stroke={1.5} />,
      text: "Seller management",
    },
    {
      icon: <IconChartBar size={20} stroke={1.5} />,
      text: "Real-time analytics",
    },
    {
      icon: <IconLeaf size={20} stroke={1.5} />,
      text: "Sustainable shopping",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-3xl">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="px-5 py-3 rounded-full border border-[var(--border)] text-sm flex items-center gap-2 hover:bg-[var(--border)] transition-colors"
        >
          {benefit.icon}
          {benefit.text}
        </div>
      ))}
    </div>
  );
};
