import React from 'react'
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from 'react-icons/fa';
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
        <li>about</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

