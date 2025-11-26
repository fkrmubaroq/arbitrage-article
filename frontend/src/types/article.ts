export interface Article {
  id: number;
  slug: string;
  title: string;
  thumbnail: string | null;
  category: string | null;
  content_html: string | null;
  created_at: Date | string;
}

export interface CreateArticleDto {
  title: string;
  slug: string;
  thumbnail?: string;
  category?: string;
  content_html: string;
}

