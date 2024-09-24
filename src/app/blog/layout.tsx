import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import React from "react";
import TwoColumnLayout from "../../layouts/two-column-layout";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Asil Andrei Acasio",
  description: "Asil's Blog",
  keywords: "",
};

export default function Layout(props: Readonly<Props>) {
  const { children } = props;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TwoColumnLayout>{children}</TwoColumnLayout>
    </ThemeProvider>
  );
}
