import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './css/Navigation.css';
import logo from './images/logo-sm-white.svg';

class Navigation extends Component {
  render(){
    return (
      <div className='Navigation'>
        <img src={logo} className="nav-logo" alt="logo" />
        <ul className='nav-list'>
          <li className='nav-list-item'><NavLink activeClassName="active" exact to='/'>HOME</NavLink></li>
          <li className='nav-list-item'><NavLink activeClassName="active" to='/about'>ABOUT</NavLink></li>
          <li className='nav-list-item'><NavLink activeClassName="active" to='/blog'>BLOG</NavLink></li>
          <li className='nav-list-item'><NavLink activeClassName="active" to='/tutorials'>TUTORIALS</NavLink></li>
          <li className='nav-list-item'><NavLink activeClassName="active" to='/recipes'>RECIPES</NavLink></li>
          <li className='nav-list-item'><NavLink activeClassName="active" to='/contact'>CONTACT</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
