import React from "react";

type Props = {
  text: string;
};

export function Paragraph({ text = "" }: Props) {
  return <p>{text}</p>;
}
