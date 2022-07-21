import React, { useState, useContext } from "react";
import StoreContext from "../Store/StoreContext";
import { useNavigate } from "react-router-dom";
import { Title, Form } from "./styles";

function initialState() {
  return {
    user: "",
    password: "",
  };
}

function login({ user, password }) {
  if (user && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválidos" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function OnSubmit(event) {
    event.preventDefault();

    const { token } = login(values);

    if (token) {
      setToken(token);
      return navigate("/login");
    }

    setValues(initialState);
  }

  return (
    <>
      <Title>Acessar o Procure o seu usuário </Title>
      <Form>
        <label htmlFor="user">User</label>
        <input
          type="text"
          name="user"
          onChange={onChange}
          value={values.user}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={values.password}
        />
        <input type="submit" name="send" onSubmit={OnSubmit} />
      </Form>
    </>
  );
};

export default UserLogin;
