import type { N8nMessage } from '../types/chat';

const STORAGE_KEYS = {
  SESSION_ID: 'n8n_chat_session_id',
  MESSAGES: 'n8n_chat_messages',
} as const;

export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const loadFromStorage = (): {
  sessionId: string;
  messages: N8nMessage[];
} => {
  if (typeof window === 'undefined') {
    return {
      sessionId: generateSessionId(),
      messages: [
        {
          id: '1',
          text: "Bonjour ! Je suis Pulse, l'assistant de William Fort. Comment puis-je vous aider aujourd'hui ?",
          sender: 'bot',
          timestamp: new Date(),
        },
      ],
    };
  }

  try {
    const sessionId =
      localStorage.getItem(STORAGE_KEYS.SESSION_ID) || generateSessionId();
    const messagesJson = localStorage.getItem(STORAGE_KEYS.MESSAGES);

    let messages: N8nMessage[] = [
      {
        id: '1',
        text: "Bonjour ! Je suis Pulse, l'assistant de William Fort. Comment puis-je vous aider aujourd'hui ?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ];

    if (messagesJson) {
      const parsedMessages = JSON.parse(messagesJson);
      messages = parsedMessages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }

    return { sessionId, messages };
  } catch (error) {
    console.error('Erreur lors du chargement du stockage:', error);
    return {
      sessionId: generateSessionId(),
      messages: [
        {
          id: '1',
          text: "Bonjour ! Je suis Pulse, l'assistant de William Fort. Comment puis-je vous aider aujourd'hui ?",
          sender: 'bot',
          timestamp: new Date(),
        },
      ],
    };
  }
};

export const saveSessionId = (sessionId: string): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la session:', error);
  }
};

export const saveMessages = (messages: N8nMessage[]): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des messages:', error);
  }
};

export const clearStorage = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
  } catch (error) {
    console.error('Erreur lors du nettoyage du stockage:', error);
  }
};
