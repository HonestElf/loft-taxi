import authMiddleware from './_effects';
import { authenticate } from './_actions';
import { serverLogin } from './_api';

jest.mock('./_api', () => ({ serverLogin: jest.fn(() => true) }));

describe('authMiddleware', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate('testlogin', 'testpassword')
      );

      expect(serverLogin).toBeCalledWith('testlogin', 'testpassword');
      expect(dispatch).toBeCalledWith({
        type: 'LOG_IN',
      });
    });
  });
});
