import { ARCH_LINUX_URL, UNIVERSITY_URL } from "../../constants/url";
import TypographyParagraph from "../typography/paragraph";
import Hyperlink from "../ui/hyperlink";

export default function AboutMeArticle() {
  return (
    <article className="p-10 pt-0 text-justify">
      <TypographyParagraph>
        As a graduating Electronics Engineering student at the
        <Hyperlink url={UNIVERSITY_URL}>
          {" "}
          University of the Philippines Diliman
        </Hyperlink>
        , I&apos;m honing my skills to become a versatile and adaptable
        full-stack software engineer. My background in electronics has equipped
        me with a strong foundation in technical problem-solving and
        communication systems.
      </TypographyParagraph>
      <TypographyParagraph>
        I&apos;m interested in machine learning and IoT, and I&apos;ve built
        projects in these areas. I love exploring how technology can solve
        real-world problems. I use
        <Hyperlink url={ARCH_LINUX_URL} isBold={false} isItalicized>
          {" "}
          Arch
        </Hyperlink>{" "}
        btw.
      </TypographyParagraph>
      <TypographyParagraph>
        Outside of school and coding, I am a casual 🎸, a regular 🎮, a binge 📺
        show watcher, and an 💪 active person.
      </TypographyParagraph>
    </article>
  );
}
