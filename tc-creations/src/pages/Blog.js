import React, { Component } from 'react';

import '../css/Blog.css';

import more from '../images/full-article-view.svg';
import exit from '../images/mobile-nav-exit.svg';

import post1 from '../images/blog/1post-500.jpg';
import post2 from '../images/blog/2post-500.jpg';
import post3 from '../images/blog/3post-500.jpg';
import post4 from '../images/blog/4post-500.jpg';
import post5 from '../images/blog/5post-500.jpg';
import post6 from '../images/blog/6post-500.jpg';
import post7 from '../images/blog/7post-500.jpg';
import post8 from '../images/blog/8post-500.jpg';

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
        return (
          <div className='blog-posts'>
            {this.state.blogPosts.map(function(post, i){
              return(
                <div key={i} className='post' onClick={this.articleRender.bind(this, i)}>
                  <div className='post-title'>{post.title}</div>
                  <div className='post-date'>{post.date}</div>
                  <img className='post-img' src={post.img} alt='post'/>
                  <p className='post-content'>{post.content}</p>
                  <img className='button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
                </div>
              );
            }, this)}
          </div>
        );
      } else {
        return (
          <div className='blog-posts'>
            {this.state.blogPosts.map(function(post, i){
              return(
                <div key={i} className='post' onClick={this.articleRender.bind(this, i)}>
                  <img className='post-img' src={post.img} alt='post'/>
                  <div className='post-content-group'>
                    <div className='post-title'>{post.title}</div>
                    <div className='post-date'>{post.date}</div>
                    <p className='post-content'>{post.content}</p>
                    <img className='button-img' onClick={this.articleRender.bind(this, i)} src={more} alt='more'/>
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
        return (
          <div className='blog-posts'>
            <div className='post full-post'>
              <div className='post-title'>{post.title}</div>
              <div className='post-date'>{post.date}</div>
              <img className='post-img' src={post.img} alt='post'/>
              <p className='post-content'>{post.fullContent}</p>
              <img className='button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
            </div>
          </div>
        );
      } else {
        var style= { backgroundImage: 'url('+post.img+')'}
        return (
          <div className='blog-posts' style={style}>
            <div className='post full-post web' >
              <div className='post-content-group pcg-full'>
                <div className='post-title'>{post.title}</div>
                <div className='post-date'>{post.date}</div>
                <p className='post-content'>{post.fullContent}</p>
                <img className='button-img' onClick={this.exitFullArticle.bind(this)} src={exit} alt='close'/>
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
