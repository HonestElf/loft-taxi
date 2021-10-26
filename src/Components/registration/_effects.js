import actions from './_actions';

import { sendUserRegistrationData } from './_api';

const registrationMiddleware = (store) => (next) => async (action) => {
  try {
    if (action.type === actions.fetch) {
      const { body } = action.payload;

      const response = await sendUserRegistrationData(body);

      if (response.success === true) {
        store.dispatch(actions.success(response.token));
      } else {
        store.dispatch(actions.failure(response.error));
      }
    } else {
      next(action);
    }
  } catch (error) {
    console.error('[registrationMiddleware]: ', error);
    store.dispatch(actions.failure(error));
  }
};

export default registrationMiddleware;
