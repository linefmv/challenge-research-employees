import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: max-content;

  #logo {
    padding: 5px;
    height: fit-content;
    @media (max-width: 900px) {
      margin: 0 auto;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "image title"
    "image form"
    "image .";
  align-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-areas:
      "title"
      "form";
  }

  img {
    grid-area: image;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  grid-area: title;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  grid-area: form;

  label {
    color: #000;
    font-weight: 700;
  }

  input {
    margin: 10px 0;
    font-size: 16px;
    padding: 10px 0 0 4px;
    height: 56px;
    border: none;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 280px;
    box-sizing: border-box;
    transition: all 0.3s linear;
    font-weight: 400;
    -webkit-appearance: none;

    &:focus {
      border-bottom: solid 1px #f2f2f2;
      outline: 0;
      box-shadow: 0 2px 6px -8px #f2f2f2;
    }
  }
  input[type="text"] {
    padding-left: 30px;
    background: url("https://img.icons8.com/material-outlined/24/000000/mail.png")
      no-repeat left;
  }
  input[type="password"] {
    padding-left: 30px;
    background: url("https://img.icons8.com/material-rounded/24/000000/lock--v1.png")
      no-repeat left;
  }

  input[type="submit"] {
    background-color: #b08bf8;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    margin-top: 5px;
    color: 	#000028;
    font-size: 14px;
    margin-left: auto;
    font-weight: 600;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
    border: none;
    transition: all 0.3s ease;
    outline: 0;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 2px 6px -1px #b08bf8;
      &:active {
        transform: scale(0.99);
      }
    }
  }
`;
