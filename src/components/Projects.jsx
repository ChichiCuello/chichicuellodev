import React from 'react';
import data from '../data/data';
import Button from './atoms/Button';
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import projectImage_1 from '../assets/images/foco-website.png';
import projectImage_2 from '../assets/images/ods-website.png';
import projectImage_3 from '../assets/images/cf-website.png';

export const Projects = () => {
  return (
    <div>
      <h2>{data.projects.h2}</h2>
      <div>
        <div>
          <img src={projectImage_1} alt="this is an image of project one" />
          <div>
            <p>{data.projects.project_1.p}</p>
            <Button text="CODE"/>

          </div>
          <div>
            <ul>
            <li><FaHtml5 /></li>
            <li><FaCss3Alt /></li>
            <li><FaJs /></li>
            </ul>
          </div>
        </div>
        <div>
          <img src={projectImage_2}  alt="this is an image of project two" />
          <div>
            <p>{data.projects.project_2.p}</p>
            <Button text="CODE"/>
            <Button text="Figma"/>
          </div>
          <div>
            <ul>
              <li><FaHtml5 /></li>
              <li><FaCss3Alt /></li>
              <li><FaReact /></li>
            </ul>
          </div>
        </div>
        <div>
          <img src={projectImage_3}  alt="this is an image of project three" />
          <div>
            <p>{data.projects.project_3.p}</p>
            <Button text="CODE"/>

          </div>
          <div>
            <ul>
            <li><FaHtml5 /></li>
            <li><FaCss3Alt /></li>
            <li><FaJs /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
