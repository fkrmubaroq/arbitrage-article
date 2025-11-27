import { Button } from "@/components/ui/button";
import {
  BookmarkIcon,
  FacebookIcon,
  MailIcon,
  TwitterIcon
} from "lucide-react";
import {
  useArticleHandleContext,
  useArticleStateContext
} from "./_context/article-provider-context";

export default function ArticleFooterWithReaction({
  article,
}: {
  article: Article;
}) {
  const { reactionType, isBookmarked } = useArticleStateContext();
  const { handleReaction, handleShare, handleBookmark } =
    useArticleHandleContext();

  return (
    <div className="mt-10 pt-6 border-t">     
      <div className="flex items-center justify-between mt-6">        
        <div className="flex items-center gap-2">
          {/* Social share options */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => handleShare("Facebook")}
          >
            <FacebookIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => handleShare("Twitter")}
          >
            <TwitterIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => handleShare("Email")}
          >
            <MailIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full hover:bg-primary/5 ${isBookmarked ? "bg-primary/10" : ""
              }`}
            onClick={() => {        
              handleBookmark(!isBookmarked)
            }}
          >
            
            <BookmarkIcon
              className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
