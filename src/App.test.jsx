import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

jest.mock('./Components/login/Login', () => ({
  __esModule: true,
  default: () => <div>Login content</div>,
}));
jest.mock('./Components/map/Map', () => ({
  __esModule: true,
  default: () => <div>Map content</div>,
}));
jest.mock('./Components/profile/Profile', () => ({
  __esModule: true,
  default: () => <div>Profile content</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => ({
        auth: {
          isLoggedIn: true,
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('Login content');
  });

  describe('when clicked on navigation buttons', () => {
    it('opens the corresponding page', () => {
      const mockStore = {
        getState: () => ({
          auth: {
            isLoggedIn: true,
          },
        }),
        subscribe: () => {},
        dispatch: () => {},
      };

      const history = createMemoryHistory();

      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch('Login content');
      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch('Map content');
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch('Profile content');
      fireEvent.click(getByText('Login'));
      expect(container.innerHTML).toMatch('Login content');
    });
  });
});
