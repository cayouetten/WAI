import React, { Component } from 'react';

import './css/Footer.css';

import logo from './images/logo-lg-white.svg';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <img src={logo} className='logo' alt='logo'/>
      </div>
    );
  }
}

export default Footer;
