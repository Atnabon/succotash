import type { ExperimentSchema, OpenSourceContributionSchema, OpenSourceLibrarySchema } from "./schemas";
import { z } from "zod";

type Experiment = z.infer<typeof ExperimentSchema>;
type OpenSourceContribution = z.infer<typeof OpenSourceContributionSchema>;
type OpenSourceLibrary = z.infer<typeof OpenSourceLibrarySchema>;

export const openSource: {
  contributions: OpenSourceContribution[];
  libraries: OpenSourceLibrary[];
} = {
  contributions: [
    {
      project: "A2SV Hackathon",
      description: "Advanced to the semifinals of the A2SV 2024 AI for Impact Hackathon, building AI solutions for Africa.",
      link: "#",
      status: "Semi-finalist",
    },
    {
      project: "10 Academy / Kifiya",
      description: "Completed 3-month intensive ML/Data Engineering program with distinction, building end-to-end ML projects.",
      link: "#",
      status: "Distinction",
    },
  ],
  libraries: [
    {
      name: "Document Intelligence Refinery",
      description: "Enterprise-scale agentic PDF extraction pipeline with 5-stage architecture.",
      stats: "Open Source",
      link: "https://github.com/Atnabon/document-intelligence-refinery",
    },
    {
      name: "Automation Auditor",
      description: "LangGraph-based multi-agent repo audit system with judicial deliberation.",
      stats: "Open Source",
      link: "https://github.com/Atnabon/automaton-auditor",
    },
  ],
};

export const experiments: Experiment[] = [
  {
    name: "Multi-Agent Systems",
    description: "Building autonomous AI agent swarms for code analysis, auditing, and document intelligence.",
    link: "https://github.com/Atnabon/Legacy-Code-Cartographer",
    tags: ["LangGraph", "Ollama", "Pydantic"],
  },
  {
    name: "Explainable AI",
    description: "Integrating SHAP and LIME for transparent ML model decisions in financial fraud detection.",
    link: "https://github.com/Atnabon/financial-fraud-detection",
    tags: ["SHAP", "LIME", "XAI"],
  },
  {
    name: "RAG Pipelines",
    description: "Building retrieval-augmented generation systems for document QA and AI tutoring.",
    link: "https://github.com/Atnabon/ai-tutor",
    tags: ["LangChain", "FAISS", "Embeddings"],
  },
];
