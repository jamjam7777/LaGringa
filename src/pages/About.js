import React from 'react';
import collage from '../assets/IMG_0076-COLLAGE.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${collage})` }}
        ></div>
        <div className='aboutBottom'>
        <h1> About la Gringa Loca </h1>
        <p>I am a crazy artsy fartsy artist. I LOVE color and using colors in different ways. The name of this shop, The Gringa Loca was inspired by my childhood nickname, "the crazy foreigner". I was raised near the ocean in Chile, as an adult moved to the mountains of Colorado USA, and now my home is in Houston, Texas. I love using my past experiences to create colorful works of art for your home! I am inspired by this colorful world and everything in it. I paint according to my mood and what I feel inspired to do in that moment. When in doubt, add more color to your life! I live in a house with an atrium filled with plants and frogs and a hammock, a husband, a baby, two dogs, and 30 fishes.</p>
        </div>
    </div>
  );
}

export default About;