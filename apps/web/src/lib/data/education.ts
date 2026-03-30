import type { CertificateSchema, EducationSchema } from "./schemas";
import { z } from "zod";

type Education = z.infer<typeof EducationSchema>;
type Certificate = z.infer<typeof CertificateSchema>;

export const education: Education[] = [
  {
    degree: "BSc in Software Engineering",
    school: "Jimma University",
    year: "2019 - 2024",
    logo: "./ju.jpeg",
    link: "#",
    description: [
      "OOP, Database, Software Development, Data Structure and Algorithms.",
      "Comprehensive software engineering curriculum with hands-on projects.",
    ],
  },
  {
    degree: "Machine Learning, Data Engineering & Generative AI",
    school: "10 Academy",
    year: "2024",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxpeU8pNfppw/company-logo_200_200/company-logo_200_200/0/1630502357436/10_acad_logo?e=1775692800&v=beta&t=KlJ_IypZjmKkerjXgrAp6JGMjje4NjjAcKngX-CrcBw",
    link: "#",
    description: [
      "Data Analysis, Generative AI, Prompt Engineering and Deep Learning.",
      "Model deployment and end-to-end ML pipeline development.",
    ],
  },
  {
    degree: "ALX Software Engineering Programme",
    school: "ALX Africa",
    year: "2022 - 2023",
    logo: "https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg",
    link: "#",
    description: [
      "12-month intensive program with specialization in Back-end development.",
      "Full-stack development, system design, and collaborative software engineering.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    year: "2024",
    link: "https://coursera.org/verify/specialization/8LEVPT27E69H",
    image: "/cert-coursera-ml.png",
  },
  
  {
    name: "Hugging Face Agents Course",
    issuer: "Hugging Face",
    year: "2025",
    link: "#",
    image: "/cert-huggingface.png",
  },
  {
    name: "Kifiya AI Mastery Training Program",
    issuer: "Kifiya / 10 Academy",
    year: "2024",
    link: "#",
    image: "/cert-kaim.png",
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
    image: "/cert-alx-se.png",
  },
  
  
  {
    name: "A2SV Hackathon Semi-finalist",
    issuer: "A2SV Foundation",
    year: "2024",
    link: "#",
    image: "/cert-a2sv.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "CyberTalents / Trend Micro",
    year: "2022",
    link: "#",
    image: "/cert-cybersecurity.png",
  },
  
];
