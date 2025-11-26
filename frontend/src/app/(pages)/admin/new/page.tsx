"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateArticle } from "@/hooks/use-create-article";

export default function NewArticlePage() {
  const router = useRouter();
  const createArticleMutation = useCreateArticle();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    thumbnail: "",
    category: "",
    content_html: "",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    createArticleMutation.mutate(formData, {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error: Error) => {
        alert(`Error: ${error.message || "Failed to create article"}`);
      },
    });
  };

  const handleAiGenerate = () => {
    if (!formData.title) {
      alert("Please enter a title first");
      return;
    }

    // This would typically call an AI API
    // For now, we'll just show a placeholder
    alert(
      "AI generation feature: Use Cursor AI to generate content based on the title.",
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
          <CardDescription>
            Fill in the details below to create a new article
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title *
              </label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter article title"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-medium">
                Slug (URL-friendly) *
              </label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                placeholder="article-slug"
                required
              />
              <p className="text-xs text-muted-foreground">
                Auto-generated from title if left empty
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="thumbnail" className="text-sm font-medium">
                Thumbnail URL
              </label>
              <Input
                id="thumbnail"
                type="url"
                value={formData.thumbnail}
                onChange={(e) =>
                  setFormData({ ...formData, thumbnail: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Content (HTML) *
              </label>
              <Textarea
                id="content"
                value={formData.content_html}
                onChange={(e) =>
                  setFormData({ ...formData, content_html: e.target.value })
                }
                placeholder="Enter article content in HTML format"
                rows={15}
                required
              />
            </div>

            <Separator />

            <div className="flex gap-4">
              <Button type="submit" disabled={createArticleMutation.isPending}>
                {createArticleMutation.isPending ? "Saving..." : "Save Article"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleAiGenerate}
                disabled={createArticleMutation.isPending}
              >
                AI Generate Content
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

