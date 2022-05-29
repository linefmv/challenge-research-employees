import styled from "styled-components";

export const Container = styled.thead`
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
