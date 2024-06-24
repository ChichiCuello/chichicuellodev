import React from 'react';
import data from '../data/data';
import Button from '../components/atoms/Button';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <div className='row'>
      <div>
      <h3 className='title'><span aria-hidden='true'>chichi</span>chichi</h3><br />
      <h3 className='title'><span aria-hidden='true'>cuello</span>cuello</h3>
      </div>
      <ul>
        <li>about</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
      <ul>
        <li><FaLinkedin /></li>
        <li><FaGithub /></li>
        <li><FaInstagram /></li>
      </ul>
      </div>
      <div className='buttons'>
        <Button text="DOWNLOAD CV"/>
        <Button text={data.about.btn_email} />
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
