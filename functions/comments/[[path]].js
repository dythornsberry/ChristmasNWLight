/**
 * Cloudflare Pages Function: Legacy URL Handler
 * Returns 410 Gone for all /comments/* URLs from the previous domain owner.
 * Tells Google to permanently de-index these URLs.
 */
export async function onRequest() {
  return new Response(
    '<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This content is no longer available.</p></body></html>',
    {
      status: 410,
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    }
  );
}
