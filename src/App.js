import { React, Component } from 'react';
import './App.css';

// import Header from './Components/header/Header';
import LoginPage from './Components/login/LoginPage';
import MapPage from './Components/map/MapPage';
import RegistrationPage from './Components/registration/RegistrationPage';
import ProfilePage from './Components/profile/ProfilePage';

const pages = {
  login: <LoginPage/>,
  map: <MapPage/>,
  registration: <RegistrationPage/>,
  profile: <ProfilePage/>
}
class App extends Component {
  state = {
    currentPage: 'login'
  }

  navigateTo = (pageName) => {
    this.setState({currentPage: pageName})
  }
  render () {
    return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={()=>{this.navigateTo("map")}}>map</button>
          </li>
        <li>
            <button onClick={()=>{this.navigateTo("profile")}}>profile</button>
          </li>
          <li>
            <button onClick={()=>{this.navigateTo("login")}}>login</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
    {pages[this.state.currentPage]}
    </section>
    </main>
    </>)
  }
}
export default App;
