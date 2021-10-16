import React, { Component } from 'react';
import { withAuth } from '../../common/authContext';

class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefautl();
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

const ProfileWithAuth = withAuth(Profile);

export default ProfileWithAuth;
