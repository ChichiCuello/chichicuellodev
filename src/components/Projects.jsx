import React from 'react';
import data from '../data/data';
import Button from './atoms/Button';
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import projectImage_1 from '../assets/images/foco-website.png';
import projectImage_2 from '../assets/images/ods-website.png';
import projectImage_3 from '../assets/images/cf-website.png';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";



export const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <ScrollAnimation animateIn="fadeIn">
      <h2>{data.projects.h2}</h2>
      <div>
        <div className='project'>
          <img src={projectImage_1} alt="this is an image of project one" />
          <div className='info'>
            <p>{data.projects.project_1.p}</p>
            <div className='buttons'>
            <Button text="CODE" className='glow' href= 'https://github.com/ChichiCuello/foco-webapp' target='_blank'/>
            <Button text="Figma" className='glow' href='https://www.figma.com/proto/ze4SOh3C5FPDCsXeqLj11d/foco-app?node-id=1-7&scaling=scale-down-width&content-scaling=fixed&t=qB2nOLgOcmZ6H5qO-1' target='_blank'/>
            </div>
          </div>
          <div className='tech'>
            <ul>
          <li><FaHtml5  style={{ fontSize: '32px' }} /></li>
            <li><FaCss3Alt style={{ fontSize: '32px' }}/></li>
            <li><FaJs style={{ fontSize: '32px' }}/></li>
            </ul>
          </div>
        </div>
        <div className='project'>
          <div className='tech'>
            <ul>
              <li><FaHtml5 style={{ fontSize: '32px' }}/></li>
              <li><FaCss3Alt style={{ fontSize: '32px' }}/></li>
              <li><FaReact style={{ fontSize: '32px' }}/></li>
            </ul>
          </div>
          <div className='info'>
            <p>{data.projects.project_2.p}</p>
            <div className='buttons'>
            <Button text="CODE" className='glow' href= 'https://github.com/ChichiCuello/ods-website' target='_blank'/>
            <Button text="Figma" className='glow' href='https://www.figma.com/design/8y6JUfgqeMBUqSTs2PMZey/ODS?node-id=0-1&t=1GJeixeb0Gh80Qgu-1' target='_blank'/>
            </div>
          </div>
          <img src={projectImage_2}  alt="this is an image of project two" />
        </div>
        <div className='project'>
          <img src={projectImage_3}  alt="this is an image of project three" />
          <div className='info'>
            <p>{data.projects.project_3.p}</p>
            <div className='buttons'>
            <Button text="CODE" className='glow' href= 'https://github.com/ChichiCuello/portfolio-nachi' target='_blank'/>
            <Button text="Figma" className='glow' href='https://www.figma.com/proto/eq0WfGqFcP9FnTQwNUC9t8/web_nacho?node-id=102-2&t=EkPLW2lDUgdz5Q1E-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=102%3A2&show-proto-sidebar=1' target='_blank'/>
            </div>
          </div>
          <div className='tech'>
            <ul>
            <li><FaHtml5 style={{ fontSize: '32px' }}/></li>
            <li><FaCss3Alt style={{ fontSize: '32px' }}/></li>
            <li><FaJs style={{ fontSize: '32px' }}/></li>
            </ul>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}
