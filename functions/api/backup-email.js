/**
 * Cloudflare Pages Function: Backup Email via Resend
 * Sends lead notification email to dythornsberry@gmail.com
 * Independent of Zapier — acts as safety net for lead capture.
 *
 * Environment variable required:
 *   RESEND_API_KEY — set in Cloudflare Pages dashboard (Settings > Environment Variables)
 */

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const {
      fullName,
      phone,
      email,
      address,
      zipCode,
      serviceType,
      source,
      submittedAt,
    } = await context.request.json();

    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a5276; border-bottom: 2px solid #c0392b; padding-bottom: 10px;">
          🎄 New Quote Request — Christmas Northwest
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; width: 140px;">Name</td>
            <td style="padding: 10px;">${fullName || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Phone</td>
            <td style="padding: 10px;"><a href="tel:${phone}">${phone || 'N/A'}</a></td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Address</td>
            <td style="padding: 10px;">${address || 'N/A'}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">ZIP Code</td>
            <td style="padding: 10px;">${zipCode || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Service</td>
            <td style="padding: 10px;">${serviceType || 'N/A'}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold;">Source</td>
            <td style="padding: 10px;">${source || 'christmasnw.com'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Submitted</td>
            <td style="padding: 10px;">${submittedAt ? new Date(submittedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) : 'N/A'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; padding: 12px; background: #fdecea; border-radius: 6px; font-size: 14px;">
          ⚡ This is a backup email sent independently of Zapier. Call this lead ASAP!
        </p>
        <p style="color: #999; font-size: 12px; margin-top: 10px;">
          Source: christmasnw.com | Backup via Resend
        </p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Christmas Northwest <onboarding@resend.dev>',
        to: ['dythornsberry@gmail.com'],
        subject: `🎄 New Quote Request from ${fullName || 'Website Visitor'}`,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', result);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: result }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (err) {
    console.error('Backup email function error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
