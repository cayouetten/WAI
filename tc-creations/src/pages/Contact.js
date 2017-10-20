import React, { Component } from 'react';

import '../css/Contact.css';

class Contact extends Component {
  submitPress(){
    window.alert('Sent!');  
  }
  
  render() {
    return (
      <div className='Contact'>
        <div id='contact-title'>
          CONTACT
        </div>
        <div id='contact-content'>
          <h1>Get in touch with Tammy</h1>
          <h2>Advice, questions, and feedback of all kinds are welcome!</h2>
      
          <form id='contact-form' action='#' /*method='POST'*/ enctype='multipart/form-data'>
            <div id='web-inputs'>
              <label for='name'></label>
              <input id='name' name='name' type='text' placeholder='Full Name' />

              <label for='email'></label>
              <input id='email' name='email' type='text' placeholder='Email' />
            </div>

            <label for='message'></label>
            <textarea id='message' name='message' type='textarea' placeholder='Message'></textarea>
            
            <input id='submit-button' type='submit' value='Send' onClick={this.submitPress} />
          </form>
      
          <h2>I look forward to hearing from you!</h2>
        </div>
      </div>
    );
  }
}

export default Contact;
