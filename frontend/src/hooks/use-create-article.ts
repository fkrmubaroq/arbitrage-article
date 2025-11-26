"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Article, CreateArticleDto } from "@/types/article";
import { ENV } from "@/lib/env";

async function createArticle(data: CreateArticleDto): Promise<Article> {
  const response = await fetch(`${ENV.API_BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create article");
  }

  const result = await response.json();
  return result.article;
}

export function useCreateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createArticle,
    onSuccess: () => {
      // Invalidate articles query to refetch
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

