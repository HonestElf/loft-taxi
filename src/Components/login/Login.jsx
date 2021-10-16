import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withAuth } from '../../common/authContext';

class Login extends Component {
  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate('profile');
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    this.props.login(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isAuthorized ? (
          <p>
            You are logged in{' '}
            <button onClick={this.goToProfile}>Go to Profile</button>{' '}
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <button className="submitButton" type="submit">
              Login
            </button>
          </form>
        )}
      </>
    );
  }
}

Login.propTypes = {
  isAuthorized: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

const LoginWithAuth = withAuth(Login);

export default LoginWithAuth;
