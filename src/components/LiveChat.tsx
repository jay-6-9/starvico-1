import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot', text: string, time: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate initial bot message after component mounts
  useEffect(() => {
    if (chatHistory.length === 0) {
      const initialMessage = {
        sender: 'bot' as const,
        text: "👋 Hi there! How can I help you today with automation solutions for your business?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory([initialMessage]);
    }
  }, [chatHistory.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!message.trim()) return;
    
    const userMessage = {
      sender: 'user' as const,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botMessages = [
        "Thank you for your message! One of our specialists will get back to you shortly.",
        "I'd be happy to tell you more about our automation solutions. What specific area are you interested in?",
        "That's a great question. Our team specializes in custom solutions for businesses of all sizes.",
        "I understand your needs. Let me connect you with our sales team who can provide more detailed information."
      ];
      
      const randomResponse = botMessages[Math.floor(Math.random() * botMessages.length)];
      
      const botMessage = {
        sender: 'bot' as const,
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatHistory(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-dark-800 rounded-xl shadow-xl w-80 sm:w-96 overflow-hidden border border-dark-700 animate-fade-in">
          <div className="bg-dark-900 p-4 flex items-center justify-between border-b border-dark-700">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                <MessageSquare size={20} className="text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Starvico Support</h3>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-success-500 mr-2"></div>
                  <span className="text-xs text-dark-300">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-dark-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${
                    msg.sender === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-dark-700 text-white'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-200' : 'text-dark-400'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-3/4 rounded-lg px-4 py-2 bg-dark-700 text-white">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-pulse delay-100"></div>
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={sendMessage} className="p-4 border-t border-dark-700 bg-dark-900">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-dark-700 border border-dark-600 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg p-2 h-full"
                disabled={!message.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default LiveChat;