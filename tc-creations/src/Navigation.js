import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './css/Navigation.css';
import logo from './images/logo-sm-white.svg';
import menu from './images/mobile-nav-icon.svg';
import exit from './images/mobile-nav-exit.svg';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }
  
  handleResize(){
    this.setState({
      windowWidth: window.innerWidth
    });
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  componentWillUnmount(){
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  navigationLinks(){
    return [
      <ul className='nav-links-list'>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} exact to='/'>HOME</NavLink></li>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} to='/about'>ABOUT</NavLink></li>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} to='/blog'>BLOG</NavLink></li>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} to='/tutorials'>TUTORIALS</NavLink></li>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} to='/recipes'>RECIPES</NavLink></li>
        <li><NavLink activeClassName='active' onClick={this.handleNavClick.bind(this)} to='/contact'>CONTACT</NavLink></li>
      </ul>
    ];
  }
  
  mobileNavRender(){
    if(this.state.mobileNavVisible){
      return this.navigationLinks();
    }
  }
  
  handleNavClick(){
    if(!this.state.mobileNavVisible){
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }
  
  mobileButtonToggle(){
    if(!this.state.mobileNavVisible){
      return <img src={menu} onClick={this.handleNavClick.bind(this)} className='nav-menu' alt='menu' />
    } else {
      return <img src={exit} onClick={this.handleNavClick.bind(this)} className='nav-menu' alt='exit' />
    }
  }
  
  navigationLinksRender(){
    if(this.state.windowWidth < 800){
      return [
        <div className='nav-mobile'>
          {this.mobileButtonToggle()}
          {this.mobileNavRender()}
        </div>
      ];
    } else {
      return [
        <div className='nav-web'>
          {this.navigationLinks()}
        </div>
      ];
    }
  }
  
  render(){
    return (
      <div className='Navigation'>
        <img src={logo} className='nav-logo' alt='logo' />
        {this.navigationLinksRender()}
      </div>
    );
  }
}

export default Navigation;
