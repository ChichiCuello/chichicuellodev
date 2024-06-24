import React from 'react';
import figma from '../assets/images/figma.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import jira from '../assets/images/jira.png'
import trello from '../assets/images/trello.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export const Skills = () => {
  return (<section className='skills' id='skills'>
    <ScrollAnimation animateIn="fadeIn">
  <h2>skills</h2>
  <div class="parent">
    <div class="div1 tech-stack">
      <div><img src={git} alt="" /></div>
      <div><img src={github} alt="" /></div>
    </div>
    <div class="div2 subtitle"><h4>version control</h4> </div>
    <div class="div3 subtitle"><h4>ux/ui</h4> </div>
    <div class="div4 tech-stack"><div><img src={figma} alt="" /></div></div>
    <div class="div5 subtitle"><h4>project managment apps</h4> </div>
    <div class="div6 tech-stack">
      <div>
        <img src={jira} alt="" /></div>
        <div><img src={trello} alt="" /></div>
        </div>
    <div class="div7 tech-stack">
          <div><img src={html} alt="" /></div>
          <div><img src={css} alt="" /></div>
          <div><img src={js} alt="" /></div>
 </div>
      <div class="div8 subtitle"><h4>frontend</h4> </div>
    <div class="div9 tech-stack">
          <div><img src={react} alt="" /></div>
          <div><img src={tailwind} alt="" /></div>
        </div>
</div>
</ScrollAnimation>
  </section>

  )
}