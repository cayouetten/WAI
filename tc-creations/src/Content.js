import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Tutorials from './Tutorials';
import Recipes from './Recipes';
import Contact from './Contact';

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
