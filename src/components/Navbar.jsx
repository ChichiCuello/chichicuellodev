import React from 'react'
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div>
      <FaBars />
      <ul>
        <li>about</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
      <div>
        logo to change the language
      </div>
    </div>
  )
}
