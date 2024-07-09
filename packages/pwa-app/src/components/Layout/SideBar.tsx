import React from "react";
import styled from "styled-components";

const SidebarWrapper = styled.aside`
  height: 100vh;
  min-width: 15%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export default function SideBar() {
  return <SidebarWrapper>Side bar</SidebarWrapper>;
}
