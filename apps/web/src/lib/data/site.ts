import type { NavItemSchema, SocialsSchema } from "./schemas";
import { z } from "zod";

type NavItem = z.infer<typeof NavItemSchema>;
type Socials = z.infer<typeof SocialsSchema>;

export const siteIdentity = {
  name: "Atnabon Deressa",
  title: "I build AI systems that don't just work, they perform, scale, and deliver actionable insights.",
  description: "AI/ML Engineer & Forward Deployed Engineer specializing in agentic architectures, AI agent engineering, evaluation harness design, LangGraph multi-agent systems, MCP tool design, RAG pipelines, LLM-as-judge evaluation, and fine-tuning. Maintainer of Goderash — an open-source audit and governance fabric for regulated AI agents.",
  email: "atnabond@gmail.com",
};

export const socials: Socials = {
  github: "https://github.com/atnabon",
  twitter: "https://x.com/atnabon_d",
  linkedin: "https://www.linkedin.com/in/atnabon-deressa",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Career", href: "#career" },
  { label: "Notes", href: "/blog" },
];
