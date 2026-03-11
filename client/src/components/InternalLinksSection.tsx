import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

interface InternalLinkItem {
  href: string;
  label: string;
  description: string;
}

interface InternalLinksSectionProps {
  title: string;
  description: string;
  links: InternalLinkItem[];
}

export default function InternalLinksSection({
  title,
  description,
  links,
}: InternalLinksSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="group h-full cursor-pointer border-border/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="flex h-full flex-col">
                  <p className="text-lg font-semibold text-foreground">{item.label}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 flex items-center text-sm font-semibold text-primary">
                    Explore page
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
