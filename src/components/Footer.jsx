import React from 'react';
import data from '../data/data';
import Button from '../components/atoms/Button';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';


export const Footer = () => {

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
        <li><FaLinkedin /></li>
        <li><FaGithub /></li>
        <li><FaInstagram /></li>
      </ul>
      </div>
      <div className='buttons'>
        <Button text="DOWNLOAD CV" className='glow'/>
        <Button text={data.about.btn_email} className='email' />
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
