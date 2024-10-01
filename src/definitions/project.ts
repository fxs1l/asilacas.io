export type Project = {
  name: string;
  image?: string;
  description: string;
  url: string;
  videoUrl?: string;
  tags: string[];
  startDate: Date;
  endDate?: Date;
  isArchived?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
};

export type ProjectTag = {
  name: string;
};

export default Project;
