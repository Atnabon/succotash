import type { CertificateSchema, EducationSchema } from "./schemas";
import { z } from "zod";

type Education = z.infer<typeof EducationSchema>;
type Certificate = z.infer<typeof CertificateSchema>;

export const education: Education[] = [
  {
    degree: "AI Agent Engineering, AI Evaluation Engineering & Forward Deployed Engineering (with Distinction)",
    school: "Tenacious Intelligence Corporation / 10 Academy",
    year: "Feb 2026 - May 2026",
    logo: "cert-tenx.jpg",
    link: "https://drive.google.com/file/d/1GA6IWolQtlNZJKy1ON4y1QrEGBJLiZ9Y/view?usp=sharing",
    description: [
      "720-hour intensive TRP program: building production-grade AI agents, designing evaluation harnesses, and forward-deployed engineering with customer-facing AI systems.",
      "Graduated with Distinction.",
    ],
  },
  {
    degree: "BSc in Software Engineering",
    school: "Jimma University",
    year: "2019 - 2024",
    logo: "./ju.jpeg",
    link: "#",
    description: [
      "Core coursework: Object-Oriented Programming, Database Systems, Software Development, Data Structures and Algorithms.",
      "Comprehensive software engineering curriculum with hands-on projects.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: "AI Agent Engineering, AI Evaluation Engineering & Forward Deployed Engineering (with Distinction)",
    issuer: "Tenacious Intelligence Corporation / 10 Academy",
    year: "2026",
    link: "https://drive.google.com/file/d/1GA6IWolQtlNZJKy1ON4y1QrEGBJLiZ9Y/view?usp=sharing",
    image: "/cert-tenx.jpg",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    year: "2024",
    link: "https://coursera.org/verify/specialization/8LEVPT27E69H",
    image: "/cert-coursera-ml.png",
  },
  {
    name: "Kifiya AI Mastery Training Program (with Distinction)",
    issuer: "Kifiya / 10 Academy",
    year: "2024",
    link: "#",
    image: "/cert-kaim.png",
  },
  {
    name: "Hugging Face Agents Course",
    issuer: "Hugging Face",
    year: "2025",
    link: "#",
    image: "/cert-huggingface.png",
  },
  {
    name: "ALX Founder Academy",
    issuer: "ALX Ventures",
    year: "2024",
    link: "https://intranet.alxswe.com/certificates/5Z83Ls6fP9",
    image: "/cert-founder.png",
  },
  {
    name: "ALX Software Engineering (Back-end)",
    issuer: "ALX Africa",
    year: "2023",
    link: "https://intranet.alxswe.com/certificates/n5Lzh2BGXm",
    image: "/cert-a2sv.png",
  },
  {
    name: "A2SV AI for Impact Hackathon — Semi-finalist",
    issuer: "A2SV Foundation",
    year: "2024",
    link: "#",
    image: "/cert-a2sv.png",
  },
];
