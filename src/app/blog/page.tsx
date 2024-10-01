import TypographyParagraph from "../../components/typography/paragraph";
import { Button } from "../../components/ui/button";
import Hyperlink from "../../components/ui/hyperlink";
import { ROOT_URL } from "../../constants/url";

export default function Page() {
  return (
    <div>
      <TypographyParagraph>
        Hello, welcome to the construction zone of where my blog should be.{" "}
        <b>The plan? </b>Use Wordpress API and then render custom components.{" "}
        <b>Why?</b> I want to code the frontend myself but also rely on the
        Wordpress editor to create content. Also because, it&apos;s fun.
      </TypographyParagraph>
      <Button variant="outline">
        {" "}
        <Hyperlink url={ROOT_URL}>Go back</Hyperlink>
      </Button>
    </div>
  );
}
