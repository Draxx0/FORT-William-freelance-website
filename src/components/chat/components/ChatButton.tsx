'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import React from 'react';

interface ChatButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 cursor-pointer z-40 bg-primary text-white p-4 rounded-full shadow-2xl"
      whileHover={{
        scale: 1.1,
        rotate: 3,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isOpen ? 0.9 : 1,
        rotate: isOpen ? 45 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? 'close' : 'open'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle className="text-white" size={24} />
          )}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 bg-main rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

export default ChatButton;
