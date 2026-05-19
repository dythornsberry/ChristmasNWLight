/**
 * Cloudflare Pages Middleware: Retired Service Redirects
 * Redirects service pages we no longer offer to the main services page.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Skip root path
  if (url.pathname === '/') {
    return context.next();
  }

  // Skip API routes (they have their own handlers)
  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }

  if (url.pathname === '/permanent-lighting' || url.pathname === '/year-round-services') {
    url.pathname = '/services';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
