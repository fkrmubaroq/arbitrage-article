import { ResponseGetArticles } from "@/app/api/_hooks/article/use-get-article";
import { Button } from "@/components/ui/button";

export default function CommentSection({ article }: { article: ResponseGetArticles["data"][0] }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-6">
        Comments ({article._count.comments})
      </h3>
      <div className="space-y-6">
        {/* {article.comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 group">
            <Avatar>
              <AvatarImage
                src={comment.author.avatar}
                alt={comment.author.name}
              />
              <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{comment.author.name}</h4>
                <span className="text-xs text-muted-foreground">
                  {comment.publishedAt}
                </span>
              </div>
              <p className="mt-1">{comment.content}</p>
              <div className="mt-2 flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                <button className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors">
                  <HeartIcon className="h-3 w-3" />
                  <span>{comment.likes}</span>
                </button>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      {/* Add comment form with friendly message */}
      <div className="mt-8">
        <h4 className="font-medium mb-2">Join the conversation</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Your thoughts matter to us. Feel free to share what resonated with
          you.
        </p>
        <textarea
          placeholder="Your thoughts on this article..."
          className="w-full rounded-md border p-3 min-h-[100px] text-sm focus:ring-1 focus:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        ></textarea>
        <div className="mt-2 flex justify-end">
          <Button size="sm" className="rounded-full">
            Share Your Thoughts
          </Button>
        </div>
      </div>
    </div>
  );
}
