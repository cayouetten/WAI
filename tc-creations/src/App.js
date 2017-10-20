import React, { Component } from 'react';

import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

import './css/App.css';

class App extends Component {
  render() {
    return(
      <div id='app-div'>
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
