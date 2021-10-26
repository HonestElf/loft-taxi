import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Components/login/Login';
import Map from './Components/map/Map';
import ProfileWithAuth from './Components/profile/Profile';
import Registration from './Components/registration/Registration';

import logo from './images/logo.png';

import { MainContent } from './common/_styles';
import {
  HeaderContent,
  ButtonsContainer,
  LogoContainer,
  NavigationButton,
} from './common/_headerStyle';

import PrivateRoute from './PrivateRoute';
const App = () => {
  return (
    <MainContent>
      <HeaderContent>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <ButtonsContainer>
          <NavigationButton to="/">Login</NavigationButton>
          <NavigationButton to="/map">Map</NavigationButton>
          <NavigationButton to="/profile">Profile</NavigationButton>
        </ButtonsContainer>
      </HeaderContent>
      <main>
        <section>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/registration" component={Registration} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithAuth} />
          </Switch>
        </section>
      </main>
    </MainContent>
  );
};

export default App;
