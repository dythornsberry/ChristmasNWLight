import { useRoute, useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { formatBlogDate, getBlogPost } from "@/data/blogPosts";
import type { ReactNode } from "react";

function renderInlineMarkdown(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

function renderArticleContent(content: string) {
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    const items = listItems;
    listItems = [];
    blocks.push(
      <ul key={`list-${blocks.length}`}>
        {items.map((item, index) => <li key={index}>{renderInlineMarkdown(item)}</li>)}
      </ul>,
    );
  };

  content.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${blocks.length}`}>{renderInlineMarkdown(line.slice(4))}</h3>);
    } else if (line.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${blocks.length}`}>{renderInlineMarkdown(line.slice(3))}</h2>);
    } else {
      blocks.push(<p key={`p-${blocks.length}`}>{renderInlineMarkdown(line)}</p>);
    }
  });
  flushList();

  return blocks;
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  
  const post = params?.slug ? getBlogPost(params.slug) : undefined;

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const goToBlog = () => {
    setLocation('/blog');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  if (!post) {
    return (
      <>
        <PageHead 
          title="Blog Post Not Found | Christmas Northwest"
          description="The blog post you're looking for doesn't exist."
          robots="noindex, nofollow"
        />
        <div className="min-h-screen flex flex-col">
          <UrgencyBanner />
          <StickyHeader onGetQuote={scrollToQuote} />
          <main className="flex-1 flex items-center justify-center py-24">
            <div className="text-center max-w-2xl mx-auto px-6">
              <h2 className="font-serif text-4xl font-bold mb-6">Post Not Found</h2>
              <p className="text-xl text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist.
              </p>
              <Button onClick={goToBlog} size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": "Dylan Thornsberry",
      "url": "https://christmasnw.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Christmas Northwest",
      "url": "https://christmasnw.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://christmasnw.com/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "articleBody": post.content.replace(/<[^>]*>/g, '').substring(0, 500),
    "image": "https://christmasnw.com/og-image.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://christmasnw.com/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://christmasnw.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://christmasnw.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://christmasnw.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <PageHead
        title={post.seoTitle ?? `${post.title} | Christmas Northwest`}
        description={post.metaDescription}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <StickyHeader onGetQuote={scrollToQuote} />

        <main className="flex-1">
          {/* Back to Blog */}
          <section className="py-6 bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <Button 
                variant="ghost" 
                onClick={goToBlog}
                className="hover-elevate"
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </div>
          </section>

          {/* Article Header */}
          <article className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6">
              {/* Meta Info */}
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4" data-testid="badge-category">
                  {post.category}
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight" data-testid="text-post-title">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground">
                  <span className="font-medium text-foreground" data-testid="text-author">By Dylan Thornsberry</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span data-testid="text-publish-date">
                      {formatBlogDate(post.publishDate, "long")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span data-testid="text-read-time">{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-foreground prose-strong:font-semibold prose-ul:my-6 prose-li:text-foreground/90 prose-li:mb-2"
                data-testid="content-blog-post"
              >
                {renderArticleContent(post.content)}
              </div>

              {/* CTA Section */}
              <Card className="p-8 md:p-12 mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                    Ready to Plan Your Christmas Lights?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Tell us about your property and the areas you want to light. We will follow up with options, availability, and a custom estimate.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      onClick={scrollToQuote}
                      className="text-lg px-8"
                      data-testid="button-post-cta-quote"
                    >
                      Light Up My Home ✨
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.location.href = 'tel:+14252150935'}
                      className="text-lg px-8"
                      data-testid="button-post-cta-call"
                    >
                      Call (425) 215-0935
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Back to Blog Footer */}
              <div className="mt-12 text-center">
                <Button 
                  variant="ghost" 
                  onClick={goToBlog}
                  className="hover-elevate"
                  data-testid="button-back-to-blog-footer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Articles
                </Button>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <StickyBottomCTA onGetQuote={scrollToQuote} />
      </div>
    </>
  );
}
