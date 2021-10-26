import { combineReducers } from 'redux';

import authentication from './Components/login/_reducer';
import registration from './Components/registration/_reducer';

export default combineReducers({ authentication, registration });
