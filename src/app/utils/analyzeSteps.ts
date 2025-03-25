export interface AnalysisStep {
  title: string;
  description: string;
}

export const analyzeSteps = (): AnalysisStep[] => {
  return [
    {
      title: "Analyzing website",
      description:
        "Extracting brand identity, color schemes, and product categories",
    },
    {
      title: "Reading product data",
      description: "Reading product data from the brand website",
    },
    {
      title: "Customizing storefront",
      description: "Designing your resale platform with brand-consistent UI",
    },
    {
      title: "Preparing seller tools",
      description: "Setting up listing and management features for sellers",
    },
    {
      title: "Finalizing setup",
      description: "Almost ready to launch your custom resale marketplace",
    },
  ];
};
