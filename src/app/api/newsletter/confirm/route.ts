import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const confirmSchema = z.object({
  token: z.string().min(1, 'Token requis'),
  email: z.string().email('Email invalide'),
});

const getClientIP = (): string => {
  const headersList = headers();

  const forwardedFor = headersList.get('x-forwarded-for');
  const realIP = headersList.get('x-real-ip');
  const cfConnectingIP = headersList.get('cf-connecting-ip');
  const clientIP = headersList.get('x-client-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIP) return realIP;
  if (cfConnectingIP) return cfConnectingIP;
  if (clientIP) return clientIP;

  return 'localhost-dev';
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const clientIP = getClientIP();

    const validation = confirmSchema.safeParse({ token, email });
    if (!validation.success) {
      return NextResponse.json(
        { message: 'Paramètres invalides', errors: validation.error.errors },
        { status: 400 }
      );
    }

    const { token: validToken, email: validEmail } = validation.data;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data: contacts, error: contactsError } = await resend.contacts.list(
      {
        audienceId: process.env.RESEND_AUDIENCE_ID!,
      }
    );

    if (contactsError) {
      console.error(
        'Erreur lors de la récupération des contacts:',
        contactsError
      );
      return NextResponse.json(
        { message: 'Erreur lors de la vérification du token.' },
        { status: 500 }
      );
    }

    const contact = contacts?.data?.find(
      (c) =>
        c.email === validEmail &&
        c.first_name === `token_${validToken}` &&
        c.unsubscribed === true
    );

    if (!contact) {
      return NextResponse.json(
        { message: 'Token invalide ou déjà utilisé.' },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const { data: _, error: updateError } = await resend.contacts.update({
        id: contact.id,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID!,
        firstName: contact.email.split('@')[0],
      });

      if (updateError) {
        console.error('Erreur lors de la confirmation:', updateError);
        return NextResponse.json(
          { message: "Erreur lors de la confirmation de l'inscription." },
          { status: 500 }
        );
      }

      const airtableResponse = await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              email: contact.email,
              nom: contact.email.split('@')[0],
              consentement: true,
              date_de_consentement: new Date().toISOString(),
              ip_consentement: clientIP,
              unsubscribed: false,
            },
          }),
        }
      );

      if (!airtableResponse.ok) {
        console.error('Erreur Airtable:', await airtableResponse.text());
      }
    } catch (contactError) {
      console.error("Erreur lors de l'ajout du contact:", contactError);
    }

    return NextResponse.redirect(
      new URL(
        `/newsletter/confirme?email=${encodeURIComponent(validEmail)}`,
        request.url
      )
    );
  } catch (error) {
    console.error('Erreur lors de la confirmation:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de la confirmation.' },
      { status: 500 }
    );
  }
}
