// export const LOG_IN = 'LOG_IN';
// export const LOG_OUT = 'LOG_OUT';
// export const AUTHENTICATE = 'AUTHENTICATE';

// export const logIn = () => ({ type: LOG_IN });

// export const logOut = () => ({ type: LOG_OUT });

// export const authenticate = (email, password) => ({
//   type: AUTHENTICATE,
//   payload: { email, password },
// });

import { createActions } from 'redux-actions';

const { authenticate } = createActions({
  AUTHENTICATE: {
    FETCH: (payload) => payload,
    SUCCESS: (payload) => payload,
    FAILURE: (payload) => payload,

    LOG_IN: (payload) => payload,
    LOG_OUT: (payload) => payload,
  },
});

export default authenticate;
