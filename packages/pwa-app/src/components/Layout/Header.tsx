import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWarapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;  
  height: 3rem;
  padding: 0.5rem;
  /* background-color: #000; */
  min-width: 100vw;
  /* color: #000; */
`;

type Props = {
  toggleTheme: () => void;
  theme: "light" | "dark";
};

export default function Header({ toggleTheme, theme }: Props) {
  return (
    <HeaderWarapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </HeaderWarapper>
  );
}
