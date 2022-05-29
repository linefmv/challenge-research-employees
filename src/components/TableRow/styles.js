import styled from "styled-components";

export const EmployeeDetails = styled.tr`
  text-align: center;

 
  & .avatar {
    width: 63px;
    height: 63px;
    border-radius: 100%;
  }

  & .nameAndPosition {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & .deleteIcon {
    width: 25px;
    cursor: pointer;
  }

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 950px) {
    td {
      font-size: 12px;
      width: fit-content;
    }

    div {
      align-items: flex-start;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 12px 0;
    justify-content: space-between;

    & .avatar,
    & .delete {
      display: none;
    }

    .nameAndPosition {
      align-items: baseline;
    }
  }
`;

export const TableData = styled.td`

  

  @media (max-width: 950px) {
    font-size: 13px;

    td img {
      background-color: red;
    }
  }
`;
