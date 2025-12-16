import { ENV } from "@/lib/env";
import { useQuery } from "@tanstack/react-query";

async function fetchArticles(limit = 6): Promise<Article[]> {
  const response = await fetch(`${ENV.API_BASE_URL}/articles?limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

export function useArticles(limit = 6) {
  return useQuery({
    queryKey: ["articles", limit],
    queryFn: () => fetchArticles(limit),
  });
}
