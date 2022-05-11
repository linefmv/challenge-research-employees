import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 5px 0 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4e3e6;
  border-radius: 0 0 6px 6px;

  @media (max-width: 794px) {
    height: 150px;
  }
`;
export const Image = styled.img`
  width: 150px;
  padding-left: 12px;

  @media (max-width: 544px) {
    width: 75px;
  }
`;
