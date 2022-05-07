import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 5px 0 0 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.img`
  width: 150px;
`;
