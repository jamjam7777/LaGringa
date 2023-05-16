import React from 'react';
import { Link } from "react-router-dom";
import BadBunny from '../assets/bad-bunny.jpg';
import '../styles/Home.css';
import { motion } from "framer-motion";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BadBunny})` }}>
      <div className='headerContainer'>
        <h1>La Gringa Art</h1>
        <p>let's get artsy fartsy</p>
        <Link to='/art'>
          <div className='buttonContainer'>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} /> 
        <button> See ART!</button>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Home;