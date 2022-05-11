import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  select {
    height: 40px;
    font-size: 15px;
    background-color: white;
    border: thin solid grey;
    border-radius: 4px;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    cursor: pointer;
    box-shadow: 0 0 2px rgb(204, 204, 204);
    transition: all 0.5s ease;
  }

  option {
    font-size: 15px;
    color: #000;

    :hover {
      background-color: blue;
    }
  }
`;
