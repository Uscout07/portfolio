// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Configure your transporter with your email provider and credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another service
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASSWORD, // your email password or app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // the email address you want to receive the form data
      subject: subject,
      text: `Sent from portfolio \n
       Name: ${name}\n
       Email: ${email}\n
       Message: ${message}`,
    });
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.error();
  }
}
