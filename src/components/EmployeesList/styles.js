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
    border: 1px solid lime;
  }
  th {
    border: 1px solid lime;
  }
  
  `;

export const EmployeeDetails = styled.tr`
border-spacing: 0 150px;
    border: 1px solid rgb(190, 190, 190);
  text-align: center;
  & :nth-child(-n + 2) {
    width: fit-content;
    display: flex;
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
