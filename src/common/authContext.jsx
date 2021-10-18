import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const login = (email, password) => {
    if (email !== 'test@mail.ru' || password !== 'test') {
      return;
    }

    setIsAuthorized(true);
  };

  const logout = () => {
    setIsAuthorized(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};
