export interface N8nMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface N8nResponse {
  message?: string;
  response?: string;
  output?: string;
  text?: string;
}

export interface UseN8nChatReturn {
  messages: N8nMessage[];
  isLoading: boolean;
  error: string | null;
  sessionId: string;
  sendMessage: (message: string) => Promise<void>;
  clearMessages: () => void;
}
