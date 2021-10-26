import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import loginActions from '../login/_actions';

const Profile = (props) => {
  const { logOut } = props;
  const unauthenticate = () => {
    logOut();
  };

  return (
    <p>
      Profile Component.
      <button onClick={unauthenticate}>Log Out</button>
    </p>
  );
};

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
};

const mapDispatchToProps = { logOut: loginActions.logOut };

export default connect(null, mapDispatchToProps)(Profile);
