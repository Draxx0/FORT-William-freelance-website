import ConfirmationEmail from '@/emails/email-delivered';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const decodeBase64 = (str: string) =>
  Buffer.from(str, 'base64').toString('utf-8');

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.type !== 'email.delivered') {
    return NextResponse.json({ status: 400 });
  }

  const tags = body.data?.tags;

  if (!tags) {
    return NextResponse.json({ status: 400, message: 'Tags are missing' });
  }

  const fullName = decodeBase64(tags.recipient_fullname || '');
  const email = decodeBase64(tags.recipient_email || '');

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: `${fullName} - Confirmation de réception de votre demande - William FORT 🤝 `,
      react: ConfirmationEmail({ email, fullName }),
    });

    console.log('Resend Response:', data);
    console.log('Resend Error:', error);

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
