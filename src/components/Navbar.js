import React from 'react';
import Logo from '../assets/gringalogo.png';
import { Link } from 'react-router-dom';
import Reorder from '../assets/reorder.png';

import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
    <div className='leftSide'>
    <img src={Logo} />
    </div>
    <div className='rightSide'></div>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <button>
        <img src={Reorder} />
        </button>
    </div>
  )
}

export default Navbar