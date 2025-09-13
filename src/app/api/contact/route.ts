import ContactEmail from '@/emails/contact';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export type Prospect = {
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  marketing?: boolean;
};

const encodeBase64Url = (str: string) =>
  Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log('body', body);

  const prospect: Prospect = body;

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

  const clientIP = getClientIP();

  if (!prospect) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'noreply@williamfort.fr',
      to: 'williamfort.work@gmail.com',
      subject: `Nouvelle demande de ${prospect.fullName}`,
      react: ContactEmail(prospect),
      tags: [
        {
          name: 'recipient_email',
          value: encodeBase64Url(prospect.email),
        },
        {
          name: 'recipient_fullname',
          value: encodeBase64Url(prospect.fullName),
        },
      ],
    });

    if (error) {
      return NextResponse.json(
        { message: 'Email sending failed', error },
        { status: 400 }
      );
    }

    if (prospect.marketing) {
      try {
        const nameParts = prospect.fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        await resend.contacts.create({
          email: prospect.email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID!,
        });

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
                email: prospect.email,
                prenom: firstName,
                nom: lastName,
                consentement: true,
                date_de_consentement: new Date().toISOString(),
                ip_consentement: clientIP,
                message_contact: prospect.message,
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
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 }
    );
  }
}
