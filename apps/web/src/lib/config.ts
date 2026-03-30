import { siteIdentity, socials, nav } from "./data/site";
import { projects } from "./data/projects";
import { experience } from "./data/experience";
import { education, certificates } from "./data/education";
import { interests } from "./data/interests";
import { openSource, experiments } from "./data/dev-activity";
import type { SiteConfig } from "./data/schemas";

export const siteConfig: SiteConfig = {
  ...siteIdentity,
  socials,
  nav,
  projects,
  experience,
  education,
  certificates,
  openSource,
  experiments,
  interests,
};
