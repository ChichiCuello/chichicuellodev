import React, {useState} from 'react';
import Button from './atoms/Button'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

/* import PopupModal from'./PopupModal'; */


export const Contact = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [errors, setErrors] = useState({}); // State for form errors

const handleSubmit = (e) =>{
  e.preventDefault();
  if (validateForm()){
    clearForm();
    console.log('form submited');
    /* setIsModalOpen(true); */
    alert('Form submitted');
  }
}

const clearForm = () =>{
  setName("");
  setEmail("");
  setMessage("");
  setErrors({});
}
/*
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
}; */

const validateForm = () =>{
  const errors = {};
  if(!name) {
    errors.name = 'Name is required';
  };
  if(!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)){
    errors.email = " Invalid email format";
  };
  if(!message) {
    errors.message = 'A message is required';
  };
  setErrors(errors);
  return Object.keys(errors).length === 0;
};

const isValidEmail = (email) =>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

  return (
    <section id='contact' className='contact'>
       <ScrollAnimation animateIn="fadeIn">
      <h2>contact</h2>
      <p>feel free to contact me below if you have any questions, or email me at chichicuellodev@gmail.com</p>
      <form className='form' onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name"> name
        </label>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email"> email </label>
          <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message"> leave me a message
          </label>
          <textarea name="message" id="message" value={message} onChange={(e) => { setMessage(e.target.value)}}></textarea></div>
          {errors.message && <span className='error'>{errors.message}</span>}
        <Button type="submit" text='SEND' /* onClick={openModal} */ className='glow' />
      </form>
      {/* {isModalOpen && <PopupModal isOpen={isModalOpen} onClose={closeModal} />} */}
      <div>
      <div className='socials'>
        <ul>
        <li><a href="https://www.linkedin.com/in/maria-agustina-cuello/?locale=en_US" target='_blank'><FaLinkedin style={{fontSize:'32'}}/></a></li>
        <li><a href="https://github.com/ChichiCuello" target='_blank'><FaGithub style={{fontSize:'32'}} /></a></li>
        <li><a href="https://www.instagram.com/chichicuellodev/" target='_blank'><FaInstagram style={{fontSize:'32'}} /></a></li>
        </ul>
        <Button text="DOWNLOAD CV" className='glow'/>
      </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}
