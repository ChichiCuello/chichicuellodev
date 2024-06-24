import React from 'react';
import data from '../data/data';
import Button from './atoms/Button';
import Email from './atoms/Email'


export const About = () => {
  const email = 'chichicuellodev@gmail.com';
  return (
    <section id='about' className='about'>
      <h2>{data.about.h2}</h2>
      <p>{data.about.p_1}</p>
      <p>{data.about.p_2}</p>
      <Button text="DOWNLOAD CV" className='glow'/>
      {/* <Button text={data.about.btn_email} /> */}
      <Email email={email} />
    </section>
  )
}
