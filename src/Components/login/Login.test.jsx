import React from 'react';
import { render } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Login />);

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
  });
});
