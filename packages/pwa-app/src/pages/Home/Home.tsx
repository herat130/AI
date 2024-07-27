import React from "react";
import styled from "styled-components";
import { Button, Paragraph } from "ui-library";
import TypeWriter from "../../components/TypeWriter";

const ContentWrpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 700px;
  height: 700px;
  overflow-y: auto;
`;

export default function Home() {
  return (
    <ContentWrpper>
      <Content>
        <h2>This is Home page</h2>
        <Button primary={true} label="UI LIB" />
        <Paragraph text="here is a question?" align="right" />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!" align="justify"/>
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
      </Content>
      <textarea
        style={{
          alignItems: "flex-end",
          flexBasis: "90%",
          width: "80%",
          minHeight: "60px",
        }}
        name="question"
        id="question"
        title="please ask your question here"
        placeholder="ask question..."
      ></textarea>
    </ContentWrpper>
  );
}
