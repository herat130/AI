import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem 0;
  gap: 1rem;
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding: 1rem;
  gap: 1rem;
`;

export default function Layout({ children }: Props) {
  return (
    <>
      <LayoutWrapper>
        <SideBar />
        <Main>
          <Header />
          <div>{children}</div>
        </Main>
        <Footer />
      </LayoutWrapper>
      {/* <Button>using styled component</Button> */}
    </>
  );
}
