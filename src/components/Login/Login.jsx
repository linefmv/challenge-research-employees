import React, { useState, useContext } from "react";
import StoreContext from "../Store/StoreContext";
import { useHistory } from "react-router-dom";
import { Title, Form, Container, Content } from "./styles";
import Logo from "../../assets/image/findLogo.png";
import employeeLogin from "../../assets/image/employeeLogin.png";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }

    setValues(initialState);
  }

  return (
    <Content>
      <img
        src={Logo}
        width="162"
        height="82"
        id="logo"
        alt="Find You employees Logo"
      />
      <Container>
        <img
          src={employeeLogin}
          width="612"
          height="408"
          alt="Employee Login"
        />
        <Title>Login </Title>
        <Form onSubmit={onSubmit}>
          <label htmlFor="user">User</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
          <input type="submit" name="logar" aria-label="login" />
        </Form>
      </Container>
    </Content>
  );
};

export default UserLogin;
