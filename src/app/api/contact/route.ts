import { buildContactMail } from '@/app/template/contactMailTemplate'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message, phone } = await request.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Les champs email et message sont requis' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
       auth: {
            user: process.env.SMTP_SERVER_USERNAME,
            pass: process.env.SMTP_SERVER_PASSWORD,
        },
    })

    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME,
      to: process.env.SITE_MAIL_RECIEVER,
      subject: `📩 Nouveau message via le formulaire de contact de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: buildContactMail({ name, email, message, phone }),
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}