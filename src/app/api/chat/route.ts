import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL =
  'https://automations.williamfort.fr/webhook/dbde3fd6-fa27-4e6f-adc9-caf4dd609172/chat';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messageText, sessionId } = body;

    if (!messageText || !sessionId) {
      return NextResponse.json(
        { error: 'messageText et sessionId sont requis' },
        { status: 400 }
      );
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'sendMessage',
        sessionId: sessionId,
        chatInput: messageText,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    const botResponseText =
      data.message ||
      data.response ||
      data.output ||
      data.text ||
      "Désolé, je n'ai pas pu traiter votre message.";

    return NextResponse.json({
      success: true,
      botMessage: {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erreur de connexion';

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
