import { handleActions } from 'redux-actions';
import actions from './_actions';

const initState = {
  isFetching: false,
  error: null,
};

const registration = handleActions(
  {
    [actions.fetch]: () => ({
      isFetching: true,
      error: null,
    }),
    [actions.success]: () => ({
      isFetching: false,
      error: null,
    }),
    [actions.failure]: (payload) => ({
      isFetching: false,
      error: payload,
    }),
  },
  initState
);

export default registration;

export const getIsFetching = (state) => state.registration.isFetching;
