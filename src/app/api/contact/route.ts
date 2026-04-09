import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { Resend } from 'resend';

import { siteConfig } from '@/data/siteConfig';

export const runtime = 'nodejs';

const contactSchema = yup
  .object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    company: yup.string().trim().required(),
    message: yup.string().trim().required(),
    budget: yup.string().trim().required(),
    services: yup.array().of(yup.string().trim().required()).default([]).required(),
  })
  .required();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Resend is not configured.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const payload = await contactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const selectedServices = payload.services.length
      ? payload.services.join(', ')
      : 'Not selected';

    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Reddystack <hello@reddystack.com>';

    const subject = `New Reddystack inquiry from ${payload.name}`;
    const text = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company}`,
      `Budget: ${payload.budget}`,
      `Services: ${selectedServices}`,
      '',
      'Message:',
      payload.message,
    ].join('\n');

    const html = `
      <div>
        <h2>New Reddystack inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>
        <p><strong>Services:</strong> ${escapeHtml(selectedServices)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Unable to send the message right now.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { error: 'Please complete all required fields correctly.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong while sending the message.' },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
