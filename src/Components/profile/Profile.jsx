import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { withAuth } from '../../common/authContext';

class Profile extends Component {
  unauthenticate = (event) => {
    console.log(event);
    // event.preventDefautl();
    this.props.logout();
    this.props.navigate('login');
  };

  render() {
    return (
      <p>
        Profile Component.
        <button onClick={this.unauthenticate}>Log Out</button>
      </p>
    );
  }
}

Profile.propTypes = {
  isAuthorized: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

const ProfileWithAuth = withAuth(Profile);

export default ProfileWithAuth;
