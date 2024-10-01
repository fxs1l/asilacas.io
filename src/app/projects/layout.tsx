import type { Metadata } from "next";
import React from "react";
import SingleColumnLayout from "../../layouts/singe-column-layout";
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Projects | Asil Andrei Acasio",
  description: "Works by Asil Andrei Acasio",
};

export default function WorksLayout(props: Readonly<Props>) {
  const { children } = props;
  return <SingleColumnLayout>{children}</SingleColumnLayout>;
}
