import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email };
}

export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: connectionSettings.settings.from_email
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  state?: string;
  message?: string;
  requestType?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Request Type:</strong> ${data.requestType || 'General Inquiry'}</p>
      <hr/>
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Practice/Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>State:</strong> ${data.state || 'Not provided'}</p>
      <hr/>
      <h3>Message</h3>
      <p>${data.message || 'No message provided'}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">This email was sent from the MDcharts EHR website contact form.</p>
    `;

    const result = await client.emails.send({
      from: fromEmail || 'MDcharts EHR <noreply@mdchartsehr.com>',
      to: ['awachspress@mdcharts.net'],
      subject: `MDcharts Contact: ${data.requestType || 'General Inquiry'} from ${data.firstName} ${data.lastName}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' };
  }
}
