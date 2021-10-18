import React from 'react';

import { withAuth } from './common/authContext';
import LoginWithAuth from './Components/login/Login';
import Map from './Components/map/Map';
import ProfileWithAuth from './Components/profile/Profile';

import logo from './images/logo.png';

import { Button, MainContent } from './common/_styles';
import {
  HeaderContent,
  ButtonsContainer,
  LogoContainer,
} from './common/_headerStyle';

class App extends React.Component {
  state = {
    currentPage: 'login',
  };

  PAGES = {
    login: (props) => <LoginWithAuth {...props} />,
    map: (props) => <Map {...props} />,
    profile: (props) => <ProfileWithAuth {...props} />,
  };

  navigateTo = (page) => {
    if (this.props.isAuthorized) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'login' });
    }
  };

  buttons = ['Login', 'Map', 'Profile'];
  render() {
    const { PAGES } = this;

    return (
      //   <>
      //     <header>
      //       <nav>
      //         <ul>
      //           <li>
      //             <button
      //               onClick={() => {
      //                 this.navigateTo('login');
      //               }}>
      //               Login
      //             </button>
      //           </li>
      //           <li>
      //             <button
      //               onClick={() => {
      //                 this.navigateTo('map');
      //               }}>
      //               Map
      //             </button>
      //           </li>
      //           <li>
      //             <button
      //               onClick={() => {
      //                 this.navigateTo('profile');
      //               }}>
      //               Profile
      //             </button>
      //           </li>
      //         </ul>
      //       </nav>
      //     </header>
      //     <main data-testid="container">
      //       <section>
      //         {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
      //       </section>
      //     </main>
      //   </>
      // );

      <MainContent>
        <HeaderContent>
          <LogoContainer>
            {' '}
            <img src={logo} alt="Logo" />
          </LogoContainer>
          <ButtonsContainer>
            {this.buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => {
                  this.navigateTo(button.toLowerCase());
                }}>
                {button}
              </Button>
            ))}
          </ButtonsContainer>
        </HeaderContent>
        <main>
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </MainContent>
    );
  }
}

export default withAuth(App);
