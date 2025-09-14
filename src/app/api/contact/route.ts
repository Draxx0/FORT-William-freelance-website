import ContactEmail from '@/emails/contact';
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

const resend = new Resend(process.env.RESEND_API_KEY);

const encodeBase64Url = (str: string) =>
  Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

export async function POST(req: NextRequest) {
  const body = await req.json();

  const prospect: Prospect = body;

  if (!prospect) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'hello@williamfort.fr',
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
