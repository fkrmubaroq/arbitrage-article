"use client"
import { ResponseGetArticles } from "@/app/api/_hooks/article/use-get-article";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDateIdn } from "@/lib/date";
import { BookmarkIcon, ClockIcon, ShareIcon } from "lucide-react";
import {
  useArticleHandleContext,
  useArticleStateContext,
} from "./_context/article-provider-context";

export default function ArticleHeader({ article }: { article: ResponseGetArticles["data"][0] }) {
  const { isBookmarked } = useArticleStateContext();
  const { handleBookmark } = useArticleHandleContext();
  return (
    <div className="max-w-3xl -mt-16 relative z-10">
      <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-6 md:p-8 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          {article.title}
        </h1>

        <div className="flex md:items-center justify-between mt-6 md:flex-row flex-col md:gap-y-3 gap-y-0">

          <div className="flex items-center gap-4 cursor-pointer">
            <Avatar className="border-2 border-background">
              <AvatarFallback>
                {article.author.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{article.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                <span>{formatDateIdn(article.created_at, "d MMMM yyyy")}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-xs">
                  <ClockIcon className="h-4 w-4" />
                  {formatDateIdn(article.created_at, "HH:mm")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center mt-3 md:mt-0 md:justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ShareIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share article</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => () => {
                    handleBookmark(!isBookmarked);
                  }}
                >
                  <BookmarkIcon
                    className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`}
                  />
                  <span className="sr-only">Bookmark</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isBookmarked ? "Remove bookmark" : "Bookmark this article"}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
