/**
 * Cloudflare Pages Middleware: Trailing Slash Redirect
 * 301 redirects any URL with a trailing slash to the non-trailing-slash version.
 * Fixes duplicate content / canonical issues flagged by Google Search Console.
 * Example: /gallery/ → /gallery, /faq/ → /faq
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

  // 301 redirect trailing slashes to non-trailing-slash
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
