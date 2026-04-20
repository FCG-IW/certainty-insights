import { Resend } from 'resend';

const apiKey = import.meta.env.VITE_RESEND_API_KEY;

if (!apiKey) {
  console.warn(
    'VITE_RESEND_API_KEY is not set. Email notifications will not be sent.'
  );
}

const resend = apiKey ? new Resend(apiKey) : null;

export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendLeadNotification(lead: EmailPayload) {
  if (!resend) {
    console.warn('Resend client not initialized. Email not sent.');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const result = await resend.emails.send({
      from: 'noreply@financialcompliancegroup.com',
      to: 'dev@financialcompliancegroup.com',
      subject: `New Lead: ${lead.name}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(lead.message).replace(/\n/g, '<br>')}</p>
      `
    });

    return {
      success: true,
      id: result.id
    };
  } catch (error) {
    console.error('Failed to send lead notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

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
