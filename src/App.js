import './App.css';
import React from 'react';

import Login from "./Components/login/Login"
import Map from "./Components/map/Map"
import Profile from "./Components/profile/Profile"

class App extends React.Component {
  
  state = {
    currentPage: "login"
  }
  
  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  handleFormSubmit = () => {
    console.log(this.state.currentPage)
    this.navigateTo("map");
      }

 PAGES = {
    "login": <Login onSubmit = {this.handleFormSubmit}/>,
    "map": <Map/>,
    "profile": <Profile/>
  }

  render () {
    const {PAGES} = this;

    return <>
    <header>
      <nav>
        <ul>
          <li>
           <button onClick = {() => { this.navigateTo("login")}}>Login</button>
          </li>
          <li>
           <button onClick = {() => { this.navigateTo("map")}}>Map</button>
          </li>
          <li>
           <button onClick = {() => { this.navigateTo("profile")}}>Profile</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </>
  }
}

export default App;
