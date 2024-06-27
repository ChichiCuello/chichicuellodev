import React from 'react';
import Button from '../components/atoms/Button';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import Email from './atoms/Email'


export const Footer = () => {
  const email = 'chichicuellodev@gmail.com';

  return (
    <section id='footer' className='footer'>
      <div className='row'>
      <div>
      <h3 className='title'><span aria-hidden='true'>chichi</span>chichi</h3><br />
      <h3 className='title'><span aria-hidden='true'>cuello</span>cuello</h3>
      </div>
      <ul>
      <Link smooth to='/#about'><li>about</li></Link>
      <Link smooth to='/#projects'><li>projects</li></Link>
      <Link smooth to='/#skills'><li>skills</li></Link>
      <Link smooth to='/#contact'><li>contact</li></Link>
      </ul>
      <ul>
      <li><a href="https://www.linkedin.com/in/maria-agustina-cuello/?locale=en_US" target='_blank'><FaLinkedin /></a></li>
        <li><a href="https://github.com/ChichiCuello" target='_blank'><FaGithub  /></a></li>
        <li><a href="https://www.instagram.com/chichicuellodev/" target='_blank'><FaInstagram /></a></li>
      </ul>
      </div>
      <div className='buttons'>
        <Button text="DOWNLOAD CV" className='glow'/>
        <Email email={email} />
      </div>
      <div className='lang'>
        <ul><li>english
          </li>
          <li>spanish</li>
          </ul>
      </div>
      <small>@2024 Chichi Cuello</small>
    </section>
  )
}
