import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  justify-items: center;
  width: 100%;
  input {
    margin-bottom: 10px;
  }

  table {
    display: grid;
    width: 90%;
    border-collapse: collapse;
    border: none;
  }

  thead{
    width: 100%;
    table-layout: auto;
    text-align: left;
    background-color: #5c5cff;
    color: white;
    & .caret {
    width: 10px;
    height: 10px;
  }
  
  table th {
    padding: 12px 0;
  
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }
`;

export const EmployeeDetails = styled.tr`
  display: grid;
  align-items: baseline;
  justify-items: center;
  border: 1px solid;
  grid-template-areas:
    "image name register  branch admission delete"
    "image position register branch admission delete";

  img {
    width: 63px;
    border-radius: 100%;
    grid-area: image;
  }
  & .image {
    width: 25px;
    cursor: pointer;
    grid-area: delete;
  }
  /* &:nth-child(odd) {
    background-color: #5c2cff;
  } */
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
