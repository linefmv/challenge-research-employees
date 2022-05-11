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
      padding-left: 5px;
    }

    &:first-child {
      & .caretIcon {
        display: inline;
      }
    }
    & .caretIcon {
      display: none;
    }
  }

  @media (max-width: 934px) {
    tr {
      align-items: center;
    }
    th {
      padding: 0;
      font-size: 10px;

      & .caretImg {
        width: 22px;
        padding-left: 5px;
      }
    }
  }
`;
