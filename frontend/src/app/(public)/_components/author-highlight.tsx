import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface AuthorHighlightsProps {
  authors: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    followers: number;
  }[];
}

export function AuthorHighlights({ authors }: AuthorHighlightsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Popular Authors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {authors.map((author) => (
          <div
            key={author.id}
            className="flex items-center justify-between group"
          >
            <Link
              href={`/author/${author.id}`}
              className="flex items-center gap-3"
            >
              <Avatar>
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {author.name}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {author.bio}
                </p>
              </div>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs h-8"
            >
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
