import React, { Component } from 'react';

import '../css/App.css';
import '../css/pages/Blog.css';

import more from '../images/icons/full-article-view.svg';
import exit from '../images/icons/mobile-nav-exit.svg';

import post1 from '../images/blog/1post.jpg';
import post2 from '../images/blog/2post.jpg';
import post3 from '../images/blog/3post.jpg';
import post4 from '../images/blog/4post.jpg';
import post5 from '../images/blog/5post.jpg';
import post6 from '../images/blog/6post.jpg';
import post7 from '../images/blog/7post.jpg';
import post8 from '../images/blog/8post.jpg';
import post9 from '../images/blog/9post.jpg';

class Blog extends Component {
  constructor(props){
    super(props);
    const blogPosts = [];
    for(let i=0; i<1; i++){
      blogPosts.push(
        {
          'id':'0',
          'title':'Title One',
          'date':'12/12/2016',
          'img':post1,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'1',
          'title':'Title Two',
          'date':'12/29/2016',
          'img':post2,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'2',
          'title':'Title Three',
          'date':'1/15/2017',
          'img':post3,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'3',
          'title':'Title Four',
          'date':'2/2/2017',
          'img':post4,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'4',
          'title':'Title Five',
          'date':'2/27/2017',
          'img':post5,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'5',
          'title':'Title Six',
          'date':'3/18/2017',
          'img':post6,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'6',
          'title':'Title Seven',
          'date':'4/5/2017',
          'img':post7,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'7',
          'title':'Title Eight',
          'date':'4/19/2017',
          'img':post8,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        },
        {
          'id':'8',
          'title':'Title Nine',
          'date':'5/4/2017',
          'img':post9,
          'content':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away...',
          'fullContent':'Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and on top of tall thing. Cat ipsum dolor sit amet, scratch at the door then walk away. Lick yarn hanging out of own butt find empty spot in cupboard and sleep all day howl on top of tall thing.'
        }
      );
    }
    this.state = {
      blogPosts,
      windowWidth: window.innerWidth,
      fullArticle: {
        view: false,
        articleId: '',
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
        //Mobile List
        return (
          <div className='blog-list'>
            {this.state.blogPosts.map(function(post, i){
              return(
                <div key={i} className='blog-list-post' onClick={this.articleRender.bind(this, i)}>
                  <div className='blog-list-title'>{post.title}</div>
                  <div className='blog-list-date'>{post.date}</div>
                  <img className='blog-list-img' src={post.img} alt='post'/>
                  <p className='blog-list-content'>{post.content}</p>
                  <img className='blog-button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
                </div>
              );
            }, this)}
          </div>
        );
      } else {
        //Web List
        return (
          <div className='blog-list'>
            {this.state.blogPosts.map(function(post, i){
              return(
                <div key={i} className='blog-list-post' onClick={this.articleRender.bind(this, i)}>
                  <img className='blog-list-img' src={post.img} alt='post'/>
                  <div className='blog-list-detail'>
                    <div className='blog-list-title'>{post.title}</div>
                    <div className='blog-list-date'>{post.date}</div>
                    <p className='blog-list-content'>{post.content}</p>
                    <img className='blog-button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
                  </div>
                </div>
              );
            }, this)}
          </div>
        );
      }
    } else {
      var id = this.state.fullArticle.articleId.id;
      var post = this.state.blogPosts[id];
      
      if(this.state.windowWidth < 800){
        //Mobile Single
        return (
          <div className='blog-single'>
            <div className='blog-single-post'>
              <div className='blog-list-title'>{post.title}</div>
              <div className='blog-list-date'>{post.date}</div>
              <img className='blog-list-img' src={post.img} alt='post'/>
              <p className='blog-list-content'>{post.fullContent}</p>
              <img className='blog-button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
            </div>
          </div>
        );
      } else {
        //Web Single
        var style= { backgroundImage: 'url('+post.img+')'}
        return (
          <div className='blog-single' style={style}>
            <div className='blog-single-post'>
              <div className='blog-single-detail'>
                <div className='blog-single-title'>{post.title}</div>
                <div className='blog-single-date'>{post.date}</div>
                <p className='blog-single-content'>{post.fullContent}</p>
                <img className='blog-button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  
  render(){
    return (
      <div className='Blog'>
        <div id='blog-title'>
          BLOG
        </div>
        {this.postRender()}
      </div>
    );
  }
}

export default Blog;
