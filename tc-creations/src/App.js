import React, { Component } from 'react';

import Navigation from './main-components/Navigation';
import Content from './main-components/Content';

import './css/App.css';

import logo from './images/logos/logo-lg-white.svg';

class App extends Component {
  render() {
    return(
      <div id='app-div'>
        <Navigation />
        <Content />
        <div className='logo-foot'>
          <img src={logo} alt='TC Creations'/>
        </div>
      </div>
    );
  }
}

export default App;
