import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getArticleBySlug,
} from "@/services/article-service";
import {
  getTrackingData,
  logPageview,
} from "@/services/tracking-service";
import { AdSlot } from "@/components/sections/ad-slot";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.content_html
      ? article.content_html.replace(/<[^>]*>/g, "").substring(0, 160)
      : "",
    openGraph: {
      title: article.title,
      images: article.thumbnail ? [article.thumbnail] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Track pageview
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const referrer = headersList.get("referer") || "";
  const trackingData = await getTrackingData(
    `/articles/${params.slug}`,
    article.id,
    userAgent,
    referrer,
  );
  await logPageview(trackingData);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: article.thumbnail || "",
    datePublished: article.created_at,
    dateModified: article.created_at,
    author: {
      "@type": "Organization",
      name: "Arbitrage Ads",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen">
        <AdSlot position="top" className="mb-8" />

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            {article.category && (
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                {article.category}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="text-sm text-muted-foreground">
              {new Date(article.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </header>

          {/* Thumbnail */}
          {article.thumbnail && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* Ad Slot in Article */}
          <AdSlot position="in-article" />

          {/* Article Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: article.content_html || "" }}
          />

          {/* Bottom Ad Slot */}
          <AdSlot position="bottom" />
        </div>
      </article>
    </>
  );
}

