import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios/api";
import articleKeys from "@/query-keys/article-keys";

export function useCreateArticle() {
  return useMutation({
    mutationFn: (data: ArticleApi.PayloadCreateArticle) => api.post<ArticleApi.PayloadArticle>("/articles", data),
  });
}

