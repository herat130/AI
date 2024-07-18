import React from "react";
import styled from "styled-components";

const ContentWrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 1rem;
  gap: 1rem;
`;

const AnswerSection = styled.div`
  /* min-height: 650px; */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid black;
  /* height: 600px; */
`;

const TypingEffect = styled.p`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 24px;
  white-space: pre-wrap; /* Ensure the text wraps to multiple lines */
  overflow: hidden;
  border-right: 0.15em solid black; /* Adjust the color and size as needed */
  animation: typing 4s steps(40, end), blink-caret 0.75s step-end infinite;
  /* height: 100%; */
  /* width: 100%; */

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Blinking cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
`;

export default function Home() {
  return (
    <ContentWrpper>
      <h2>This is Home page</h2>
      <AnswerSection>
        <TypingEffect>
          This is answer div Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam maxime, et nesciunt optio rem non! Aliquam
          consequuntur ipsa saepe reprehenderit fuga ducimus natus! Eius,
          possimus aliquam? Porro obcaecati culpa earum!
        </TypingEffect>
      </AnswerSection>
      {/* <div> */}
      <textarea
        style={{
          alignItems: "flex-end",
          flexBasis: "90%",
          width: "90%",
          minHeight: "80px",
        }}
        name="question"
        id="question"
        title="please ask your question here"
        placeholder="ask question..."
      ></textarea>
      {/* </div> */}
    </ContentWrpper>
  );
}
