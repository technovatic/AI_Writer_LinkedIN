// content.js

// Function to handle showing the AI icon when LinkedIn message input is focused
const handleInputFocus = () => {
    const inputField = document.querySelector('input[type="text"]');
    if (inputField) {
      inputField.addEventListener('focus', () => {
        // Logic to show the AI icon
        const aiIcon = document.createElement('img');
        aiIcon.src = chrome.extension.getURL('ai-icon.png');
        aiIcon.alt = 'AI Icon';
        aiIcon.classList.add('ai-icon');
        
        // Append AI icon to the input field or parent container
        inputField.parentNode.appendChild(aiIcon);
        
        // Event listener for clicking the AI icon
        aiIcon.addEventListener('click', handleIconClick);
      });
      
      inputField.addEventListener('blur', () => {
        // Logic to hide the AI icon
        const aiIcon = document.querySelector('.ai-icon');
        if (aiIcon) {
          aiIcon.parentNode.removeChild(aiIcon);
        }
      });
    }
  };
  
  // Function to handle AI icon click (show modal)
  const handleIconClick = () => {
    // Logic to show modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Example modal content (replace with your modal structure)
    modal.innerHTML = `
      <div class="modal-content">
        <input type="text" id="command-input" placeholder="Enter your command...">
        <button id="generate-btn">Generate</button>
        <button id="insert-btn">Insert</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listener for closing modal by clicking outside
    document.addEventListener('click', (event) => {
      if (!modal.contains(event.target)) {
        modal.parentNode.removeChild(modal);
      }
    });
    
    // Event listener for Generate button
    document.getElementById('generate-btn').addEventListener('click', () => {
      const response = 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.';
      // Display response or perform desired action
      console.log(response);
    });
    
    // Event listener for Insert button
    document.getElementById('insert-btn').addEventListener('click', () => {
      const commandInput = document.getElementById('command-input');
      if (commandInput) {
        const message = commandInput.value;
        // Insert message into LinkedIn message input field
        const inputField = document.querySelector('input[type="text"]');
        if (inputField) {
          inputField.value = message;
          // Close modal after inserting message
          modal.parentNode.removeChild(modal);
        }
      }
    });
  };
  
  // Initialize function
  const init = () => {
    handleInputFocus();
  };
  
  // Run initialization
  init();
  