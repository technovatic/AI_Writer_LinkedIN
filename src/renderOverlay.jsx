import React from 'react';
import ReactDOM from 'react-dom';
import PlasmoOverlay from './PlasmoOverlay';
import './style.css';

const renderOverlay = () => {
  const existingOverlay = document.getElementById('plasmo-overlay-root');
  
  if (existingOverlay) {
    existingOverlay.remove();
  } else {
    const root = document.createElement('div');
    root.id = 'plasmo-overlay-root';
    document.body.appendChild(root);
    ReactDOM.render(<PlasmoOverlay />, root);
  }
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleOverlay') {
    renderOverlay();
  }
});
