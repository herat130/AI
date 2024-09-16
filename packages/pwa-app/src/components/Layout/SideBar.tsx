import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;  
  gap: 20px;

  img {
    height: 100%;
    width: 20%;
  }
`;

const SidebarWrapper = styled.aside`
  height: 100vh;
  min-width: 15%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  box-shadow: inset 1px;
  border-radius: 4px;

  ul {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  li {
    width: 100%;
    list-style-type: none;
    border-bottom: 1px solid #fff;
  }

  a {
    display: block;
    text-decoration: none;
    width: 100%;
  }

  a:active {
    background-color: aliceblue;
  }
  a:hover {
    background-color: aliceblue;
  }
`;

export default function SideBar() {
  return (
    <SidebarWrapper>
      <Logo>
        <img src="/assets/ChatGPT_logo.svg" alt="logo" />
        Chat GPT
      </Logo>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">OLD </a>
          </li>
          <li>
            <a href="">NEW</a>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
}
