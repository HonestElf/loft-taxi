import authenticate from './_actions';
import { serverLogin } from './_api';

const authMiddleware = (store) => (next) => async (action) => {
  try {
    console.log(action);
    if (action.type === authenticate.fetch.toString()) {
      const { email, password } = action.payload;

      const response = await serverLogin(email, password);
      console.log(response);
      if (response.success === true) {
        store.dispatch(authenticate.success());
      } else {
        store.dispatch(authenticate.failure(response.error));
      }
    } else {
      next(action);
    }
  } catch (error) {
    console.error('[authMiddleware]: ', error);
    store.dispatch(authenticate.failure(error));
  }
};

export default authMiddleware;
