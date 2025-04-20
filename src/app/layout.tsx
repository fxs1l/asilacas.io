/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import React from "react";
import { SITE_DESCRIPTION } from "../constants/description";
import {
  GOOGLE_FONT_API,
  GOOGLE_FONT_PROVIDER,
  GOOGLE_POPPINS,
} from "../constants/fonts";
import { FULL_NAME } from "../constants/name";
import "../index.css";
import TwoColumnLayout from "../layouts/two-column-layout";

export const metadata: Metadata = {
  title: FULL_NAME,
  description: SITE_DESCRIPTION,
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href={GOOGLE_FONT_API} />
        <link
          rel="preconnect"
          href={GOOGLE_FONT_PROVIDER}
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_POPPINS} rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TwoColumnLayout>{children}</TwoColumnLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
