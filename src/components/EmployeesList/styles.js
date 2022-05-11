import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-items: center;
  width: 100%;
<<<<<<< HEAD
  input {
    margin-bottom: 10px;
  }
  thead {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: #f8f9fd;
    border-bottom: 0.2px solid #d1cbcb;
    color: #000;
    align-items: center;
  }
  th {
    padding: 15px 10px;
    & .caretImg {
      width: 24px;
      filter: invert(0);
      padding-left: 5px;
    }
    & .caret {
      display: none;
    }

    &:first-child {
      & .caret {
        display: inline;
      }
    }
  }
`;
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
=======
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;

  table {
    margin: 40px 0;
    width: 84%
>>>>>>> alterations-childs
  }
`;
