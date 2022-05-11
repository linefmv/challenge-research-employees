import styled from "styled-components";

export const Button = styled.span`
  position: fixed;
  left: 95%;
  bottom: 0;
  z-index: 1;
  cursor: pointer;
  visibility: hidden;

  .active {
    display: inline;
    visibility: visible;
    border-radius: 50px;
    padding: 4px;
  }

  @media (max-width: 994px) {
    left: 92%;
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    left: 89%;
    font-size: 1.5rem;
  }
`;
