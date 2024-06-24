import React from 'react';
import copyIcon from '../../assets/icons/copy.svg';

const copyText = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied to clipboard: ' + text);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
};

const Email = ({ email }) => {
  return (
    <div className="email">
      {email} <img src={copyIcon} alt="Copy Icon" onClick={() => copyText(email)}/>
    </div>
  );
};

export default Email;
