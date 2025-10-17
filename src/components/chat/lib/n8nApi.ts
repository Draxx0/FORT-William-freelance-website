import type { N8nMessage } from '../types/chat';

export interface SendMessageParams {
  messageText: string;
  sessionId: string;
}

export interface SendMessageResult {
  success: boolean;
  botMessage?: N8nMessage;
  error?: string;
}

export const sendMessageToN8n = async ({
  messageText,
  sessionId,
}: SendMessageParams): Promise<SendMessageResult> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageText,
        sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.botMessage) {
      return {
        success: true,
        botMessage: {
          ...data.botMessage,
          timestamp: new Date(data.botMessage.timestamp),
        },
      };
    } else {
      return {
        success: false,
        error: data.error || 'Erreur inconnue',
      };
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erreur de connexion';

    return {
      success: false,
      error: errorMessage,
    };
  }
};
