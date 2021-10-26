import { createActions } from 'redux-actions';

const { registration } = createActions({
  REGISTRATION: {
    FETCH: (payload) => payload,
    SUCCESS: (payload) => payload,
    FAILURE: (payload) => payload,
  },
});

export default registration;
