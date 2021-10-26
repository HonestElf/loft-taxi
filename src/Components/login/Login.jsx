import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from './_actions';
import { getIsAuthorized } from './_reducer';

const Login = (props) => {
  const { isAuthorized, fetchAuthenticate } = props;

  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    fetchAuthenticate({ email: email.value, password: password.value });
  };
  return (
    <>
      {isAuthorized ? (
        <p>
          You are logged in
          <Link to="/profile">Go to Profile</Link>
        </p>
      ) : (
        <>
          <Link to="/registration">registration</Link>
          <form onSubmit={authenticate}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <button className="submitButton" type="submit">
              Login
            </button>
          </form>
        </>
      )}
    </>
  );
};

Login.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToPros = (state) => ({
  isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {
  fetchAuthenticate: actions.fetch,
};

export default connect(mapStateToPros, mapDispatchToProps)(Login);
