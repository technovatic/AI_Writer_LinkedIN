// background.js

// Example of background script for LinkedIn AI Reply extension
console.log('Background script loaded');

// Example of event listener to handle extension startup
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'toggleOverlay' });
});


// Example of event listener to handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed');
  console.log('Previous version:', details.previousVersion);
});

// Example of event listener to handle message passing between scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  
  // Example of sending response back to content script
  sendResponse({ status: 'Message received' });
});
