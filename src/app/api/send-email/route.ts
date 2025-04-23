import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address where you want to receive the contact form messages
const RECIPIENT_EMAIL = 'arthvala@gmail.com'; // Update this with your actual email

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      subject: `New Portfolio Contact: ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <h2 style="color: #3b82f6; margin-bottom: 20px;">New Message from Your Portfolio</h2>
  
  <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px;">
    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
    <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
  </div>
  
  <div style="margin-bottom: 20px;">
    <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
    <p style="line-height: 1.6; background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
  </div>
  
  <p style="color: #6b7280; font-size: 14px; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 15px;">
    This message was sent from the contact form on your portfolio website.
  </p>
</div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 