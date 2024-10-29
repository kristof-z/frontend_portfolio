import { FormDataProps } from '@/app/components/types';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData: FormDataProps = await request.json();

    // Validate input
    if (!formData.email) {
      return new NextResponse(JSON.stringify({ error: "Please provide a valid email." }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Form Submission',
      text: `Email: ${formData.email}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify({ message: 'Form submitted successfully.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'An error occurred while processing your request.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}