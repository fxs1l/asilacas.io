export type Experience = {
  title: string;
  company?: Company;
  description: string;
  type: ExperienceType;
  mode?: WorkMode;
  startDate: Date;
  endDate?: Date;
  isFeatured?: boolean;
};

export enum ExperienceType {
  WORK = "Work",
  EDUCATION = "Education",
  PROJECT = "Project",
  VOLUNTEER = "Volunteer",
  CERTIFICATION = "Certification",
  COURSE = "Course",
  INTERNSHIP = "Internship",
  FREELANCE = "Freelance",
  OTHER = "Other",
}

export enum WorkMode {
  REMOTE = "Remote",
  ONSITE = "Onsite",
  HYBRID = "Hybrid",
  TRAVEL = "Travel",
  OTHER = "Other",
}

export type Company = {
  name: string;
  url: string;
  address?: string;
};

export default Experience;
