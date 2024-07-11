import React from 'react';
import ReactDOM from 'react-dom';
import LinkedInMessage from './components/LinkedInIcon';
import './style.css'; // Ensure Tailwind CSS is imported

const Content = () => {
  return (
    <div className="content">
      <LinkedInMessage />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Content />, root);
