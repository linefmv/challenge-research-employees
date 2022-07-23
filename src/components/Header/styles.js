import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 5px 14px 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4e3e6;
  border-radius: 0 0 6px 6px;

  @media (max-width: 814px) {
    height: 260px;
    padding-bottom: 10px;
   flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 150px;
  padding-left: 12px;

  @media (max-width: 544px) {
    width: 150px;
  }
`;

export const SingOut = styled.button`
  -webkit-appearance: none;
  border-radius: 24px;
  text-align: center;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: #b08bf8;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px -1px #f4e3e6;
    &:active {
      transform: scale(0.99);
    }
  }
`;
