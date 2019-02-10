import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar'
import Main from './components/Main'
import AppFooter from './components/AppFooter'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <Main/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
