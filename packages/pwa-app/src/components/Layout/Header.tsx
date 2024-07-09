import React from "react";
import styled from "styled-components";

const HeaderWarapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  padding: 0.5rem;
  background-color: #ddd;
  min-width: 100vw;
  color: #000;
`;

export default function Header() {
  return <HeaderWarapper>Header</HeaderWarapper>;
}
