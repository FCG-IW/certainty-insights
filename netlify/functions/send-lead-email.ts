import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    if (!resend) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'RESEND_API_KEY is not configured' })
      };
    }

    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, message } = body as LeadData;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'noreply@financialcompliancegroup.com',
      to: 'dev@financialcompliancegroup.com',
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    if (result.error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: result.error.message || 'Failed to send email'
        })
      };
    }

    const emailId = result.data?.id;
    console.log('Email sent successfully:', emailId || '(no id returned)');

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id: emailId ?? null,
        message: 'Email sent successfully'
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export { handler };
