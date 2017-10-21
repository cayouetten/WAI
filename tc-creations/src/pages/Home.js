import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/App.css';
import '../css/pages/Home.css';

import logo from '../images/logos/logo-lg-white.svg';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth: window.innerWidth
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
  
  homeMobileLinks(){
    return [
      <div>
        <div className='block' id='home-block'>
          <img src={logo} id='home-logo' alt='logo' />
        </div>
        <div className='block' id='about-block'>
          <NavLink className='home-nav-link' to='/about'>ABOUT</NavLink>
        </div>
        <div className='block' id='blog-block'>
          <NavLink className='home-nav-link' to='/blog'>BLOG</NavLink>
        </div>
        <div className='block' id='tutorials-block'>
          <NavLink className='home-nav-link' to='/tutorials'>TUTORIALS</NavLink>
        </div>
        <div className='block' id='recipes-block'>
          <NavLink className='home-nav-link' to='/recipes'>RECIPES</NavLink>
        </div>
        <div className='block' id='contact-block'>
          <NavLink className='home-nav-link' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    ];
  }
  
  homeWebLinks(){
    return [
      <div>
        <div id='home-blog-tutorials'>
          <div className='block' id='home-block'>
            <img src={logo} id='home-logo' alt='logo' />
            <div className='home-caption' id='home-cap'>
              <p className='home'>Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own sit amet, scratch at the door then walk away.</p>
            </div>
          </div>
          <div id='blog-tutorials'>
            <div className='block' id='blog-block'>
              <NavLink className='home-nav-link' id='blog-link' to='/blog'>BLOG</NavLink>
              <div className='home-caption' id='blog-cap'>
                Cat ipsum dolor sit amet.
              </div>
            </div>
            <div className='block' id='tutorials-block'>
              <div className='home-caption' id='tutorials-cap'>
                Cat ipsum dolor at the door then walk away.
              </div>
              <NavLink className='home-nav-link' id='tutorials-link' to='/tutorials'>TUTORIALS</NavLink>
            </div>
          </div>
        </div>
        <div id='about-contact-recipes'>
          <div id='about-contact'>
            <div className='block' id='about-block'>
              <div className='home-caption' id='about-cap'>
                Scratch at the door then walk away.
              </div>
              <NavLink className='home-nav-link' id='about-link' to='/about'>ABOUT</NavLink>
            </div>
            <div className='block' id='contact-block'>
              <NavLink className='home-nav-link' id='contact-link' to='/contact'>CONTACT</NavLink>
              <div className='home-caption' id='contact-cap'>
                Dolor sit amet, scratch then walk away.
              </div>
            </div>
          </div>
          <div className='block' id='recipes-block'>
            <div className='home-caption' id='recipes-cap'>
              Cat ipsum sit amet, scratch at the door.
            </div>
            <NavLink className='home-nav-link' id='recipes-link' to='/recipes'>RECIPES</NavLink>
          </div>
        </div>
      </div>
    ];
  }
  
  homeRender(){
    if(this.state.windowWidth < 800){
      return [
        <div className='home-mobile'>
          {this.homeMobileLinks()}
        </div>
      ];
    } else {
      return [
        <div className='home-web'>
          {this.homeWebLinks()}
        </div>
      ];
    }
  }
  
  render(){
    return (
      <div className='Home'>
        {this.homeRender()}
      </div>
    );
  }
}

export default Home;
