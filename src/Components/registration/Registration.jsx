import React from 'react';
import { PropTypes } from 'prop-types';

const Registration = (props) => {
  const { onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" size="28" />
      <button className="submitButton" type="submit">
        Submit form
      </button>
    </form>
  );
};

Registration.propTypes = {
  onSubmit: PropTypes.func,
};

export default Registration;
