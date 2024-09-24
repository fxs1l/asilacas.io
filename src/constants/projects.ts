import Project from "../definitions/project";
import { PERSONAL_WEBSITE_URL } from "./url";

export const MY_PROJECTS: Project[] = [
  {
    name: "Automatic Smoke Observer",
    url: "",
    videoUrl: ["https://www.youtube.com/watch?v=cfjgM5uVEug"],
    image: null,
    description:
      "A remote monitoring and alerting system for forest fires mitigation. Gold awardee at the Malaysia Technology Expo 2021.",
    tags: ["Python", "Raspberry Pi", "Arduino", "YOLOv5", "OpenCV"],
    endDate: new Date("2021"),
    isArchived: true,
    isFeatured: true,
  },
  {
    name: "Personal Portfolio",
    image: null,
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    url: PERSONAL_WEBSITE_URL,
    tags: ["ReactJs", "NextJs", "Tailwind"],
    startDate: new Date("2024-09-23"),
    endDate: new Date(),
    isArchived: false,
    isFeatured: true,
  },
  {
    name: "Personal Portfolio (v1)",
    image: null,
    description:
      "Personal portfolio built with only native React modules and pure CSS. It started out as a simple project to learn React.",
    url: "https://v1.asilacas.io",
    tags: ["ReactJs", "CSS/Sass"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-09-23"),
    isArchived: true,
  },

  {
    name: "Linux Dotfiles",
    tags: ["Shell", "Linux", "Bash", "CSS"],
    url: "https://github.com/fxs1l/dotfiles",
    description:
      "Personal dotfiles for my Linux desktop. Includes custom scripts, themes, and configurations. Ready for copy-paste.",
    image: null,
  },
  {
    name: "Palanca Automation Bot",
    tags: ["Javascript", "Google Script"],
    url: "https://github.com/fxs1l/Palanca-Automation-Bot",
    image: null,
    description: "A GoogleScript based Palanca letter sender.",
  },
  {
    name: "Hayahay",
    tags: ["Flutter", "Python", "Firebase", "IoT"],
    url: "https://github.com/fxs1l/Hayahay",
    image: null,
    description:
      "A home automation system for controlling appliances, lights, etc.",
  },
  {
    name: "Buoywatch",
    tags: ["Python", "OpenCV", "Tensorflow", "YOLOv5"],
    url: "https://github.com/fxs1l/Buoywatch",
    image: null,
    isFeatured: true,
    description: "A system that detects and reports illegal fishing.",
  },
];
