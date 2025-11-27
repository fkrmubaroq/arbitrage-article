"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Article {
  id: string;
  coverImage: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  readingTime: string;
}

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border glass-card hover-scale">
      <img
        src={article.coverImage}
        alt={article.title}
        className="aspect-video w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-24">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-sm font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-2xl font-bold text-white line-clamp-2">
          {article.title}
        </h3>
        <div className="mt-3 flex items-center gap-3 text-white/80">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
              />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{article.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <Link
            href={`/article/${article.id}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Read Now
          </Link>
          <Link
            href={`/read/${article.id}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Enhanced Reader
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
