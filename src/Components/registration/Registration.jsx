import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from './_actions';

const Registration = (props) => {
  const { fetchRegistration } = props;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, userName, userSecondName, password } = event.target;

    const requestBody = {
      email: email.value,
      userName: userName.value,
      userSecondName: userSecondName.value,
      password: password.value,
    };
    fetchRegistration(requestBody);
  };
  return (
    <>
      Уже зарегистрированы?
      <Link to="/login">Войти</Link>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" size="28" />
        <label htmlFor="name">name:</label>
        <input id="name" type="name" name="name" size="28" />
        <label htmlFor="surName">surName:</label>
        <input id="surName" type="surName" name="surName" size="28" />
        <label htmlFor="password">password:</label>
        <input id="password" type="password" name="password" size="28" />
        <button className="submitButton" type="submit">
          Submit form
        </button>
      </form>
    </>
  );
};

Registration.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = {
  fetchRegistration: actions.fetch,
};

export default connect(null, mapDispatchToProps)(Registration);
