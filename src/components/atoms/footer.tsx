import Hyperlink from "../ui/hyperlink";

export default function Footer() {
  return (
    <p className="lg:text-sm, pt-20 text-xs">
      &copy; {new Date().getFullYear()} Asil Andrei Acasio. Built with Next.js
      and Tailwind CSS. Layout inspired from{" "}
      <Hyperlink isBold={false} url="https://brittanychiang.com">
        Brittany Chiang
      </Hyperlink>
      .
    </p>
  );
}
