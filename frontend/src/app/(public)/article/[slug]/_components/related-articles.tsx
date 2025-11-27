import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";

export default function RelatedArticles({ article }: { article: Article }) {
  return (
    <div className="bg-muted/50 py-10">
      <div className="container">
        <h2 className="text-2xl font-bold mb-2">
          Continue Your Reading Journey
        </h2>
        <p className="text-muted-foreground mb-6">
          If you enjoyed this article, we've curated a few more stories that
          might warm your heart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {article.relatedArticles.map((related) => (
            <Card
              key={related.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={related.coverImage}
                  alt={related.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold hover:text-primary transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {related.excerpt}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <span>{related.author.name}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <ClockIcon className="h-3 w-3" />
                    {related.readingTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
