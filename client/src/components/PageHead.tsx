import { useEffect } from 'react';

interface PageHeadProps {
  title: string;
  description: string;
  path?: string;
  robots?: string;
}

export default function PageHead({ title, description, path, robots }: PageHeadProps) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const pathname = path || window.location.pathname;
    const canonicalUrl = new URL(pathname, `${siteUrl}/`).toString();

    const upsertMeta = (
      selector: string,
      attributes: Record<string, string>,
      content: string,
    ) => {
      let metaTag = document.head.querySelector<HTMLMetaElement>(selector);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) => metaTag!.setAttribute(key, value));
        metaTag.dataset.managedBy = "page-head";
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.dataset.managedBy = "page-head";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    if (robots) {
      upsertMeta('meta[name="robots"]', { name: "robots" }, robots);
    } else {
      document.head.querySelector('meta[name="robots"][data-managed-by="page-head"]')?.remove();
    }
  }, [description, path, robots, title]);

  return null;
}
