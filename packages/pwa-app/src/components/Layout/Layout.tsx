import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import styled from "styled-components";
import { ThemeContext } from "../../utils/themeContext";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = styled.main`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem 0;
  gap: 1rem;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding: 1rem;
  gap: 1rem;
`;

export default function Layout({ children }: Props) {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <LayoutWrapper data-theme={theme}>
        <SideBar />
        <Content>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <div>{children}</div>
        </Content>
        {/* <Footer /> */}
      </LayoutWrapper>
      {/* <Button>using styled component</Button> */}
    </>
  );
}
