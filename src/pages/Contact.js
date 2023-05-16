import React from 'react';
import Arnette from '../assets/arnette-armadillo.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
            style={{ backgroundImage: `url(${Arnette})` }}
        ></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>
            <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
        </div>
    </div>
  )
}

export default Contact