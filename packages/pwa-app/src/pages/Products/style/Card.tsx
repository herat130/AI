import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #ddd;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    box-shadow: 2px 2px 2px 2px #ddd;
  }
`;

export const CardContent = styled.div`
  flex: 1;
`;
