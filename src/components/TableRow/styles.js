import styled from "styled-components";

export const EmployeeDetails = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0.2px solid #d1cbcb;
  padding: 12px;
  td {
    width: 150px;
    text-align: center;
    padding: 5px;
  }
  div td {
    width: 250px;
  }
  & .avatar {
    width: 63px;
    border-radius: 100%;
    grid-area: image;
  }
  & .ceoAndName {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .image {
    width: 25px;
    cursor: pointer;
    grid-area: delete;
  }

  &:hover {
    background-color: #ddd;
  }
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
