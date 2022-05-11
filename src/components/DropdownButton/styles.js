import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: column;

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  select {
    background-color: white;
    border: thin solid grey;
    border-radius: 4px;
    line-height: 1.5em;
    padding: 0.5px 3.5px 0.5px 1px;
    cursor: pointer;
    box-shadow: 0 0 2px rgb(204, 204, 204);
    transition: all 0.5s ease;
  }

  option {
    font-size: 12px;
    color: #000;

    :hover {
      background-color: blue;
    }
  }
  @media (max-width: 934px) {
    option {
      font-size: 10px;
    }
    select {
      font-size: auto;
      height: auto;
    }
  }
  @media (max-width: 514px) {
    label,
    label {
      font-size: 12px;
    }
  }
`;
