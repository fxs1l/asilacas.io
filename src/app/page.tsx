"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { ReactTyped } from "react-typed";
import AnimatedCard from "../components/animated/animated-card";
import AboutMeArticle from "../components/atoms/about-me";
import Footer from "../components/atoms/footer";
import { ModeToggle } from "../components/theme-toggle";
import TypographyHeading from "../components/typography/heading";
import TypographyParagraph from "../components/typography/paragraph";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import Hyperlink from "../components/ui/hyperlink";
import { FIRST_TAG, FULL_NAME, SECOND_TAG } from "../constants/name";
import { MY_PROJECTS } from "../constants/projects";
import { ROOT_URL } from "../constants/url";
import { MY_EXPERIENCES } from "../definitions/experiences";
import { formatDateRange } from "../utils/date-formatter";

export default function HomePage() {
  const featuredProjects = MY_PROJECTS.filter((project) => project.isFeatured);

  const sortedExperiences = MY_EXPERIENCES.toSorted((a, b) => {
    if (b.endDate && a.endDate) {
      return b.endDate - a.endDate || b.startDate - a.startDate;
    } else {
      return b.startDate - a.startDate;
    }
  });
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <Card className="p-3">
          <div>
            <TypographyHeading className="p-10 pb-5 text-left">
              <Hyperlink isBold={false} url={ROOT_URL}>
                {FULL_NAME}
              </Hyperlink>
            </TypographyHeading>
          </div>

          <TypographyHeading className="pt-0 text-lg" level={2}>
            <ReactTyped
              strings={[FIRST_TAG, SECOND_TAG]}
              typeSpeed={40}
              backSpeed={40}
              loop
              loopCount={4}
            />
          </TypographyHeading>
        </Card>
        {/* TODO: Implement scrolling */}
        <div className="hidden p-10 lg:block">
          <TypographyHeading level={4}>---About</TypographyHeading>
          <TypographyHeading className="font-medium" level={4}>
            Blog
          </TypographyHeading>
          <TypographyHeading className="font-medium" level={4}>
            Projects
          </TypographyHeading>
          <TypographyHeading className="font-medium" level={4}>
            Experience
          </TypographyHeading>
        </div>
        <div className="flex items-center gap-1 p-10">
          <GitHubLogoIcon className="h-8 w-8" />
          <LinkedInLogoIcon className="h-8 w-8" />
          <MailIcon className="h-8 w-8" />
          <ModeToggle />
          {/* <div className="text-lg">| abacasio@up.edu.ph</div> */}
        </div>
      </header>
      <main className="pt-5 lg:w-1/2 lg:py-24">
        <div>
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            About
          </TypographyHeading>
          <AboutMeArticle />
        </div>
        <div className="flex flex-col justify-center">
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            Projects
          </TypographyHeading>

          {featuredProjects.map((project) => (
            <AnimatedCard
              key={project.name}
              className="mb-5 ml-5 pl-5 shadow-none"
            >
              <CardHeader>
                <TypographyHeading level={3}>{project.name}</TypographyHeading>
              </CardHeader>
              <CardContent className="text-foreground">
                {project.description}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1 text-lg">
                {project.tags.map((tag) => (
                  <Badge classNamevariant="outline" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </AnimatedCard>
          ))}
          <Button variant="outline" className="self-center">
            View all projects <ArrowUpRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <TypographyHeading className="p-10 pb-5 text-left text-2xl lg:text-4xl">
            Experience
          </TypographyHeading>
          {sortedExperiences.map((experience) => (
            <AnimatedCard
              key={experience.title}
              className="m-5 pl-10 shadow-none"
            >
              <CardHeader>
                <span>
                  {" "}
                  <i>
                    {formatDateRange(experience.startDate, experience.endDate)}
                  </i>
                </span>
                <TypographyHeading level={3}>
                  {experience.title}
                </TypographyHeading>
                <TypographyHeading level={4}>
                  <Hyperlink url={experience.company.url} isBold={false}>
                    {experience.company.name}
                  </Hyperlink>
                </TypographyHeading>
              </CardHeader>

              <CardContent className="text-foreground">
                <TypographyParagraph>
                  {experience.description}
                </TypographyParagraph>
              </CardContent>
            </AnimatedCard>
          ))}
          <Button variant="outline" className="self-center">
            View my resume <ArrowUpRightIcon className="h-4 w-4" />
          </Button>

          <Footer />
        </div>
      </main>
    </>
  );
}
