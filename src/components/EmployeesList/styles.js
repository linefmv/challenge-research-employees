import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  thead {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: #f8f9fd;
    border-bottom: 0.2px solid #d1cbcb;
    color: #000;
    align-items: center;
  }
  th {
    padding: 15px 10px;

    & .caretImg {
      width: 24px;
      filter: invert(0);
      padding-left: 5px;
    }

    & .caret {
      display: none;
    }

    &:first-child {
      & .caret {
        display: inline;
      }
    }
  }
  `;