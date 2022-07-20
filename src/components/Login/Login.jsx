
import React,  { useState } from 'react';

import {Title, Form }  from './styles';

function initialState () {
    return {
        user: '',
        password: '',
    };
}
const UserLogin = () => {
    const [values, setValues] = useState(initialState);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

  return (
    <>
      <Title>Acessar o Procure o seu usuário </Title>
      <Form>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" onChange={onChange} value={values.user}/>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" onChange={onChange} value={values.password} />
          <input type="submit" name="send" />
      </Form>
    </>
  );
};

export default UserLogin;