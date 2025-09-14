import NewsletterConfirmationEmail from '@/emails/newsletter-inscription-confirmation';
import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email('Adresse email invalide'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

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
        { message: "Erreur lors de la vérification de l'inscription." },
        { status: 500 }
      );
    }

    const existingContact = contacts?.data?.find(
      (contact) => contact.email === email
    );
    if (existingContact) {
      return NextResponse.json(
        { message: 'Cette adresse email est déjà inscrite à la newsletter.' },
        { status: 409 }
      );
    }

    const confirmationToken = randomBytes(32).toString('hex');

    const { data: contact, error: contactError } = await resend.contacts.create(
      {
        audienceId: process.env.RESEND_AUDIENCE_ID!,
        email: email,
        unsubscribed: true,
        firstName: `token_${confirmationToken}`,
      }
    );

    if (contactError) {
      console.error("Erreur lors de l'ajout du contact:", contactError);
      return NextResponse.json(
        { message: "Erreur lors de l'inscription à la newsletter." },
        { status: 500 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/newsletter/confirm?token=${confirmationToken}&email=${encodeURIComponent(email)}`;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'hello@williamfort.fr',
      to: email,
      subject: 'Confirmez votre inscription à la newsletter',
      react: NewsletterConfirmationEmail({ email, confirmationUrl }),
    });

    if (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError);
      console.error(
        "Détails de l'erreur:",
        JSON.stringify(emailError, null, 2)
      );
      return NextResponse.json(
        {
          message:
            "L'inscription a été enregistrée mais l'email de confirmation n'a pas pu être envoyé.",
          error: emailError,
        },
        { status: 500 }
      );
    }

    console.log('Email envoyé avec succès à:', email, 'ID:', emailData?.id);

    return NextResponse.json(
      {
        message:
          'Email de confirmation envoyé ! Vérifiez votre boîte mail pour confirmer votre inscription.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Données invalides', errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Erreur lors de l'inscription:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'inscription." },
      { status: 500 }
    );
  }
}
