import styled from "styled-components";

export const Container = styled.thead`
  width: 100%;
  display: inline-table;
  background-color: #f8f9fd;
  border-bottom: 0.2px solid #d1cbcb;
  color: #000;
  vertical-align: baseline;

  tr {
      display: flex;
      justify-content: space-evenly;
  }
  th {
    padding: 15px 0;

    & .caretImg {
      width: 24px;
      filter: invert(0);
      padding-left: 5px;
    }

    & .caretIcon {
      display: none;
    }

    &:first-child {
      & .caretIcon {
        display: inline;
      }
    }
  }
  @media (max-width: 584px) {
    th {
      padding: 0;
      font-size: 12px;
    }
  }
`;
