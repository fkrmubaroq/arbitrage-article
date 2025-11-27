import AdUnit from "@/components/monetization/ad-unit";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adPlacements, articles, popularAuthors } from "@/data/mock-data";
import { Filter } from "lucide-react";
import { ArticleCard } from "./article-card";
import { AuthorHighlights } from "./author-highlight";

export default function Articles() {
  const adaptArticleForDisplay = (article: any) => {
    return {
      id: article.id,
      title: article.title,
      excerpt: article.excerpt || "", // Use the excerpt or empty string if missing
      coverImage: article.coverImage,
      author: {
        name: article.author.name,
        avatar: article.author.avatar,
      },
      publishedAt: article.publishedAt,
      readingTime: article.readingTime,
      likes: article.likes,
      comments: article.comments.length,
      tags: article.tags,
    };
  };

  return (
    <section className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Tabs defaultValue="latest" className="w-full mb-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>

            <TabsContent value="latest" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.slice(0, 2).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={adaptArticleForDisplay(article)}
                  />
                ))}
              </div>

              {/* Native ad placement */}
              <AdUnit placement={adPlacements[1]} className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.slice(2).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={adaptArticleForDisplay(article)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles
                  .sort((a, b) => b.likes - a.likes)
                  .map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={adaptArticleForDisplay(article)}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles
                  .sort(
                    (a, b) =>
                      (b.comments.length || 0) - (a.comments.length || 0)
                  )
                  .map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={adaptArticleForDisplay(article)}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-center mt-8">
            <Button variant="outline" className="gap-2">
              <span>Load More Articles</span>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="sticky top-24">
            {/* Sidebar ad unit */}
            <AdUnit
              placement={adPlacements[0]}
              className="mb-8"
            />

            {/* <TrendingTags tags={trendingTags} /> */}
            <div className="h-6"></div>
            <AuthorHighlights authors={popularAuthors} />

            {/* Newsletter signup */}
            <div className="mt-8 p-4 border rounded-lg bg-muted/30">
              <h3 className="text-lg font-medium mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md px-3 py-2 border bg-background"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
