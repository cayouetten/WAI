import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TC Creations</h1>
        </header>

        <Navigation/>

        <p className="App-intro">
          "To get started, edit <code>src/App.js</code> and save to reload."
        </p>
      </div>
    );
  }
}

export default App;
