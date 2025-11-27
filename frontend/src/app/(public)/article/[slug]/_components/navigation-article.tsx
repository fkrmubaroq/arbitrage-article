"use client"
import useGetArticle from "@/app/api/_hooks/article/use-get-article";
import { getThumbnailUrl } from "@/lib/server/supabase";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationArticle({ slug }: { slug: string }) {

  const { data } = useGetArticle({ slug });
  const article = data?.data[0];
  return (
    <>
      {/* Back button */}
      <div className="container max-w-4xl pt-6">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors gap-1 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to articles</span>
        </Link>
      </div>

      {/* Hero section with cover image */}
      {article?.thumbnail &&
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            fill
            src={getThumbnailUrl(article.thumbnail)}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      }
    </>
  );
}
