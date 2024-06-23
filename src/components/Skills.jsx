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

export const Skills = () => {
  return (
    <div>
      <h2>skills</h2>
      <div>
        <div>
          <div>
            <ul>
              <li><img src={git} alt="" /></li>
              <li><img src={github} alt="" /></li>
            </ul>
          </div>
          <h3>version control</h3>
        </div>
        <div>
          <h3>ux/ui</h3>
          <div>
            <img src={figma} alt="" />
          </div>
        </div>
        <div>
          <div>
            <h3>project managment apps</h3>
            <ul>
              <li><img src={jira} alt="" /></li>
              <li><img src={trello} alt="" /></li>
            </ul>
          </div>
          <div>
            <div>
              <ul>
                <li><img src={html} alt="" /></li>
                <li><img src={css} alt="" /></li>
                <li><img src={js} alt="" /></li>
              </ul>
              <ul>
                <li><img src={react} alt="" /></li>
                <li><img src={tailwind} alt="" /></li>
              </ul>
              <div><h3>frontend</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
