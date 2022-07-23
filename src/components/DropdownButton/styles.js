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
    font-weight: 700;
    color:#000028;
    margin-top: 5px;
    background-color: white;
    border: thin solid grey;
    border-radius: 4px;
    line-height: 1.5em;
    padding: 5px 3.5px 5px 1px;
    cursor: pointer;
    box-shadow: 0 0 2px #cccccc;
    transition: all 0.5s ease;
    width: 157px;
    border: none;
    cursor: pointer;
    outline: inherit;

    :hover {
      transform: translateY(-2px);
      box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.35);
      transition: all 0.4s;
    }
  }

  option {
    font-weight: 700;
    color: #000028;
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
