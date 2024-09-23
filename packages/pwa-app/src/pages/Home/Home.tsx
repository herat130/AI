import styled from "styled-components";
import { Button, Paragraph } from "ui-library";
import TypeWriter from "../../components/TypeWriter";

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 700px;
  height: 700px;
  overflow-y: auto;
`;

const QuestionArea = styled.textarea`
  align-items: flex-end;
  flex-basis: 90%;
  width: 80%;
  min-height: 60px;
`;

export default function Home() {
  console.log(import.meta.env.VITE_APP_HOME_PAGE);
  return (
    <>
      <Content>
        <h2>{import.meta.env.VITE_APP_HOME_PAGE}</h2>
        <h2>Mode {import.meta.env.MODE}</h2>
        <Button primary={true} label="UI LIB" />
        <Paragraph text="here is a question?" align="right" />
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!"
          align="justify"
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!"
          align="justify"
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!"
          align="justify"
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis!"
          align="justify"
        />
        <TypeWriter
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius alias ut numquam sint id! Dolorem velit quibusdam sapiente? Doloribus perspiciatis placeat hic quis ipsam illum minus, dicta ab! Deserunt voluptatibus pariatur quos doloribus amet iure nihil, laborum cupiditate, corrupti ullam aut, tempore at. Dolorem ratione enim vero iure! Minus, omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta commodi odit ab ex? Ratione omnis odit incidunt, nemo velit ex adipisci veritatis iure voluptates architecto nobis eligendi quasi consequuntur."
          speed={100}
        />
      </Content>
      <QuestionArea
        name="question"
        id="question"
        title="please ask your question here"
        placeholder="ask question..."
      ></QuestionArea>
    </>
  );
}
