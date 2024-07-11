import React, { useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import Frame from './Frame.png';

const LinkedInIcon: React.FC = () => {
  const iconRef = useRef<HTMLDivElement>(null); // Reference for the LinkedIn icon
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility
  const [inputText, setInputText] = useState(''); // State to store user input
  const [generatedText, setGeneratedText] = useState(''); // State to store generated text
  const [blueText, setBlueText] = useState(''); // State to store the text to be highlighted in blue

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal and reset input states
  const closeModal = () => {
    setModalIsOpen(false);
    setInputText('');
    setGeneratedText('');
    setBlueText('');
  };

  // Function to handle changes in the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Function to generate text based on the user input
  const handleGenerateClick = () => {
    if (inputText.trim().length === 0) {
      setGeneratedText("Input cannot be empty. Please enter a prompt.");
      setBlueText('');
      return;
    }

    // Handle various cases for input prompts
    switch (inputText.trim().toLowerCase()) {
      case 'reply thanking for the opportunity':
        setGeneratedText(
          "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        );
        setBlueText(inputText);
        break;
      case 'requesting more information':
        setGeneratedText(
          "Could you please provide more information on this topic? I would appreciate any additional details you can share."
        );
        setBlueText(inputText);
        break;
      default:
        setGeneratedText(
          "Sorry, I couldn't understand your prompt. Please try a different prompt."
        );
        setBlueText('');
    }
  };

  // Function to insert the generated text into the message input field
  const handleInsertClick = () => {
    try {
      const messageInputField = document.querySelector('.msg-form__contenteditable');
      if (!messageInputField) throw new Error('Message input field not found. Please check the selector.');

      // Clear the existing content and set placeholder
      messageInputField.innerHTML = 'Write a message... --> Below is AI Generated Message  -->  ';

      // Create a new text node for the generated text
      const generatedTextElement = document.createTextNode(generatedText);

      // Append the generated text element to the message input field
      messageInputField.appendChild(generatedTextElement);

      // Close the modal after inserting the text
      closeModal();
    } catch (error) {
      console.error(error.message);
      alert(error.message); // Display an alert in case of an error
    }
  };

  return (
    <div>
      <div className="fixed bottom-48 right-[39.5%] flex items-start justify-center z-40" ref={iconRef}>
        <img
          src={Frame}
          alt="LinkedIn Icon"
          className="w-10 h-10 cursor-pointer"
          onClick={openModal}
        />
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 w-[48rem] relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" title="Close">
              <AiOutlineClose size={20} />
            </button>
            <div className="border-t border-gray-200 mt-4">
              <div className="p-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 mb-4"
                  placeholder="Your prompt"
                  style={{ height: '40px' }}
                  value={inputText}
                  onChange={handleInputChange}
                  title="Enter your prompt"
                />
                <div className="flex justify-end">
                  {blueText && (
                    <div className="w-full md:w-1/2 mt-4 md:order-2 md:pr-2">
                      <div className="bg-blue-400 p-4 rounded-lg max-w-xs ml-auto">
                        {blueText}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap">
                  {generatedText && (
                    <div className="w-full md:w-1/2 mt-4 md:order-1 md:pl-2">
                      <div className="bg-gray-100 p-4 rounded-lg max-w-xs mr-auto">
                        <div className="mb-4">
                          {generatedText}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  {generatedText && (
                    <button
                      onClick={handleInsertClick}
                      className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                      title="Insert generated text"
                    >
                      <AiOutlineCheck className="mr-2" />
                      Insert
                    </button>
                  )}
                  <button
                    onClick={handleGenerateClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center text-2xl"
                    title="Generate text"
                  >
                    <BsLightningFill className="mr-2" />
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedInIcon;
