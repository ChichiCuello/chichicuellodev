import React from 'react';
import data from '../data/data';
import Button from './atoms/Button';

export const Projects = () => {
  return (
    <div>
      <h2>{data.projects.h2}</h2>
      <div>
        <div>
          <img src="" alt="this is an image of project one" />
          <div>
            <p>{data.projects.project_1.p}</p>
            <Button text="CODE"/>

          </div>
          <div>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>Js</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="" alt="this is an image of project two" />
          <div>
            <p>{data.projects.project_2.p}</p>
            <Button text="CODE"/>
            <Button text="Figma"/>
          </div>
          <div>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>React.Js</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="" alt="this is an image of project three" />
          <div>
            <p>{data.projects.project_3.p}</p>
            <Button text="CODE"/>

          </div>
          <div>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
