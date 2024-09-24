import { ARCH_LINUX_URL, SYMPH_URL, UNIVERSITY_URL } from "../../constants/url";
import TypographyParagraph from "../typography/paragraph";
import Hyperlink from "../ui/hyperlink";

export default function AboutMeArticle() {
  return (
    <article className="p-10 pt-0 text-justify">
      <TypographyParagraph>
        As a fourth year Electronics Engineering student at the
        <Hyperlink
          url={UNIVERSITY_URL}
          text=" University of the Philippines Diliman"
        />
        , I&apos;m honing my skills to become a versatile and adaptable
        full-stack software engineer. My background in electronics has equipped
        me with a strong foundation in technical problem-solving and
        communication systems (ex. the internet). I&apos;m currently gaining
        valuable experience as a<b> Web and Mobile App Developer</b> intern at
        <Hyperlink url={SYMPH_URL}> Symph.</Hyperlink>
      </TypographyParagraph>
      <TypographyParagraph>
        I&apos;m interested in machine learning and IoT, and I&apos;ve built
        projects in these areas. I love exploring how technology can solve
        real-world problems. I use
        <Hyperlink url={ARCH_LINUX_URL}> Arch</Hyperlink> btw.
      </TypographyParagraph>
      <TypographyParagraph>
        Outside of school and coding, I am a casual 🎸, a regular 🎮, a binge 📺
        show watcher, and an 💪 active person <strike>sometimes</strike>.
      </TypographyParagraph>
    </article>
  );
}
