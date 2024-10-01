import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRightIcon, GamepadIcon, GraduationCapIcon } from "lucide-react";
import TypographyHeading from "../../components/typography/heading";
import { Button } from "../../components/ui/button";
import Hyperlink from "../../components/ui/hyperlink";
import { ACADEMIC_PROJECTS, MY_PROJECTS } from "../../constants/projects";
import Project from "../../definitions/project";
import { Route } from "../../definitions/routes";
import { parseHostname } from "../../utils/url-parser";

export default function Page() {
  const tableHeader = (
    <TableHeader>
      <TableRow>
        <TableHead>Date</TableHead>
        <TableHead>Project</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Tech Stack</TableHead>
        <TableHead>Links</TableHead>
      </TableRow>
    </TableHeader>
  );

  const mapBadges = (tags: string[]) => {
    return tags.map((tag) => {
      return (
        <Badge className="mb-1 mr-1" variant="outline" key={`{tag}`}>
          {tag}
        </Badge>
      );
    });
  };
  const mapProjects = (projects: Project[]) => {
    return projects.map((project: Project) => {
      const { name, description, tags, endDate, url, isActive } = project;
      const mappedTags = mapBadges(tags);

      return (
        <TableRow key={name}>
          <TableCell>
            {" "}
            {isActive ? "Ongoing" : endDate?.getFullYear()}
          </TableCell>
          <TableCell className="font-medium">{name}</TableCell>
          <TableCell>{description}</TableCell>
          <TableCell>{mappedTags}</TableCell>
          <TableCell>
            <div className="flex">
              <Hyperlink isBold={false} isItalicized url={url}>
                {parseHostname(url)}
              </Hyperlink>
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className="flex-start flex flex-col">
      <div className="flex items-center justify-between">
        <Button variant="outline">
          <Hyperlink isBold={false} url={Route.HOME}>
            Go back
          </Hyperlink>
        </Button>
        {/* TODO: Implement interactive version
            - use assets from v1
            - make animation to highlight this button
          */}
        <Button variant="outline">
          Give me a gamified view <GamepadIcon className="pl-1" />
        </Button>
      </div>

      <TypographyHeading className="p-10 pl-0">
        Asil&apos;s Projects
      </TypographyHeading>
      <Table>
        {tableHeader}
        <TableBody>{mapProjects(MY_PROJECTS)}</TableBody>
      </Table>

      <div className="flex items-center">
        <TypographyHeading className="p-10 pl-0 pr-2">
          Academic-based
        </TypographyHeading>
        <GraduationCapIcon />
      </div>
      <Table>
        {tableHeader}
        <TableBody>{mapProjects(ACADEMIC_PROJECTS)}</TableBody>
      </Table>
    </div>
  );
}
