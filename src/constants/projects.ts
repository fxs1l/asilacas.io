import Project from "../definitions/project";
import { PERSONAL_WEBSITE_URL } from "./url";

export const MY_PROJECTS: Project[] = [
  {
    name: "Automatic Smoke Observer",
    url: "https://github.com/fxs1l/Automatic-Smoke-Observer",
    videoUrl: "www.youtube.com/watch?v=cfjgM5uVEug",
    description:
      "A remote monitoring and alerting system for forest fires mitigation, which was built with a Raspberry Pi equipped with smoke sensors and a camera. Trained and integrated a YOLOv5 model for fire and smoke detection through images. Gold awardee at the Malaysia Technology Expo 2021.",
    tags: ["Python", "Raspberry Pi", "Arduino", "YOLOv5", "OpenCV"],
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-06-01"),
    isArchived: true,
    isFeatured: true,
  },
  {
    name: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and animated with Framer Motion. ",
    url: PERSONAL_WEBSITE_URL,
    tags: ["ReactJs", "NextJs", "Tailwind"],
    startDate: new Date("2024-09-23"),
    endDate: new Date(),
    isFeatured: true,
  },
  {
    name: "Personal Portfolio (v1)",
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
    startDate: new Date("2020-01"),
    endDate: new Date(),
    isActive: true,
  },
  {
    name: "Palanca Automation Bot",
    tags: ["Javascript", "Google Script"],
    url: "https://github.com/fxs1l/Palanca-Automation-Bot",
    startDate: new Date("2021-05"),
    endDate: new Date("2021-05"),
    description: "A GoogleScript based Palanca letter sender.",
  },
  {
    name: "Hayahay",
    tags: ["Flutter", "Python", "Firebase", "IoT"],
    url: "https://github.com/fxs1l/Hayahay",
    isFeatured: true,
    startDate: new Date("2021-04"),
    endDate: new Date("2021-06"),
    description:
      "An IoT-based home automation system for controlling lights, fans, and other appliances. Interfaced sensor components with ESP32 microcontrollers and controlled them through a Flutter app. Built backend services with Firebase and Python.",
  },
  {
    name: "Buoywatch",
    tags: ["Python", "OpenCV", "Tensorflow", "YOLOv5"],
    url: "https://github.com/fxs1l/Buoywatch",
    isFeatured: true,
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2021, 6, 1),
    description:
      "A buoy-based system that detects and reports illegal fishing. Trained and integrated a YOLOv5 model for fishing vessel image detection. Built as an entry for the 2021 Karagatan Hackathon.",
  },
];

export const ACADEMIC_PROJECTS: Project[] = [
  {
    name: "StegaCipher",
    tags: ["Python", "Python/PIL"],
    url: "https://github.com/fxs1l/EEE-111-StegaCipher",
    startDate: new Date("2021-01"),
    endDate: new Date("2021-01"),
    description:
      "Basic steganography which encodes and decodes encrypted messages into an image by using a caesar cipher",
  },
  {
    name: "Mandala Generator",
    tags: ["Python"],
    url: "https://github.com/fxs1l/EEE-111-Mandala-Generator",
    startDate: new Date("2021-01"),
    endDate: new Date("2021-01"),
    description: "Generates a mandala based on predefined classes.",
  },
  {
    name: "Shortest Path Algorithm Cost Comparison",
    tags: ["Python"],
    url: "https://github.com/fxs1l/EEE-121-Shortest-Path",
    startDate: new Date("2022-01"),
    endDate: new Date("2022-01"),
    description:
      "Given different scenarios, compares the cost between Djikstra's and Prim's algorithm",
  },
];
