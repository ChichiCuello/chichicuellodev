import React from 'react';
import Button from './atoms/Button'

export const Contact = () => {
  return (
    <div>
      <h2>contact</h2>
      <p>feel free to contact me below if you have any questions, or email me at chichicuellodev@gmail.com</p>
      <form>
        <label htmlFor="name"> name
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email"> email
        </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message"> leave me a message
        </label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">SEND</button>
      </form>
      <div>
        <ul>
          <li>linkedin</li>
          <li>instagram</li>
          <li>github</li>
        </ul>
      </div>
      <Button text="DOWNLOAD CV"/>
    </div>
  )
}