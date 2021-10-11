import React from 'react';

const LoginPage = (props) => {

  // const {onSubmit} = props;
  return (
    <form  >
      <label htmlFor= "email">Email:</label>
      <input id = "email" type = "email" name = "email" size = "28"/>
      <label htmlFor= "password">password:</label>
      <input id = "password" type = "password" name = "password" size = "28"/>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
