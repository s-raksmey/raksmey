export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Raksmey | Software Engineer",
  description:
    "Raksmey's personal portfolio showcasing software engineering projects, experience, and ways to get in touch.",
  url: "https://raksmey.com",
  ogImage: "https://raksmey.com/og.jpg",
  keywords: [
    "Raksmey",
    "Software Engineer",
    "Web Developer",
    "Full Stack Engineer",
    "Portfolio",
    "Personal Website",
  ],
  links: {
    github: "https://github.com/raksmey",
    linkedin: "https://www.linkedin.com/in/raksmey",
    email: "mailto:hello@raksmey.com",
    resume: "/resume.pdf",
  },
};

export type SiteConfigKeys = keyof typeof siteConfig.links;
