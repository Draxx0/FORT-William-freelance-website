'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, Minimize2, Send, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useN8nChat } from '../hooks/useN8nChat';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const { messages, isLoading, sendMessage } = useN8nChat();
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      await sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-4 right-0 p-4 md:p-0 md:right-4 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.div
            className="bg-white relative flex flex-col justify-between rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            animate={{
              width: isMinimized ? 320 : 448,
              height: isMinimized ? 72 : 600,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="bg-gradient-to-r from-destructive to-primary sticky top-0 p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={'/logo.png'}
                    width={32}
                    height={32}
                    alt="Pulse AI"
                    className="size-8 object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold w-fit">Pulse</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Assistant en ligne</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-[500px] flex flex-col justify-between"
                >
                  <div className="overflow-y-auto p-4 space-y-4">
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                          className={`flex ${
                            message.sender === 'user'
                              ? 'justify-end'
                              : 'justify-start'
                          }`}
                        >
                          <motion.div
                            className={`max-w-[90%] p-3 rounded-2xl ${
                              message.sender === 'user'
                                ? 'bg-primary text-white rounded-br-md'
                                : 'bg-gray-50 border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                            }`}
                          >
                            <div className="flex items-start space-x-2">
                              {message.sender === 'bot' && (
                                <motion.div
                                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    delay: 0.2,
                                    type: 'spring',
                                    stiffness: 300,
                                  }}
                                >
                                  <Image
                                    src={'/logo.png'}
                                    width={24}
                                    height={24}
                                    alt="William AI"
                                    className="size-6 object-cover rounded-full"
                                  />
                                </motion.div>
                              )}
                              <div className="flex-1 text-start">
                                <motion.p
                                  className="text-sm leading-relaxed"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  {message.text}
                                </motion.p>
                                <motion.p
                                  className="text-xs opacity-60 mt-1"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 0.6 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  {message.timestamp.toLocaleTimeString(
                                    'fr-FR',
                                    {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    }
                                  )}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    <TypingIndicator isVisible={isLoading} />
                    <div ref={messagesEndRef} />
                  </div>

                  <motion.div
                    className="px-4 sticky bottom-0 py-4 bg-white border-t border-gray-100 flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-end space-x-3">
                      <div className="flex-1 relative group">
                        <motion.textarea
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={
                            isLoading
                              ? 'William réfléchit...'
                              : 'Tapez votre message...'
                          }
                          rows={1}
                          disabled={isLoading}
                          className={`w-full text-black px-4 py-3 pr-12 text-sm border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${
                            isLoading
                              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-gray-50 border-gray-200 focus:bg-white placeholder:text-gray-400'
                          }`}
                          style={{
                            minHeight: '50px',
                            maxHeight: '120px',
                          }}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height =
                              Math.min(target.scrollHeight, 120) + 'px';
                          }}
                        />

                        <motion.button
                          onClick={handleSendMessage}
                          disabled={!inputValue.trim() || isLoading}
                          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl ${
                            inputValue.trim() && !isLoading
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                          whileHover={
                            inputValue.trim() && !isLoading
                              ? {
                                  scale: 1.1,
                                  backgroundColor: 'rgba(var(--primary), 0.9)',
                                }
                              : {}
                          }
                          whileTap={
                            inputValue.trim() && !isLoading
                              ? { scale: 0.95 }
                              : {}
                          }
                          transition={{ duration: 0.2 }}
                        >
                          {isLoading ? (
                            <motion.div
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                            />
                          ) : (
                            <Send size={16} />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
