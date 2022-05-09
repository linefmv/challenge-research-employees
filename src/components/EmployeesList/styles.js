import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  justify-items: center;
  width: 100%;
  input {
    margin-bottom: 10px;
  }

  table {
    width: 95%;
    border-collapse: collapse;
    border: none;
  }

   th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #5c5cff;
    color: white;

    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }
`;

export const EmployeeDetails = styled.tr`
  & :nth-child(-n + 2) {
    width: fit-content;
    display: flex;
  }
 text-align: center;
`;
export const EmployeeName = styled.td`
  grid-area: name;
  border-radius: 10px 0 0 0;
`;
export const EmployeeRegister = styled.td`
  grid-area: register;
`;
export const EmployeePosition = styled.td`
  grid-area: position;
  border-radius: 0 0 0 10px;
`;
export const EmployeeBranch = styled.td`
  grid-area: branch;
`;
export const EmployeeAdmission = styled.td`
  grid-area: admission;
  border-radius: 0 10px 10px 0;
`;
