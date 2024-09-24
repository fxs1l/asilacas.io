import { SYMPH_URL, UP_EEEI_URL } from "../constants/url";
import Experience, {
  ExperienceType,
  WorkMode,
} from "../definitions/experience";

export const MY_EXPERIENCES: Experience[] = [
  {
    title: "Digital Signal Processing Lab Intern",
    description:
      "Assisted in collecting data from various signal sources such as audio from Philippine native instruments and human vital signs sensor data for research.",
    type: ExperienceType.Intern,
    company: {
      name: "UP EEEI",
      url: UP_EEEI_URL,
    },
    mode: WorkMode.Onsite,
    startDate: new Date("2019-06"),
    endDate: new Date("2019-07"),
  },
  {
    title: "Web and Mobile App Developer Intern",
    description:
      "I worked on several projects, including [insert here], which contributed to [quantifiable outcome]. This experience enhanced my technical skills and understanding of the web development lifecycle.",
    type: ExperienceType.Intern,
    company: {
      name: "Symph",
      url: SYMPH_URL,
    },
    mode: WorkMode.Onsite,
    startDate: new Date("2024-05"),
  },
];
