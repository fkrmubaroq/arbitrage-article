import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthorBio({ article }: { article:Article}) {
  return (
    <div className="mt-10">
      <Card className="bg-primary/5 border-primary/10">
        <CardContent className="pt-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Avatar className="w-16 h-16 border-2 border-background">
            <AvatarImage
              src={article.author.avatar}
              alt={article.author.name}
            />
            <AvatarFallback className="text-lg">
              {article.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-bold">{article.author.name}</h3>
            <p className="mt-1 text-muted-foreground">{article.author.bio}</p>
            <Button className="mt-3 rounded-full" size="sm">
              Follow
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
