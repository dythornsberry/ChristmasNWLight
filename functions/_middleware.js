/**
 * Cloudflare Pages Middleware: host canonicalization + retired service redirects.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Consolidate www onto the apex domain (canonical host)
  if (url.hostname === 'www.christmasnw.com') {
    url.hostname = 'christmasnw.com';
    return Response.redirect(url.toString(), 301);
  }

  // Skip root path
  if (url.pathname === '/') {
    return context.next();
  }

  // Skip API routes (they have their own handlers)
  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }

  const pathWithoutTrailingSlash = url.pathname.replace(/\/$/, '');

  if (pathWithoutTrailingSlash === '/permanent-lighting' || pathWithoutTrailingSlash === '/year-round-services') {
    url.pathname = '/services';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
