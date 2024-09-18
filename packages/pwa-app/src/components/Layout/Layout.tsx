import { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { ThemeContext } from "../../utils/context/themeContext";

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
`;

const Content = styled.section`
  display: flex;
  flex-basis: 85%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default function Layout({ children }: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <LayoutWrapper data-theme={theme}>
      <SideBar />
      <Content>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <ContentWrapper>{children}</ContentWrapper>
      </Content>
    </LayoutWrapper>
  );
}
