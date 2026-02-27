export interface LLMBenchmarkEntry {
  model: string;
  scores: {
    Antitrust: number;
    "Industrial Policy": number;
    "National Security": number;
    "Civil & Human Rights": number;
    "Safety & Security": number;
  };
}

export interface BillBenchmark {
  id: string;
  name: string;
  shortName: string;
  focusCategory: string;
  models: LLMBenchmarkEntry[];
}

const LLM_MODELS = [
  "Rubric-Calibrated Model",
  "OpenAI GPT-5.2",
  "Claude Sonnet 4.5",
  "Google Gemini 3 Pro",
  "Grok 4.1 Thinking",
  "DeepSeek-V3.2 Thinking",
  "Kimi K2.5",
] as const;

export const MODEL_COLORS: Record<string, string> = {
  "Rubric-Calibrated Model": "hsl(221, 83%, 53%)",
  "OpenAI GPT-5.2": "hsl(160, 70%, 45%)",
  "Claude Sonnet 4.5": "hsl(25, 95%, 53%)",
  "Google Gemini 3 Pro": "hsl(142, 71%, 45%)",
  "Grok 4.1 Thinking": "hsl(280, 65%, 60%)",
  "DeepSeek-V3.2 Thinking": "hsl(199, 89%, 48%)",
  "Kimi K2.5": "hsl(340, 75%, 55%)",
};

// Maps policy IDs (from policies.ts) to their benchmark IDs
export const policyToBenchmarkId: Record<string, string> = {
  "california-2025-sb53-safety-security": "california-sb53-bench",
  "california-2025-sb53-industrial-policy": "california-sb53-bench",
  "colorado-ai-act": "colorado-ai-act-bench",
  "eo-ai-exports": "eo-14320",
  "eu-dma-2025": "eu-dma-2025",
  "ndaa-2026": "ndaa-2026",
};

export function getBenchmarkForPolicy(policyId: string): BillBenchmark | undefined {
  const benchmarkId = policyToBenchmarkId[policyId];
  if (!benchmarkId) return undefined;
  return billBenchmarks.find((b) => b.id === benchmarkId);
}

export const billBenchmarks: BillBenchmark[] = [
  {
    id: "eu-dma-2025",
    name: "EU Digital Markets Act (2025)",
    shortName: "EU DMA",
    focusCategory: "Antitrust",
    models: [
      { model: LLM_MODELS[0], scores: { Antitrust: 50.31, "Industrial Policy": 39.24, "National Security": 42.79, "Civil & Human Rights": 46.00, "Safety & Security": 44.43 } },
      { model: LLM_MODELS[1], scores: { Antitrust: 78.75, "Industrial Policy": 1.0, "National Security": 4.0, "Civil & Human Rights": 29.0, "Safety & Security": 28.25 } },
      { model: LLM_MODELS[2], scores: { Antitrust: 91.5, "Industrial Policy": 4.17, "National Security": 3.75, "Civil & Human Rights": 33.33, "Safety & Security": 12.5 } },
      { model: LLM_MODELS[3], scores: { Antitrust: 100, "Industrial Policy": 2.5, "National Security": 11.25, "Civil & Human Rights": 53.75, "Safety & Security": 25 } },
      { model: LLM_MODELS[4], scores: { Antitrust: 100, "Industrial Policy": 0.0, "National Security": 3.75, "Civil & Human Rights": 60.25, "Safety & Security": 13.75 } },
      { model: LLM_MODELS[5], scores: { Antitrust: 77.5, "Industrial Policy": 0.0, "National Security": 0.0, "Civil & Human Rights": 55.0, "Safety & Security": 0.0 } },
      { model: LLM_MODELS[6], scores: { Antitrust: 83.75, "Industrial Policy": 2.5, "National Security": 0.0, "Civil & Human Rights": 45.0, "Safety & Security": 11.25 } },
    ],
  },
  {
    id: "eo-14320",
    name: "Executive Order 14320: Promoting the Export of the American AI Technology Stack",
    shortName: "EO 14320",
    focusCategory: "Industrial Policy",
    models: [
      { model: LLM_MODELS[0], scores: { Antitrust: 45.98, "Industrial Policy": 52.59, "National Security": 50.86, "Civil & Human Rights": 42.88, "Safety & Security": 41.42 } },
      { model: LLM_MODELS[1], scores: { Antitrust: 3.75, "Industrial Policy": 35.0, "National Security": 33.25, "Civil & Human Rights": 0.0, "Safety & Security": 3.75 } },
      { model: LLM_MODELS[2], scores: { Antitrust: 0.0, "Industrial Policy": 50.0, "National Security": 26.25, "Civil & Human Rights": 0.0, "Safety & Security": 3.75 } },
      { model: LLM_MODELS[3], scores: { Antitrust: 0.0, "Industrial Policy": 45.0, "National Security": 27.5, "Civil & Human Rights": 0.0, "Safety & Security": 7.5 } },
      { model: LLM_MODELS[4], scores: { Antitrust: 0.0, "Industrial Policy": 30.0, "National Security": 27.5, "Civil & Human Rights": 0.0, "Safety & Security": 3.75 } },
      { model: LLM_MODELS[5], scores: { Antitrust: 0.0, "Industrial Policy": 42.5, "National Security": 27.5, "Civil & Human Rights": 0.0, "Safety & Security": 3.75 } },
      { model: LLM_MODELS[6], scores: { Antitrust: 3.75, "Industrial Policy": 48.75, "National Security": 31.25, "Civil & Human Rights": 0.0, "Safety & Security": 13.75 } },
    ],
  },
  {
    id: "ndaa-2026",
    name: "2026 NDAA: Subtitle D \u2013 Artificial Intelligence",
    shortName: "2026 NDAA",
    focusCategory: "National Security",
    models: [
      { model: LLM_MODELS[0], scores: { Antitrust: 49.29, "Industrial Policy": 56.40, "National Security": 60.21, "Civil & Human Rights": 49.84, "Safety & Security": 52.69 } },
      { model: LLM_MODELS[1], scores: { Antitrust: 7.25, "Industrial Policy": 28.25, "National Security": 55.75, "Civil & Human Rights": 7.0, "Safety & Security": 46.0 } },
      { model: LLM_MODELS[2], scores: { Antitrust: 7.5, "Industrial Policy": 37.5, "National Security": 62.5, "Civil & Human Rights": 20.83, "Safety & Security": 43.75 } },
      { model: LLM_MODELS[3], scores: { Antitrust: 10.0, "Industrial Policy": 47.5, "National Security": 71.25, "Civil & Human Rights": 18.75, "Safety & Security": 55.0 } },
      { model: LLM_MODELS[4], scores: { Antitrust: 0.0, "Industrial Policy": 24.0, "National Security": 59.0, "Civil & Human Rights": 5.0, "Safety & Security": 19.0 } },
      { model: LLM_MODELS[5], scores: { Antitrust: 0.0, "Industrial Policy": 10.0, "National Security": 38.75, "Civil & Human Rights": 0.0, "Safety & Security": 33.75 } },
      { model: LLM_MODELS[6], scores: { Antitrust: 10.0, "Industrial Policy": 33.75, "National Security": 63.75, "Civil & Human Rights": 18.75, "Safety & Security": 43.75 } },
    ],
  },
  {
    id: "colorado-ai-act-bench",
    name: "Colorado AI Act",
    shortName: "Colorado AI Act",
    focusCategory: "Civil & Human Rights",
    models: [
      { model: LLM_MODELS[0], scores: { Antitrust: 53.83, "Industrial Policy": 51.58, "National Security": 56.69, "Civil & Human Rights": 67.45, "Safety & Security": 60.69 } },
      { model: LLM_MODELS[1], scores: { Antitrust: 0.0, "Industrial Policy": 0.0, "National Security": 1.0, "Civil & Human Rights": 65.75, "Safety & Security": 45.0 } },
      { model: LLM_MODELS[2], scores: { Antitrust: 0.0, "Industrial Policy": 0.0, "National Security": 4.17, "Civil & Human Rights": 70.83, "Safety & Security": 53.75 } },
      { model: LLM_MODELS[3], scores: { Antitrust: 0.0, "Industrial Policy": 0.0, "National Security": 3.75, "Civil & Human Rights": 87.5, "Safety & Security": 50.0 } },
      { model: LLM_MODELS[4], scores: { Antitrust: 0.0, "Industrial Policy": 0.0, "National Security": 0.0, "Civil & Human Rights": 63.75, "Safety & Security": 32.5 } },
      { model: LLM_MODELS[5], scores: { Antitrust: 0.0, "Industrial Policy": 0.0, "National Security": 0.0, "Civil & Human Rights": 81.25, "Safety & Security": 37.5 } },
      { model: LLM_MODELS[6], scores: { Antitrust: 0.0, "Industrial Policy": 3.0, "National Security": 9.0, "Civil & Human Rights": 71.0, "Safety & Security": 36.0 } },
    ],
  },
  {
    id: "california-sb53-bench",
    name: "California 2025 SB53",
    shortName: "CA SB53",
    focusCategory: "Safety & Security",
    models: [
      { model: LLM_MODELS[0], scores: { Antitrust: 48.37, "Industrial Policy": 49.34, "National Security": 50.85, "Civil & Human Rights": 52.08, "Safety & Security": 55.28 } },
      { model: LLM_MODELS[1], scores: { Antitrust: 0.0, "Industrial Policy": 15.5, "National Security": 8.25, "Civil & Human Rights": 18.0, "Safety & Security": 62.75 } },
      { model: LLM_MODELS[2], scores: { Antitrust: 0.0, "Industrial Policy": 12.5, "National Security": 12.5, "Civil & Human Rights": 12.5, "Safety & Security": 60.75 } },
      { model: LLM_MODELS[3], scores: { Antitrust: 0.0, "Industrial Policy": 22.5, "National Security": 11.25, "Civil & Human Rights": 12.5, "Safety & Security": 78.75 } },
      { model: LLM_MODELS[4], scores: { Antitrust: 0.0, "Industrial Policy": 6.25, "National Security": 0.0, "Civil & Human Rights": 10.0, "Safety & Security": 67.5 } },
      { model: LLM_MODELS[5], scores: { Antitrust: 0.0, "Industrial Policy": 23.75, "National Security": 0.0, "Civil & Human Rights": 10.0, "Safety & Security": 50.0 } },
      { model: LLM_MODELS[6], scores: { Antitrust: 16.25, "Industrial Policy": 23.75, "National Security": 3.75, "Civil & Human Rights": 21.25, "Safety & Security": 57.5 } },
    ],
  },
];
