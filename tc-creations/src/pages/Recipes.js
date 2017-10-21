import React, { Component } from 'react';

import '../css/App.css';
import '../css/pages/Recipes.css';

import more from '../images/icons/full-article-view.svg';
import exit from '../images/icons/mobile-nav-exit.svg';

import post1 from '../images/recipes/1post.jpg';
import post2 from '../images/recipes/2post.jpg';
import post3 from '../images/recipes/3post.jpg';
import post4 from '../images/recipes/4post.jpg';
import post5 from '../images/recipes/5post.jpg';
import post6 from '../images/recipes/6post.jpg';
import post7 from '../images/recipes/7post.jpg';
import post8 from '../images/recipes/8post.jpg';
import post9 from '../images/recipes/9post.jpg';

class Recipes extends Component {
  constructor(props){
    super(props);
    const recipesPosts = [];
    for(let i=0; i<1; i++){
      recipesPosts.push(
        {
          'id':'0',
          'title':'Recipe One',
          'level':'Advanced',
          'time':'~ 4 hours',
          'img':post1,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps': [
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.',
            '5. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing.'
          ]
        },
        {
          'id':'1',
          'title':'Recipe Two',
          'level':'Novice',
          'time':'~ 2 hours',
          'img':post2,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.'
          ]
        },
        {
          'id':'2',
          'title':'Recipe Three',
          'level':'Advanced',
          'time':'~ 5 hours',
          'img':post3,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing',
            '- 1 Hanging out of own butt'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.',
            '5. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing.',
            '6. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.'
          ]
        },
        {
          'id':'3',
          'title':'Recipe Four',
          'level':'Intermediate',
          'time':'~ 3 hours',
          'img':post4,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.',
            '5. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing.'
          ]
        },
        {
          'id':'4',
          'title':'Recipe Five',
          'level':'Advanced',
          'time':'~ 1 hours',
          'img':post5,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing',
            '- 1 Hanging out of own butt'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.'
          ]
        },
        {
          'id':'5',
          'title':'Recipe Six',
          'level':'Novice',
          'time':'~ 6 hours',
          'img':post6,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.'
          ]
        },
        {
          'id':'6',
          'title':'Recipe Seven',
          'level':'Intermediate',
          'time':'~ 4 hours',
          'img':post7,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.'
          ]
        },
        {
          'id':'7',
          'title':'Recipe Eight',
          'level':'Intermediate',
          'time':'~ 3 hours',
          'img':post8,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing',
            '- 1 Hanging out of own butt'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.',
            '5. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing.'
          ]
        },
        {
          'id':'8',
          'title':'Recipe Nine',
          'level':'Intermediate',
          'time':'~ 3 hours',
          'img':post9,
          'cal': '350 cal',
          'ingredients': [
            '- 3 Cat ipsum dolor sit amet',
            '- 5 Find empty spot in cupboard',
            '- 2 Top of tall thing',
            '- 1 Hanging out of own butt'
          ],
          'caption':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'steps':[
            '1. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '2. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.',
            '3. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away.',
            '4. Tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top.',
            '5. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing.'
          ]
        }
      );
    }
    this.state = {
      recipesPosts,
      windowWidth: window.innerWidth,
      fullArticle: {
        view: false,
        articleId: ''
      }
    };
  }
  
  handleResize(){
    this.setState({ windowWidth: window.innerWidth });
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  componentWillUnmount(){
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  articleRender(id){
    this.setState({
      fullArticle: {
        view: true,
        articleId: {id}
      }
    });
  }
  
  exitFullArticle(){
    this.setState({
      fullArticle: {
        view: false,
        articleId: ''
      }
    });
  }
  
  postRender(){
    if(this.state.fullArticle.articleId === ''){
      if(this.state.windowWidth < 800){
        return (
          <div className='recipes-list'>
            {this.state.recipesPosts.map(function(post, i){
              return(
                <div key={i} className='recipes-list-post' onClick={this.articleRender.bind(this, i)}>
                  <div className='recipes-list-title'>{post.title}</div>
                  <img className='recipes-list-img' src={post.img} alt='post'/>
                  <div className='recipes-list-detail'>
                    <div className='recipes-list-time'>{post.time}</div>
                    <div className='hr'>|</div>
                    <div className='recipes-list-cal'>{post.cal}</div>
                    <div className='hr'>|</div>
                    <div className='recipes-list-level'>{post.level}</div>
                  </div>
                  <div className='recipes-list-caption'>{post.caption}</div>
                  <img className='recipes-button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
                </div>
              );
            }, this)}
          </div>
        );
      } else {
        return (
          <div className='recipes-list'>
            {this.state.recipesPosts.map(function(post, i){
              return(
                <div key={i} className='recipes-list-post' onClick={this.articleRender.bind(this, i)}>
                  <div className='recipes-list-title'>{post.title}</div>
                  <img className='recipes-list-img' src={post.img} alt='post'/>
                  <div className='recipes-list-detail'>
                    <div className='recipes-list-time'>{post.time}</div>
                    <div className='hr'>|</div>
                    <div className='recipes-list-cal'>{post.cal}</div>
                    <div className='hr'>|</div>
                    <div className='recipes-list-level'>{post.level}</div>
                  </div>
                  <div className='recipes-list-caption'>{post.caption}</div>
                  <img className='recipes-button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
                </div>
              );
            }, this)}
          </div>
        );
      }
    } else {
      var id = this.state.fullArticle.articleId.id;
      var post = this.state.recipesPosts[id];
      var ingredients =[];
      var steps = [];

      if(this.state.windowWidth < 800){
        return (
          <div className='recipes-single'>
            <div className='recipes-single-post'>
              <div className='recipes-single-title'>{post.title}</div>
              <img className='recipes-single-img' src={post.img} alt='post'/>
              <div className='recipes-single-detail'>
                <div className='recipes-single-time'>{post.time}</div>
                <div className='hr'>|</div>
                <div className='recipes-single-cal'>{post.cal}</div>
                <div className='hr'>|</div>
                <div className='recipes-single-level'>{post.level}</div>
              </div>
              
                {this.state.recipesPosts.map(function(p, i){
                  for(var n=0; n<p.ingredients.length; n++){
                    if(p.id == id){
                      ingredients.push(p.ingredients[n]);
                    }
                  }
                  for(var n=0; n<p.steps.length; n++){
                    if(p.id == id){
                      steps.push(p.steps[n]);
                    }
                  }          
                }, this)}
                <div className='recipes-single-ingredients'>Ingredients: {ingredients}</div>
                <div className='recipes-single-content'>{steps}</div> 
      
              <img className='recipes-single-button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
            </div>
          </div>
        );
      } else {
        var style= { backgroundImage: 'url('+post.img+')'}
        return (
          <div className='recipes-single' style={style}>
            <div className='recipes-single-post' >
              <div className='recipes-single-title'>{post.title}</div>
              <div className='recipes-single-detail'>
                <div className='recipes-single-time'>{post.time}</div>
                <div className='hr'>|</div>
                <div className='recipes-single-cal'>{post.cal}</div>
                <div className='hr'>|</div>
                <div className='recipes-single-level'>{post.level}</div>
              </div>
                
                {this.state.recipesPosts.map(function(p, i){
                  for(var n=0; n<p.ingredients.length; n++){
                    if(p.id == id){
                      ingredients.push(p.ingredients[n]);
                    }
                  }
                  for(var n=0; n<p.steps.length; n++){
                    if(p.id == id){
                      steps.push(p.steps[n]);
                    }
                  }          
                }, this)}
                <div className='recipes-single-ingredients'>Ingredients: {ingredients}</div>
                <div className='recipes-single-content'>{steps}</div> 

              <img className='recipes-single-button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
            </div>
          </div>
        );
      }
    }
  }
  
  render(){
    return (
      <div className='Recipes'>
        <div id='recipes-title'>
          RECIPES
        </div>
        {this.postRender()}
      </div>
    );
  }
}

export default Recipes;
