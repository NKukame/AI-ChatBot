import React, { useState } from 'react';
import './styles.css';
import AssistantIcon from '@mui/icons-material/Assistant';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import dvtLogo from "./assets/dvt_logo.jpg";

function Home() {
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
    };

    const adjustTextareaHeight = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setUserInput(textarea.value);
    };

    const sendMessage = () => {
        if (userInput.trim()) {
            setMessages([...messages, { text: userInput, sender: 'bot' }]);
            setUserInput('');
        }
    };

    return (
        <div className='body'>
            <div className='chatbot-container'>
                <div className='chat-container' onClick={togglePanel}>
                    {isPanelVisible ? (
                        <CloseIcon fontSize="large" className='ai-logo' />
                    ) : (
                        <AssistantIcon fontSize="large" className='ai-logo' />
                    )}
                </div>
                {isPanelVisible && (
                    <div className='message-panel'>
                        <div className='chat-header'>
                            <img src={dvtLogo} alt="Logo" className='chat-logo-header'/>
                            <p>TOT</p>
                        </div>
                        
                        <div className='message-container'>
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className='input-container'>
                            <textarea
                                className='chat-messanger'
                                placeholder='Type Your Message'
                                value={userInput}
                                onInput={adjustTextareaHeight}
                            ></textarea>
                            <button className='send-btn' onClick={sendMessage}><SendIcon fontSize="small" /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;