import React, { useState} from 'react';
import Logo from '../assets/gringalogo.png';
import { Link } from 'react-router-dom';
import Reorder from '../assets/reorder.png';
import '../styles/Navbar.css';


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };

  return (
    <div className='navbar'>
    <div className='leftSide' id={openLinks ? 'open' : 'close'}>
    <img src={Logo} />
    <div className='hiddenLinks'>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
    </div>
    </div>
    <div className='rightSide'>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <button onClick={toggleNavbar}>
        <img src={Reorder} />
        </button>
        </div>
    </div>
  )
}

export default Navbar