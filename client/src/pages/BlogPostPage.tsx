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
import { getBlogPost } from "@/data/blogPosts";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  
  const post = params?.slug ? getBlogPost(params.slug) : undefined;

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
      "@type": "Organization",
      "name": "Christmas Northwest"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Christmas Northwest",
      "url": "https://christmasnw.com"
    },
    "datePublished": post.publishDate,
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
        title={`${post.title} | Christmas Northwest`}
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
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span data-testid="text-publish-date">
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
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
                dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                  if (line.trim().startsWith('## ')) {
                    return `<h2>${line.replace('## ', '')}</h2>`;
                  }
                  if (line.trim().startsWith('### ')) {
                    return `<h3>${line.replace('### ', '')}</h3>`;
                  }
                  if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                    return `<p><strong>${line.trim().slice(2, -2)}</strong></p>`;
                  }
                  if (line.trim().startsWith('- ')) {
                    return `<li>${line.replace('- ', '')}</li>`;
                  }
                  if (line.trim() === '') {
                    return '';
                  }
                  return `<p>${line}</p>`;
                }).join('\n') }}
              />

              {/* CTA Section */}
              <Card className="p-8 md:p-12 mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                    Ready to Transform Your Home This Holiday Season?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Let our professional team create a stunning Christmas light display for your home. Premium quality, stress-free service, and spectacular results guaranteed.
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
