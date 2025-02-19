import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

type Prospect = {
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

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
      from: prospect.email,
      to: 'williamfort.lmgl@gmail.com',
      subject: 'Nouvelle demande - Freelance 👨‍💻',
      // react: EmailTemplate({ email, message}),
      html: `
     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
       <h2 style="color: #333; text-align: center;">Nouvelle demande de contact 📩</h2>
       <p style="font-size: 16px; color: #555;">Vous avez reçu une nouvelle demande de contact. Voici les informations du prospect :</p>
       
       <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
         <p><strong>👤 Nom :</strong> ${prospect.fullName}</p>
         <p><strong>📧 Email :</strong> <a href="mailto:${
           prospect.email
         }" style="color: #007BFF; text-decoration: none;">${
        prospect.email
      }</a></p>
         <p><strong>📞 Téléphone :</strong> <a href="tel:${
           prospect.phone
         }" style="color: #007BFF; text-decoration: none;">${
        prospect.phone
      }</a></p>
         <p><strong>🛠️ Services demandés :</strong> ${prospect.services.join(
           ', '
         )}</p>
         <p><strong>✉️ Message :</strong></p>
         <blockquote style="background: #fff; padding: 10px; border-left: 4px solid #007BFF; font-style: italic; color: #333;">
           ${prospect.message}
         </blockquote>
       </div>

       <p style="text-align: center; margin-top: 20px;">
         <a href="mailto:${
           prospect.email
         }" style="background: #007BFF; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
           Répondre au prospect
         </a>
       </p>

       <p style="font-size: 12px; color: #888; text-align: center; margin-top: 20px;">Ce message a été généré automatiquement par votre formulaire de contact.</p>
     </div>
   `,
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
