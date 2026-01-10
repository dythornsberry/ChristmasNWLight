// Gmail integration for ChristmasNW lead notifications
// Uses Replit's Gmail connector

import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

// Send email notification for new leads
export async function sendLeadNotificationEmail(quoteData: {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  address?: string | null;
  serviceType: string;
}) {
  try {
    const gmail = await getUncachableGmailClient();
    
    const toEmail = 'christmaslightsnw@gmail.com';
    const subject = `New Lead: ${quoteData.fullName} - ${quoteData.zipCode}`;
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    
    const htmlBody = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${quoteData.fullName}</p>
      <p><strong>Email:</strong> ${quoteData.email}</p>
      <p><strong>Phone:</strong> ${quoteData.phone}</p>
      <p><strong>Zip Code:</strong> ${quoteData.zipCode}</p>
      <p><strong>Address:</strong> ${quoteData.address || 'Not provided'}</p>
      <p><strong>Service Interest:</strong> ${quoteData.serviceType}</p>
      <p><strong>Submitted:</strong> ${timestamp}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This is a backup notification from ChristmasNW.com</p>
    `;

    // Create email in RFC 2822 format
    const emailLines = [
      `To: ${toEmail}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      '',
      htmlBody
    ];
    
    const email = emailLines.join('\r\n');
    const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail
      }
    });

    console.log('Gmail notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send Gmail notification:', error);
    return false;
  }
}
