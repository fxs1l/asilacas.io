import React from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode | string;
  className?: string; // Add the className prop
}

export default function TypographyParagraph(props: Props) {
  const { children, className } = props;
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
