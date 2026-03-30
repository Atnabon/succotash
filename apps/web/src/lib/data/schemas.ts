import { z } from "zod";

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const SocialsSchema = z.object({
  github: z.string().url(),
  twitter: z.string().url(),
  linkedin: z.string().url(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  category: z.string(),
  type: z.enum(["Work", "Live", "Personal", "Research"]).or(z.string()),
  link: z.string().optional(),
  image: z.string().url(),
  stats: z.string().optional(),
  size: z.enum(["wide", "large", "normal"]).optional(),
});

export const ExperienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.array(z.string()).or(z.string()),
  logo: z.string(),
  link: z.string(),
});

export const EducationSchema = z.object({
  degree: z.string(),
  school: z.string(),
  year: z.string(),
  logo: z.string(),
  link: z.string(),
  description: z.array(z.string()).or(z.string()),
});

export const CertificateSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  year: z.string(),
  link: z.string(),
  image: z.string(),
});

export const OpenSourceContributionSchema = z.object({
  project: z.string(),
  description: z.string(),
  link: z.string().url(),
  status: z.string(),
});

export const OpenSourceLibrarySchema = z.object({
  name: z.string(),
  description: z.string(),
  stats: z.string(),
  link: z.string().url(),
});

export const ExperimentSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().url(),
  tags: z.array(z.string()),
});

export const InterestItemSchema = z.object({
  title: z.string().optional(), // For books/talks
  track: z.string().optional(), // For music
  artist: z.string().optional(), // For music
  event: z.string().optional(), // For talks
  image: z.string().url(),
  take: z.string(),
  featured: z.boolean().optional(),
});

export const SiteConfigSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  email: z.string().email(),
  socials: SocialsSchema,
  nav: z.array(NavItemSchema),
  projects: z.array(ProjectSchema),
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  certificates: z.array(CertificateSchema),
  openSource: z.object({
    contributions: z.array(OpenSourceContributionSchema),
    libraries: z.array(OpenSourceLibrarySchema),
  }),
  experiments: z.array(ExperimentSchema),
  interests: z.object({
    reading: z.array(InterestItemSchema),
    listening: z.array(InterestItemSchema),
    speaking: z.array(InterestItemSchema),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
