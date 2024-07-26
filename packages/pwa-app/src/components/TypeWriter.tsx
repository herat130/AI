import React, { useEffect, useState } from "react";
import styled from "styled-components";


const TypeWriterWrapper= styled.div`
    width: 800px;
`;

type Props = {
  text: string;
  speed: number;
};

export default function TypeWriter({ text = "", speed = 100 }: Props) {
  const [typingText, setTypingText] = useState<string>(text.split(" ")[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = window.setInterval(() => {
      if (index < text.split(" ").length - 1) {
        setTypingText((typingText) =>
          typingText.concat(` ${text.split(" ")[index]}`)
        );
        index++;
      } else {
        console.log("clear interval");
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      console.log("clear interval return");
      clearInterval(intervalId);
    };
  }, []);

  return <TypeWriterWrapper>{typingText}</TypeWriterWrapper>;
}
