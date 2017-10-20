import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Tutorials from './pages/Tutorials';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className='Content'>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About }  />
          <Route path='/blog' component={ Blog }  />
          <Route path='/tutorials' component={ Tutorials }  />
          <Route path='/recipes' component={ Recipes }  />
          <Route path='/contact' component={ Contact }  />
        </Switch>
      </div>
    );
  }
}

export default Content;
