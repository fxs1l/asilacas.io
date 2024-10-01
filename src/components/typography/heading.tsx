import React from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode | string;
  level?: number;
  className?: string;
}

export default function TypographyHeading(props: Readonly<Props>) {
  const { children, level = 1, className } = props;

  switch (level) {
    case 1:
      return (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className,
          )}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={cn(
            "scroll-m-20 p-10 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className,
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className,
          )}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className,
          )}
        >
          {children}
        </h4>
      );
    default:
      throw Error("Unknown level: " + level);
  }
}
