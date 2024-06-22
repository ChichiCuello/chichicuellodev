import React from 'react';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
