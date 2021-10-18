import React from 'react';
import { render } from '@testing-library/react';

import LoginWithAuth from './Login';

describe('Login', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<LoginWithAuth />);

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
  });
});
