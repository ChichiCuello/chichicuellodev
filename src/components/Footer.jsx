import React from 'react';
import data from '../data/data';
import Button from '../components/atoms/Button';

export const Footer = () => {
  return (
    <div>
      <div>
      <h3>CHICHI CUELLO</h3>
      <ul>
        <li>about</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
      </ul>
      <ul>
        <li>linkedin</li>
        <li>github</li>
        <li>instagram</li>
      </ul>
      </div>
      <div>
        <Button text="DOWNLOAD CV"/>
        <Button text={data.about.btn_email} />
      </div>
      <div>
        <ul><li>english
          </li>
          <li>spanish</li>
          </ul>
      </div>
      <small>@2024 Chichi Cuello</small>
    </div>
  )
}
