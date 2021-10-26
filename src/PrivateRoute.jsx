import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { getIsAuthorized } from './Components/login/_reducer';

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthorized ? <Component {...props} /> : <Redirect to="/registration" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
