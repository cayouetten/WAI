import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import logo from './images/logo-sm-white.svg';

class Navigation extends Component {
  render(){
    return (
      <div className='Navigation'>
        <img src={logo} className="nav-logo" alt="logo" />
        <ul className='nav-list'>
          <li className='nav-list-item'><Link to='/'>HOME</Link></li>
          <li className='nav-list-item'><Link to='/about'>ABOUT</Link></li>
          <li className='nav-list-item'><Link to='/blog'>BLOG</Link></li>
          <li className='nav-list-item'><Link to='/tutorials'>TUTORIALS</Link></li>
          <li className='nav-list-item'><Link to='/recipes'>RECIPES</Link></li>
          <li className='nav-list-item'><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
