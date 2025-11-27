"use client";
import useGetArticle, { ResponseGetArticles } from "@/app/api/_hooks/article/use-get-article";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUser } from "@/lib/hooks/use-user";
import { useCallback } from "react";
import { toast } from "sonner";
import {
  ArticleProviderContext,
  ArticleProviderHandleContext,
  useArticleDispatchContext,
} from "./_context/article-provider-context";
import ArticleContent from "./article-content";
import ArticleHeader from "./article-header";
import CommentSection from "./comment-section";
import NavigationArticle from "./navigation-article";
import SkeletonArticleIndex from "./skeleton/skeleton-article-index";

export default function ArticleIndex({ slug }: { slug: string }) {
  const { data, isLoading } = useGetArticle({ slug });
  const article = data?.data[0];
  if (isLoading) {
    return <SkeletonArticleIndex />
  }
  return (
    <ArticleProviderContext>
      <NavigationArticle slug={slug} />
      <TooltipProvider>
        <MainComponent article={article} />
      </TooltipProvider>
    </ArticleProviderContext>
  );
}

function MainComponent({ article }: { article: ResponseGetArticles["data"][0] }) {


  const { user } = useUser();
  const dispatchArticle = useArticleDispatchContext();

  const handleBookmark = useCallback(
    (isBookmarked: boolean) => {
      if (!user) {
        toast("Sign in required", {
          description: "Please sign in to bookmark this article",
        });
        return;
      }
      toast(isBookmarked ? "Bookmark removed" : "Article bookmarked", {
        description: isBookmarked
          ? "This article has been removed from your saved items"
          : "This article has been saved to your reading list",
      });
    },
    [user]
  );

  const handleReaction = useCallback(
    (type: string | null) => {
      if (!user) {
        toast("Sign in required", {
          description: "Please sign in to react to this article",
        });
        return;
      }

      dispatchArticle({
        type: "SET_REACTION_TYPE",
        payload: type,
      });
      toast(!type ? "Reaction removed" : `You reacted with ${type}!`, {
        description: !type
          ? "Your reaction has been removed"
          : "Thank you for sharing how this article made you feel",
      });
    },
    [dispatchArticle, user]
  );

  const handleShare = useCallback((share: string) => { }, []);
  if (!article) return null;

  return (
    <ArticleProviderHandleContext.Provider
      value={{ handleBookmark, handleReaction, handleShare }}
    >
      <div className="container max-w-3xl py-10">
        <ArticleHeader article={article} />
        {/* {article.monetization?.enableAds && <PlaceholderAd />} */}
        <ArticleContent content={article.content} tags={article.tags || ""} />


        {/* {article.monetization?.enableAds && */}
        {/* article.monetization?.adDensity !== "low" && <PlaceholderAd />} */}
        {/* {article.monetization?.enableAffiliates && <RelatedProduct />} */}
        {/* {article.monetization?.memberOnly && !user && <PremiumContentTeaser />} */}

        {/* {article.monetization?.enableAds && <PlaceholderAd />} */}
        <CommentSection article={article} />
      </div>
    </ArticleProviderHandleContext.Provider>
  );
}
