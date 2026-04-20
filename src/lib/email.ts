export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Send a lead notification email via Netlify Function
 * The email is sent server-side to keep the Resend API key secure
 */
export async function sendLeadNotification(lead: EmailPayload) {
  try {
    const response = await fetch('/.netlify/functions/send-lead-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Email service error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Lead notification sent:', data.id);

    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    console.error('Failed to send lead notification:', error);
    // Don't throw - log the error but don't block the lead submission
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
