"use client";

import { AdSlot } from "@/components/sections/ad-slot";
import { ArticleCard, ArticleCardSkeleton } from "@/components/sections/article-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useArticles } from "@/hooks/use-articles";
import { useLogPageview } from "@/hooks/use-log-pageview";
import {
  getTrackingDataClient,
  parseUtmFromSearchParamsClient,
  saveUtmToCookiesClient,
} from "@/lib/tracking-client";
import type { Article } from "@/types/article";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  const { data: articles = [], isLoading, error } = useArticles(6);
  const logPageviewMutation = useLogPageview();

  useEffect(() => {
    // Handle UTM parameters from URL
    const searchParams = new URLSearchParams(window.location.search);
    const utm = parseUtmFromSearchParamsClient(searchParams);
    
    // Save UTM to cookies if present
    if (utm.utm_source || utm.utm_campaign || utm.utm_term) {
      saveUtmToCookiesClient(utm);
    }

    // Track pageview
    const trackPageview = async () => {
      const trackingData = await getTrackingDataClient("/", undefined);
      logPageviewMutation.mutate(trackingData);
    };

    trackPageview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen">
      <AdSlot position="top" className="mb-8" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl md:text-5xl font-bold">
              Welcome to Quality Articles
            </CardTitle>
            <CardDescription className="text-lg md:text-xl">
              Discover insightful articles and stay informed with our curated
              content
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild size="lg">
              <Link href="#articles">Explore Articles</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Latest Articles */}
      <section id="articles" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <ArticleCardSkeleton key={`${index.toString()}`} />
              ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-destructive">Failed to load articles. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article: Article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      <AdSlot position="bottom" className="mt-8" />
    </div>
  );
}
