import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './_rootReducer';

import authMiddleware from './Components/login/_effects';
import registrationMiddleware from './Components/registration/_effects';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(authMiddleware, registrationMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
