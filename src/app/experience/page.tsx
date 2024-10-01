import { Button } from "@/components/ui/button";
import Hyperlink from "../../components/ui/hyperlink";
import { ROOT_URL } from "../../constants/url";

export default function ResumePage() {
  return (
    <div>
      <h1>
        Under Construction. On this site will rise a customized resume page
      </h1>
      <div className="flex gap-1 p-5 pl-0">
        <Button variant="outline" className="ml-0">
          <Hyperlink isBold={false} url="/static/resume.pdf">
            View PDF version
          </Hyperlink>{" "}
        </Button>
        <Button>
          <Hyperlink isBold={false} url={ROOT_URL}>
            Go back
          </Hyperlink>
        </Button>
      </div>
    </div>
  );
}
