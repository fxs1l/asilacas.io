import { SYMPH_URL, UP_CIRCUIT_URL, UP_EEEI_URL } from "../constants/url";
import Experience, {
  ExperienceType,
  WorkMode,
} from "../definitions/experience";

export const MY_EXPERIENCES: Experience[] = [
  {
    title: "Digital Signal Processing Lab Intern",
    description:
      "Assisted in collecting data from various signal sources such as audio from Philippine native instruments and human vital signs sensor data for research by using Python and MATLAB.",
    type: ExperienceType.INTERNSHIP,
    company: {
      name: "UP EEEI",
      url: UP_EEEI_URL,
    },
    mode: WorkMode.ONSITE,
    startDate: new Date("2019-06"),
    endDate: new Date("2019-07"),
    isFeatured: true,
  },
  {
    title: "Web and Mobile App Developer Intern",
    description:
      "Contributed to two projects involving frontend development using NextJs, backend API development with NestJS, and cloud configuration on Google Cloud Platform. This experience enhanced my technical skills and understanding of the web development lifecycle.",
    type: ExperienceType.INTERNSHIP,
    company: {
      name: "Symph",
      url: SYMPH_URL,
    },
    mode: WorkMode.REMOTE,
    startDate: new Date("2024-05-04"),
    endDate: new Date("2024-10-30"),
    isFeatured: true,
  },
  {
    title: "Co Director for Competitions and Opportunities",
    description: "Co director for Competions and ",
    type: ExperienceType.VOLUNTEER,
    company: {
      name: "UP Circuit",
      url: UP_CIRCUIT_URL,
    },
    mode: WorkMode.HYBRID,
    startDate: new Date("2024-05"),
  },
];
