import React from 'react';
import { AuthContext, AuthProvider } from './authContext';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('AuthContext', () => {
  describe('#login', () => {
    it('sets isAuthorized to false', () => {
      let isAuthorized;
      let login;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isAuthorized = value.isAuthorized;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isAuthorized).toBe(false);
      act(() => {
        login('test@mail.ru', 'test');
      });
      expect(isAuthorized).toBe(true);
    });
  });
});
