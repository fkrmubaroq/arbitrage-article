import AdUnit from "@/components/monetization/ad-unit";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adPlacements, articles, featuredArticle, popularAuthors, trendingTags } from "@/data/mock-data";
import { Bell, Filter } from "lucide-react";
import { ArticleCard } from "./_components/article-card";
import ArticleSearch from "./_components/article-search";
import AuthModal from "./_components/auth-modal";
import { AuthorHighlights } from "./_components/author-highlight";
import FeaturedArticle from "./_components/featured-article";
import { TrendingTags } from "./_components/trending-tags";

export default function Home() {
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
    <>
      {/* Search and filters bar */}
      <section className="bg-muted/30 border-b py-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <ArticleSearch />

            <div className="flex items-center gap-2">
              <AuthModal />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 md:py-10 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Featured Article</h1>
        <FeaturedArticle article={featuredArticle} />
      </section>

      <section className="container py-8 mx-auto">
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

              <TrendingTags tags={trendingTags} />
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

      <section className="bg-muted py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Subscribe to our newsletter and get the latest articles, news, and
            updates directly to your inbox.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md px-4 py-2 border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Join over 10,000 readers who trust our content. <br />
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>
    </>
  );
}
