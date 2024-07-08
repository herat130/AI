import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Button = styled.button`
  color: #fff;
  background-color: #6b1414;
  border: 1px solid #fff;
  border-radius: 6px;
`;

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <SideBar />
      <div>{children}</div>
      <Button>using styled component</Button>
      <Footer />
    </div>
  );
}
