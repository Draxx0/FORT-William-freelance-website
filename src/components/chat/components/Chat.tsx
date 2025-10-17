'use client';

import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

interface ChatProps {
  className?: string;
}

const Chat: React.FC<ChatProps> = ({ className }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className={className}>
      <ChatButton isOpen={isChatOpen} onToggle={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default Chat;
