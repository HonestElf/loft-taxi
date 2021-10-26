import { handleActions } from 'redux-actions';
import actions from './_actions';

const initState = {
  isFetching: false,
  isAuthorized: false,
  error: null,
};

const authentication = handleActions(
  {
    [actions.fetch]: (state) => ({ ...state, isFetching: true, error: null }),
    [actions.success]: (state) => ({
      ...state,
      isFetching: false,
      isAuthorized: true,
      error: null,
    }),
    [actions.failure]: (state, payload) => ({
      ...state,
      isFetching: false,
      isAuthorized: false,
      error: payload,
    }),

    [actions.logIn]: (state) => ({ ...state, isAuthorized: true, error: null }),
    [actions.logOut]: (state) => ({
      ...state,
      isAuthorized: false,
      error: null,
    }),
  },
  initState
);

export default authentication;

export const getIsFetching = (state) => state.authentication.isFetching;
export const getIsAuthorized = (state) => state.authentication.isAuthorized;
