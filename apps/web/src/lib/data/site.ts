import type { NavItemSchema, SocialsSchema } from "./schemas";
import { z } from "zod";

type NavItem = z.infer<typeof NavItemSchema>;
type Socials = z.infer<typeof SocialsSchema>;

export const siteIdentity = {
  name: "Atnabon Deressa",
  title: "I build AI systems that don't just work, they perform, scale, and deliver actionable insights.",
  description: "Software engineer with a passion for writing optimized and efficient code. Building AI-driven solutions, from fraud detection to NLP dashboards, with expertise in full-stack development and machine learning.",
  email: "atnabon@gmail.com",
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
