import React from 'react';
import ReactDOM from 'react-dom';
import PlasmoOverlay from './PlasmoOverlay';
import './style.css'; // Ensure Tailwind CSS is imported

const renderOverlay = () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<PlasmoOverlay />, root);
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleOverlay') {
    renderOverlay();
  }
});
