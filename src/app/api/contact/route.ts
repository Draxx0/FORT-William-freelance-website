import ContactEmail from '@/emails/contact';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export type Prospect = {
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

const encodeBase64Url = (str: string) =>
  Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '') // Supprime les "=" de fin
    .replace(/\+/g, '-') // Remplace "+" par "-"
    .replace(/\//g, '_'); // Remplace "/" par "_"

export async function POST(req: NextRequest) {
  const body = await req.json();

  const prospect: Prospect = body;

  if (!prospect) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'williamfort.lmgl@gmail.com',
      subject: 'Nouvelle demande - Freelance 👨‍💻',
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
