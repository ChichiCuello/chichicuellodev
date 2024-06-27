import React from 'react';
import './button.css'

const Button = ({ text, onClick, type = 'button', className = '', href , target}) => {
  return (
    <a type={type} className={`button ${className}`} onClick={onClick} href={href} target={target}>
      {text}
    </a>
  );
};

export default Button;
