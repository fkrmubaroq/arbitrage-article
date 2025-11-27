import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface SeoPreviewProps {
  title: string;
  description: string;
  slug: string;
}

const SeoPreview: React.FC<SeoPreviewProps> = ({
  title,
  description,
  slug,
}) => {
  const baseUrl = "yourdomain.com";
  const truncateDescription = (text: string, maxLength: number = 160) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + "...";
  };

  return (
    <Card className="overflow-hidden border shadow-sm">
      <CardContent className="p-4">
        <h3 className="text-sm font-medium mb-2">Google Search Preview</h3>
        <div className="border p-3 rounded-md bg-white">
          <div className="text-blue-600 text-lg font-medium truncate">
            {title || "Article Title"}
          </div>
          <div className="text-green-700 text-xs mb-1">
            {baseUrl}/{slug || "article-slug"}
          </div>
          <div className="text-gray-600 text-sm">
            {description
              ? truncateDescription(description)
              : "Add a meta description to preview how your article will appear in search results..."}
          </div>
        </div>

        <div className="mt-3 space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Title: {title ? title.length : 0}/60 characters</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                description && description.length <= 160
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            ></div>
            <span>
              Description: {description ? description.length : 0}/160 characters
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                slug ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span>URL Slug: {slug ? "Valid" : "Missing"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeoPreview;
