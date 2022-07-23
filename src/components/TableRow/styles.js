import styled from "styled-components";

export const EmployeeDetails = styled.tr`
  text-align: center;
  height: 60px;
  border-bottom: 1px solid #b08bf8;

  & .nameAndPosition {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 60px;
  }

  & .deleteIcon {
    width: 25px;
    cursor: pointer;
  }

  &:hover {
    background-color: #ddd;
  }
  @media (max-width: 950px) {
    text-align: center;
  }
  @media (max-width: 456px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 12px 0;
    justify-content: space-between;

    & .deleteIcon {
      width: 18px;
    }
  }
`;

export const TableData = styled.td`
  @media (max-width: 950px) {
    font-size: 12px;
    width: fit-content;
  }
`;
