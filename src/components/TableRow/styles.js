import styled from "styled-components";

export const EmployeeDetails = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0.2px solid #d1cbcb;
  padding: 12px 0;

  td {
    width: 150px;
    text-align: center;
  }

  div td {
    /* width: 250px; */
    text-align: left;
  }

  & .avatar {
    width: 63px;
    border-radius: 100%;
  }
  & .ceoAndName {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .image {
    width: 25px;
    cursor: pointer;
  }

  &:hover {
    background-color: #ddd;
  }

  /* @media (max-width: 730px) {
    width: 500px;
    background-color: azure;
    font-size: 12px;
    div {
      width: 234px;
    }
    td {
      width: 104px;
    }

    & .avatar,
    & .image {
      visibility: hidden;
      width: 0;
    }
  }
  @media (max-width: 584px) {
    width: 442px;
    background-color: azure;
    font-size: 12px;
    div {
      width: 204px;
    }
  }
  @media (max-width: 584px) {
    width: 325px;
    background-color: azure;
    font-size: 10px;
    padding: 12px 0;
    justify-content: space-between;
    div {
      width: 95px;
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
  }
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
export const EmployeeName = styled.td`
  grid-area: name;
`;
export const EmployeeRegister = styled.td`
  grid-area: register;
`;
export const EmployeePosition = styled.td`
  grid-area: position;
`;
export const EmployeeBranch = styled.td`
  grid-area: branch;
`;
export const EmployeeAdmission = styled.td`
  grid-area: admission;
`;
