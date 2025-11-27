"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bookmark, Clock, Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      avatar: string;
    };
    publishedAt: string;
    readingTime: string;
    likes: number;
    comments: number;
    tags: string[];
    isFeatured?: boolean;
  };
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-md transition-shadow ${
        article.isFeatured ? "border-primary/50" : ""
      }`}
    >
      <Link href={`/article/${article.id}`} className="block overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 pt-5">
        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/article/${article.id}`}>
            <h3 className="font-bold text-lg line-clamp-2 hover:text-primary transition-colors">
              {article.title}
            </h3>
          </Link>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {article.excerpt}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col p-4 pt-0 space-y-4">
        <div className="flex items-center justify-between w-full text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
              />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs">{article.author.name}</span>
          </div>
          <div className="flex items-center text-muted-foreground gap-2">
            <Clock className="h-3 w-3" />
            <span className="text-xs">{article.readingTime}</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              <span>{article.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>{article.comments}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Bookmark className="h-3.5 w-3.5" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
