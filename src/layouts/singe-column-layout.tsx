import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SingleColumnLayout(props: Readonly<Props>) {
  const { children } = props;
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20">
      {children}
    </div>
  );
}
