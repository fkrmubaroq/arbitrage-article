"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface TrendingTagsProps {
  tags: {
    name: string;
    count: number;
  }[];
}

export function TrendingTags({ tags }: TrendingTagsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Trending Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link href={`/tag/${tag.name}`} key={tag.name}>
              <Badge
                variant="outline"
                className="hover:bg-primary/10 cursor-pointer"
              >
                {tag.name}{" "}
                <span className="ml-1 text-muted-foreground">
                  ({tag.count})
                </span>
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
