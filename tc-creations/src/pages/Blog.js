import React, { Component } from 'react';

import '../css/Blog.css';

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
          'id':'1',
          'title':'Title One',
          'date':'12/12/2016',
          'img':post1,
          'content':'1asdfghjkl'
        },
        {
          'id':'2',
          'title':'Title Two',
          'date':'12/29/2016',
          'img':post2,
          'content':'2asdfghjkl'
        },
        {
          'id':'3',
          'title':'Title Three',
          'date':'1/15/2017',
          'img':post3,
          'content':'3asdfghjkl'
        },
        {
          'id':'4',
          'title':'Title Four',
          'date':'2/2/2017',
          'img':post4,
          'content':'4asdfghjkl'
        },
        {
          'id':'5',
          'title':'Title Five',
          'date':'2/27/2017',
          'img':post5,
          'content':'5asdfghjkl'
        },
        {
          'id':'6',
          'title':'Title Six',
          'date':'3/18/2017',
          'img':post6,
          'content':'6asdfghjkl'
        },
        {
          'id':'7',
          'title':'Title Seven',
          'date':'4/5/2017',
          'img':post7,
          'content':'7asdfghjkl'
        },
        {
          'id':'8',
          'title':'Title Eight',
          'date':'4/19/2017',
          'img':post8,
          'content':'8asdfghjkl'
        }
      );
    }
    this.state = { blogPosts };
  }
  
  postRender(){
    return [
      <div className='blogPosts'>
        {this.state.blogPosts.map(function(post, i){
          return [
            <div key={i} className='post'>
              <div className='post-title'>{post.title}</div>
              <div className='post-date'>{post.date}</div>
              <img className='post-img' src={post.img} alt='post-image'/>
              <p className='post-content'>{post.content}</p>
            </div>
        ]})}
      </div>
    ];
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
