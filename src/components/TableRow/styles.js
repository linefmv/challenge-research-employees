import styled from "styled-components";

export const EmployeeDetails = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2px solid #d1cbcb;
  padding: 12px 0;

  div td {
    text-align: left;
  }

  & .avatar {
    width: 63px;
    height: 63px;
    border-radius: 100%;
  }

  & .nameAndPosition {
    display: flex;
    flex-direction: column;
    align-items: center;
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
      font-size: 10px;
      width: fit-content;
    }

    div {
      align-items: flex-start;
    }
  }
  @media (max-width: 600px) {
    background-color: azure;
    font-size: 12px;

    background-color: azure;
    font-size: 10px;
    padding: 12px 0;
    justify-content: space-between;

    & .avatar,
    & .image {
      display: none;
    }

    .nameAndPosition {
      align-items: baseline;
    }
  }
  /*
  @media (max-width: 454px) {
    width: 325px;
    background-color: azure;
    font-size: 10px;
    padding: 12px 0;
    justify-content: space-between;
    div {
      width: 65px;
      align-items: flex-start;
    }

    td {
      width: 55px;
    }
    div td {
      width: 153px;
    }
    td:last-child {
      width: 0;
    }
    td:first-child{
      width: 0;

    }
  } */
`;
export const TableData = styled.td`
  font-size: 15px;
  td {
    width: 150px;
    text-align: center;
  }

  @media (max-width: 950px) {
    font-size: 13px;

    td img {
      background-color: red;
    }
  }
`;
