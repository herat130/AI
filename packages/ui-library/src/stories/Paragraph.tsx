type Position = "left" | "center" | "right" | "justify";

type Props = {
  text: string;
  align?: Position;
  width?: string;
};

export function Paragraph({
  text = "",
  align = "left",
  width = "100%",
}: Props) {
  return <p style={{ textAlign: align, width: width }}>{text}</p>;
}
