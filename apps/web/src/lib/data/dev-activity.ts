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
      project: "Goderash",
      description: "Maintainer — audit and governance fabric for regulated AI agents. Adapters for Anthropic, OpenAI, and LangGraph. Published on PyPI and npm under Apache-2.0.",
      link: "https://github.com/Atnabon/goderash",
      status: "Active",
    },
    {
      project: "A2SV Hackathon",
      description: "Advanced to the semifinals of the A2SV 2024 AI for Impact Hackathon, building AI solutions for Africa's most pressing challenges.",
      link: "#",
      status: "Semi-finalist",
    },
    {
      project: "10 Academy / Kifiya",
      description: "Completed intensive ML/Data Engineering program with Distinction, building end-to-end ML projects across credit scoring, fraud detection, and sales forecasting.",
      link: "#",
      status: "Distinction",
    },
  ],
  libraries: [
    {
      name: "goderash",
      description: "One-line SDK for SHA-256 hash-chained, tamper-evident AI agent audit logs. Multi-tenant, schema-aware, framework-agnostic.",
      stats: "PyPI + npm",
      link: "https://github.com/Atnabon/goderash",
    },
    {
      name: "document-intelligence-refinery",
      description: "Enterprise-scale agentic PDF extraction pipeline with 5-stage architecture and confidence-gated strategy escalation.",
      stats: "Open Source",
      link: "https://github.com/Atnabon/document-intelligence-refinery",
    },
    {
      name: "automaton-auditor",
      description: "LangGraph-based multi-agent repo audit system with 7-node judicial deliberation and 2x fan-out/fan-in topology.",
      stats: "Open Source",
      link: "https://github.com/Atnabon/automaton-auditor",
    },
  ],
};

export const experiments: Experiment[] = [
  {
    name: "LLM Evaluation Harnesses",
    description: "Designing LLM-as-judge evaluation pipelines with deterministic rubrics for measuring agentic system performance and alignment.",
    link: "https://github.com/Atnabon",
    tags: ["LangSmith", "LLM-as-judge", "RAGAS"],
  },
  {
    name: "Fine-Tuning (LoRA / DPO / SimPO / ORPO)",
    description: "Experimenting with parameter-efficient fine-tuning techniques using Unsloth and HuggingFace PEFT for domain adaptation.",
    link: "https://github.com/Atnabon",
    tags: ["LoRA", "DPO", "Unsloth", "HuggingFace"],
  },
  {
    name: "MCP Tool Design",
    description: "Building Model Context Protocol servers and tools for multi-database natural-language query agents and enterprise integrations.",
    link: "https://github.com/Atnabon/oracle-forge",
    tags: ["MCP", "PostgreSQL", "DuckDB", "ReAct"],
  },
];
