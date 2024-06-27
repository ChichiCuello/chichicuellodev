import React from 'react';
import data from '../data/data';
import Button from './atoms/Button';
import Email from './atoms/Email';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export const About = () => {
  const email = 'chichicuellodev@gmail.com';
  return (
    <section id='about' className='about'>
      <ScrollAnimation animateIn="fadeIn">
      <h2>{data.about.h2}</h2>
      <p>{data.about.p_1}</p>
      <p>{data.about.p_2}</p>
      <div className='buttons-about'>
      <Button text="DOWNLOAD CV" className='glow'/>
      <Email email={email}/>
      </div>
      </ScrollAnimation>
    </section>
  )
}
