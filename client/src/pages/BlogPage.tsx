import { useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  image?: string;
}

export default function BlogPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Placeholder blog posts - add real content later
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 5 Christmas Lighting Trends for 2025",
      slug: "christmas-lighting-trends-2025",
      excerpt: "Discover the hottest holiday lighting trends that will make your home the star of the neighborhood this season.",
      category: "Trends",
      publishDate: "2024-11-01",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Choose Between Warm White and Multicolor Lights",
      slug: "warm-white-vs-multicolor-lights",
      excerpt: "Not sure which lighting style suits your home? We break down the pros and cons of each to help you decide.",
      category: "Buying Guide",
      publishDate: "2024-10-25",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "The Complete Guide to Professional Christmas Light Installation",
      slug: "professional-christmas-light-installation-guide",
      excerpt: "Learn what goes into a professional installation and why DIY might not be worth the risk.",
      category: "Installation",
      publishDate: "2024-10-15",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Year-Round Outdoor Lighting: Is It Worth the Investment?",
      slug: "year-round-outdoor-lighting-worth-it",
      excerpt: "Permanent outdoor lighting systems are gaining popularity. Here's everything you need to know before making the switch.",
      category: "Permanent Lighting",
      publishDate: "2024-09-30",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Safety Tips for Holiday Light Installation",
      slug: "holiday-light-installation-safety-tips",
      excerpt: "Keep your family safe this season with these essential safety tips from our professional installers.",
      category: "Safety",
      publishDate: "2024-09-20",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "How Much Does Professional Christmas Light Installation Cost in Seattle?",
      slug: "christmas-light-installation-cost-seattle",
      excerpt: "Get a transparent breakdown of pricing for professional holiday lighting in the Greater Seattle area.",
      category: "Pricing",
      publishDate: "2024-09-10",
      readTime: "7 min read"
    }
  ];

  const categories = ["All", "Trends", "Buying Guide", "Installation", "Permanent Lighting", "Safety", "Pricing"];

  return (
    <>
      <PageHead 
        title="Holiday Lighting Tips & Guides 2025 | Christmas Northwest Blog"
        description="Expert tips, trends, and guides for holiday lighting. Learn about Christmas light installation, safety, pricing, and the latest trends from Seattle's premier lighting professionals."
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
                  <span className="text-primary font-semibold">Expert Insights</span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Holiday Lighting Tips & Guides
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert advice, trends, and insights from Seattle's premier Christmas lighting professionals
                </p>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="px-6 py-2 cursor-pointer text-sm font-semibold hover-elevate"
                    data-testid={`badge-blog-${category.toLowerCase().replace(' ', '-')}`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card 
                    key={post.id}
                    className="group overflow-hidden hover-elevate cursor-pointer"
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
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Coming Soon Notice */}
              <div className="mt-16 text-center">
                <Card className="p-8 max-w-2xl mx-auto bg-muted/30">
                  <h3 className="font-bold text-2xl mb-3 text-foreground">
                    More Articles Coming Soon!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're working on publishing in-depth guides and articles to help you create the perfect holiday lighting display. Check back soon for new content!
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Note: Blog posts are currently placeholders. Full articles will be published soon.
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
