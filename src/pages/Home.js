import React from 'react';
import { Link } from "react-router-dom";
import BadBunny from '../assets/bad-bunny.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BadBunny})` }}>
        <h1>La Gringa Art</h1>
        <p>let's get artsy fartsy</p>
        <Link>
        <button> See ART!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home