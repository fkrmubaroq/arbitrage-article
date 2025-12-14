interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  category_id: number | null;
  tags: string[] | null;
  status: "draft" | "published";
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  contents: string; // JSON string from BlockNote editor
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface ArticlePage {
  id: number;
  article_id: number;
  page_index: number;
  title: string | null;
  contents: any; // JSON content from BlockNote editor
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface CreateArticleDto {
  title: string;
  slug: string;
  excerpt?: string;
  category_id?: number | null;
  tags?: string;
  status?: "draft" | "published";
  cover_image_url?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  contents: string; // JSON string from BlockNote editor
  pages?: Array<{
    page_index: number;
    title?: string;
    contents: string; // JSON string from BlockNote editor
  }>;
}

declare namespace ContentService {

  interface BlockNoteContent {
    children: any[];
    content: Array<{
      type: string;
      text: string;
      style: any
    }>
    id: string;
    type: string;
    props: any;
  }
}