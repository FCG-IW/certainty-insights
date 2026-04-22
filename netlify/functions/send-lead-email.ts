import { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT);
const smtpSecureRaw = process.env.SMTP_SECURE;
const smtpSecure = smtpSecureRaw ? smtpSecureRaw.toLowerCase() === 'true' : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFromName = process.env.SMTP_FROM_NAME;
const mailFrom = process.env.SMTP_FROM || smtpUser;
const primaryRecipient = process.env.LEAD_NOTIFICATION_TO;
const backupRecipient = process.env.LEAD_NOTIFICATION_TO_FALLBACK || '';

const transporter = smtpHost && Number.isFinite(smtpPort) && typeof smtpSecure === 'boolean' && smtpUser && smtpPass
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    })
  : null;

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface SmtpError extends Error {
  responseCode?: number;
  response?: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const missingVars = [
      ['SMTP_HOST', smtpHost],
      ['SMTP_PORT', process.env.SMTP_PORT],
      ['SMTP_SECURE', smtpSecureRaw],
      ['SMTP_USER', smtpUser],
      ['SMTP_PASS', smtpPass],
      ['SMTP_FROM', mailFrom],
      ['LEAD_NOTIFICATION_TO', primaryRecipient]
    ].filter(([, value]) => !value).map(([name]) => name);

    if (!transporter || missingVars.length > 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `SMTP is not configured. Missing required variables: ${missingVars.join(', ')}`
        })
      };
    }

    let body: unknown;

    try {
      body = JSON.parse(event.body || '{}');
    } catch {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON body' })
      };
    }

    const {
      name = '',
      email = '',
      phone = '',
      message = ''
    } = (body || {}) as Partial<LeadData>;

    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim() || '(not provided)');
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');
    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const safeFrom = mailFrom as string;
    const safePrimaryRecipient = primaryRecipient as string;

    const recipients = [safePrimaryRecipient, backupRecipient]
      .map((recipient) => recipient.trim())
      .filter((recipient, index, arr) => recipient.length > 0 && arr.indexOf(recipient) === index);

    if (recipients.length === 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'No recipient is configured. Set LEAD_NOTIFICATION_TO.'
        })
      };
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: smtpFromName
        ? {
            name: smtpFromName,
            address: safeFrom
          }
        : safeFrom,
      replyTo: email,
      subject: `New Lead: ${name}`,
      text: [
        'New Lead Submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '(not provided)'}`,
        '',
        'Message:',
        message
      ].join('\n'),
      html: `
        <div style="margin:0;padding:24px;background-color:#f4f4f4;font-family:Gotham, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;color:#020a0a;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:680px;margin:0 auto;background-color:#ffffff;border:1px solid #e6e6e6;">
            <tr>
              <td style="height:8px;background-color:#4cb87f;line-height:8px;font-size:8px;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 32px 24px;background-color:#fafafa;border-bottom:1px solid #e6e6e6;">
                <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4cb87f;font-weight:700;margin-bottom:10px;">Contact</div>
                <h1 style="margin:0;font-family:Outfit, Gotham, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:32px;line-height:1.05;font-weight:700;color:#020a0a;">New Lead Submission</h1>
                <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#666666;">Complete the form below, and an FCG team member will contact you directly.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 14px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding:0 0 18px;border-bottom:1px solid #e6e6e6;">
                      <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#939598;font-weight:600;margin-bottom:6px;">Name</div>
                      <div style="font-size:18px;line-height:1.4;color:#020a0a;font-weight:500;">${safeName}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 18px;border-bottom:1px solid #e6e6e6;">
                      <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#939598;font-weight:600;margin-bottom:6px;">Email</div>
                      <a href="mailto:${safeEmail}" style="font-size:16px;line-height:1.4;color:#020a0a;text-decoration:none;font-weight:500;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 18px;border-bottom:1px solid #e6e6e6;">
                      <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#939598;font-weight:600;margin-bottom:6px;">Phone</div>
                      <div style="font-size:16px;line-height:1.4;color:#020a0a;font-weight:500;">${safePhone}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 0;">
                      <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#939598;font-weight:600;margin-bottom:10px;">Message</div>
                      <div style="background-color:#f4f4f4;border-left:3px solid #4cb87f;padding:16px;font-size:15px;line-height:1.7;color:#020a0a;">${safeMessage}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#020a0a;">
                  <tr>
                    <td style="padding:14px 16px;font-size:12px;line-height:1.5;color:#fafafa;">
                      Submitted ${escapeHtml(submittedAt)} · Financial Compliance Group Contact Form
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `

    };

    let info: nodemailer.SentMessageInfo | null = null;
    let lastError: SmtpError | null = null;

    for (const recipient of recipients) {
      try {
        info = await transporter.sendMail({
          ...mailOptions,
          to: recipient
        });
        console.log('Email sent successfully to recipient:', recipient);
        break;
      } catch (error) {
        lastError = error as SmtpError;
        console.error('SMTP send failed for recipient:', recipient, {
          message: lastError.message,
          responseCode: lastError.responseCode,
          response: lastError.response
        });
      }
    }

    if (!info) {
      const smtpErrorMessage = lastError?.response || lastError?.message || 'Failed to send email';

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: `Message failed: ${smtpErrorMessage}`
        })
      };
    }

    const emailId = info.messageId;
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
