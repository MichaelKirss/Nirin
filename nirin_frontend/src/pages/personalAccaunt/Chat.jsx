import { useState } from "react";
import "./Chat.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const assistantReply = simulateAssistantResponse(input);
    const assistantMessage = { text: assistantReply, sender: "assistant" };
    setMessages((prevMessages) => [...prevMessages, assistantMessage]);

    setInput("");
  };

  const simulateAssistantResponse = (input) => {
    return `Assistant answer: "${input}"`;
  };

  return (
    <div className="chat-container">
      <button className="toggle-button" onClick={toggleChat}>
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.905 9.40525L33.3 3.80025L36.3311 0.769249C36.657 0.443345 37.099 0.260254 37.5599 0.260254C38.0416 0.260254 38.5017 0.460184 38.8303 0.812327L41.9694 4.17567C42.2751 4.50313 42.445 4.93438 42.445 5.38231C42.445 5.87802 42.237 6.35097 41.8716 6.68593L38.905 9.40525Z"
            fill="#0B1528"
          />
          <path
            d="M4.54572 32.657L30.6958 6.00365L36.3893 11.8182L10.2393 38.4716L4.54572 32.657Z"
            fill="#0B1528"
          />
          <path
            d="M1.29116 39.7299L2.9151 36.25L6.7501 40.085L3.27023 41.7089C2.70281 41.9737 2.03036 41.8553 1.5876 41.4125C1.14483 40.9697 1.02636 40.2973 1.29116 39.7299Z"
            fill="#0B1528"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="assistant-header"><p>PRIVATE MANAGER</p></div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message..."
              className="chat-input"
            />
            <button type="submit" className="chat-submit-button">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
