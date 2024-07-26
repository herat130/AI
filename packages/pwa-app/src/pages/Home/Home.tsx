import React from "react";
import styled from "styled-components";
import { Button, Paragraph } from "ui-library";
import TypeWriter from "../../components/TypeWriter";

const ContentWrpper = styled.div`
  min-height: 100%;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export default function Home() {
  return (
    <ContentWrpper>
      <Content>
        <h2>This is Home page</h2>
        <Button primary={true} label="UI LIB" />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!" />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <textarea
          style={{
            alignItems: "flex-end",
            flexBasis: "90%",
            width: "800px",
            minHeight: "60px",
          }}
          name="question"
          id="question"
          title="please ask your question here"
          placeholder="ask question..."
        ></textarea>
      </Content>
    </ContentWrpper>
  );
}
