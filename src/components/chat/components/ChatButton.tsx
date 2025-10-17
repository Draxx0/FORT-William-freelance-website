'use client';

import { MessageCircle, X } from 'lucide-react';
import React from 'react';

interface ChatButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 cursor-pointer z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 ${
        isOpen ? 'scale-90 rotate-45' : 'scale-100 rotate-0'
      }`}
    >
      <div
        className={`transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </div>

      <div className="absolute inset-0 bg-main rounded-full animate-pulse opacity-50" />
    </button>
  );
};

export default ChatButton;
