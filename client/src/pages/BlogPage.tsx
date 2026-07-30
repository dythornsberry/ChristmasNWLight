import { useState } from "react";
import { Link, useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { formatBlogDate, getAllBlogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const blogPosts = getAllBlogPosts();

  const categories = ["All", "Trends", "Buying Guide", "Installation", "Planning", "Safety"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <PageHead 
        title="Holiday Lighting Tips & Guides | Christmas Northwest"
        description="Practical holiday lighting guides: installation timing, safety, pricing, products, and design ideas for Seattle-area homes."
      />

      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <StickyHeader onGetQuote={scrollToQuote} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                  <span className="text-primary font-semibold">From the Field</span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Holiday Lighting Tips & Guides
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Practical answers from a local installation team serving Seattle and the Eastside
                </p>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-pressed={selectedCategory === category}
                  >
                    <Badge
                      variant={selectedCategory === category ? "default" : "secondary"}
                      className="cursor-pointer px-6 py-2 text-sm font-semibold hover-elevate"
                      data-testid={`badge-blog-${category.toLowerCase().replace(' ', '-')}`}
                    >
                      {category}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full">
                    <Card
                      className="group h-full cursor-pointer overflow-hidden hover-elevate"
                      data-testid={`card-blog-${post.id}`}
                    >
                    {/* Placeholder image area */}
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📝</div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      
                      <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatBlogDate(post.publishDate)}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* More Coming Soon Notice */}
              <div className="mt-16 text-center">
                <Card className="p-8 max-w-2xl mx-auto bg-muted/30">
                  <h3 className="font-bold text-2xl mb-3 text-foreground">
                    Need Advice for Your Property?
                  </h3>
                  <p className="text-muted-foreground">
                    Browse the guides above or request a quote for recommendations based on your roofline, landscaping, and budget.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <StickyBottomCTA onGetQuote={scrollToQuote} />
      </div>
    </>
  );
}
