'use client';

import { useCallback, useEffect, useState } from 'react';
import { sendMessageToN8n } from '../lib/n8nApi';
import {
  clearStorage,
  loadFromStorage,
  saveMessages,
  saveSessionId,
} from '../lib/storage';
import type { N8nMessage, UseN8nChatReturn } from '../types/chat';

export const useN8nChat = (): UseN8nChatReturn => {
  const { sessionId: initialSessionId, messages: initialMessages } =
    loadFromStorage();

  const [messages, setMessages] = useState<N8nMessage[]>(initialMessages);
  const [sessionId] = useState<string>(initialSessionId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    saveSessionId(sessionId);
  }, [sessionId]);

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const sendMessage = useCallback(
    async (messageText: string) => {
      if (!messageText.trim()) return;

      const userMessage: N8nMessage = {
        id: Date.now().toString(),
        text: messageText,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      const result = await sendMessageToN8n({
        messageText,
        sessionId,
      });

      if (result.success && result.botMessage) {
        setMessages((prev) => [...prev, result.botMessage!]);
      } else {
        setError(result.error || 'Erreur inconnue');

        const errorBotMessage: N8nMessage = {
          id: (Date.now() + 1).toString(),
          text: `Désolé, une erreur s'est produite: ${result.error}`,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorBotMessage]);
      }

      setIsLoading(false);
    },
    [sessionId]
  );

  const clearMessages = useCallback(() => {
    const resetMessages = [
      {
        id: '1',
        text: "Bonjour ! Je suis Pulse, l'assistant de William Fort. Comment puis-je vous aider aujourd'hui ?",
        sender: 'bot' as const,
        timestamp: new Date(),
      },
    ];
    setMessages(resetMessages);
    setError(null);
    clearStorage();
  }, []);

  return {
    messages,
    isLoading,
    error,
    sessionId,
    sendMessage,
    clearMessages,
  };
};
