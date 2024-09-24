export type Project = {
  name: string;
  image: string | null;
  description: string;
  url: string;
  videoUrl?: string[];
  tags: Tag[] | string[];
  startDate: Date;
  endDate?: Date;
  isArchived?: boolean;
  isFeatured?: boolean;
};

export type ProjectTag = {
  name: Tag | string;
};

export enum Tag {
  REACT = "React",
  NEXT_JS = "Next.js",
  TAILWIND_CSS = "Tailwind CSS",
  FRAMER_MOTION = "Framer Motion",
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  HTML = "HTML",
  CSS = "CSS",
  GRAPHQL = "GraphQL",
  APOLLO_CLIENT = "Apollo Client",
  APOLLO_SERVER = "Apollo Server",
  EXPRESS = "Express",
  MONGODB = "MongoDB",
  POSTGRESQL = "PostgreSQL",
  PRISMA = "Prisma",
  STRAPI = "Strapi",
  WORDPRESS = "WordPress",
  SHOPIFY = "Shopify",
  REDUX = "Redux",
  SAGA = "Saga",
  CONTEXT_API = "Context API",
  JEST = "Jest",
  TESTING_LIBRARY = "Testing Library",
  CYPRESS = "Cypress",
  STORYBOOK = "Storybook",
  VUE = "Vue",
  NEST_JS = "Nest.js",
  SVELTE = "Svelte",
  ANGULAR = "Angular",
  JAVA = "Java",
  KOTLIN = "Kotlin",
  SWIFT = "Swift",
  FLUTTER = "Flutter",
  REACT_NATIVE = "React Native",
  VUE_NATIVE = "Vue Native",
  MOBILE = "Mobile",
  WEB = "Web",
  DESKTOP = "Desktop",
  CLOUD = "Cloud",
  SERVERLESS = "Serverless",
  AWS = "AWS",
  GOOGLE_CLOUD = "Google Cloud",
  AZURE = "Azure",
  DOCKER = "Docker",
  KUBERNETES = "Kubernetes",
  TERRAFORM = "Terraform",
  GITHUB_ACTIONS = "GitHub Actions",
  CIRCLE_CI = "Circle CI",
  JENKINS = "Jenkins",
  TRAVIS_CI = "Travis CI",
  HEROKU = "Heroku",
  NETLIFY = "Netlify",
  VERCEL = "Vercel",
  GATSBY = "Gatsby",
  NPM = "NPM",
  YARN = "Yarn",
  WEBPACK = "Webpack",
  ROLLUP = "Rollup",
  BABEL = "Babel",
}

export default Project;
