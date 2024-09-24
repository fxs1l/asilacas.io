import React from "react";

interface Props {
  url: string;
  children: string | React.ReactNode;
  isBold?: boolean;
  isItalicized?: boolean;
}
export default function Hyperlink(props: Props) {
  const { url, children, isBold = true, isItalicized = false } = props;
  let modifiedChildren = isBold ? <b>{children}</b> : children;
  modifiedChildren = isItalicized ? (
    <i>{modifiedChildren}</i>
  ) : (
    modifiedChildren
  );
  return <a href={url}>{modifiedChildren}</a>;
}
