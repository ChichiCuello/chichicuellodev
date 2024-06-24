import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
/* import '../App.css' */

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };
  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };
  return (
    <div className="navbar">
      <a onClick={toggleMenu} className="menu-toggle">
      <IconContext.Provider value={{ size: 32 }}>
        {isMenuOpen ? (
          <FaTimes style={{ color: 'hsl(310, 100%, 24%)' }}/> // X icon for closing the menu
          ) : (
          <FaBars style={{color:'hsl(58, 94%, 44%)'}} /> // Hamburger icon for opening the menu
            )}
          </IconContext.Provider>
      </a>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>  {/* Conditional class for opening/closing */}
        <Link smooth to='/#about' onClick={closeMenu}><li>about</li></Link>
        <Link smooth to='/#projects' onClick={closeMenu}><li>projects</li></Link>
        <Link smooth to='/#skills' onClick={closeMenu}><li>skills</li></Link>
        <Link smooth to='/#contact' onClick={closeMenu}><li>contact</li></Link>
      </ul>
    </div>
  )
}

