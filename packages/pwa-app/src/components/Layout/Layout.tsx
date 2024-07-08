import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <SideBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
