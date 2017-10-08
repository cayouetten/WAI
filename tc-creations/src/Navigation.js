import React, { Component } from 'react';
import './Navigation.css';

import logo from './images/logo-sm-white.svg';

class Navigation extends Component {
  render() {
    return (
      <div className='Navigation'>
        <img src={logo} className="nav-logo" alt="logo" />
        <ul className='nav-list'>
          <li className='nav-list-item'><a href="#">HOME</a></li>
          <li className='nav-list-item'><a href="#">ABOUT</a></li>
          <li className='nav-list-item'><a href="#">BLOG</a></li>
          <li className='nav-list-item'><a href="#">TUTORIALS</a></li>
          <li className='nav-list-item'><a href="#">RECIPES</a></li>
          <li className='nav-list-item'><a href="#">CONTACT</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
