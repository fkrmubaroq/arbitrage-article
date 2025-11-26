import { getDb } from "../lib/db.js";
import type { Article, CreateArticleDto } from "../types/article.js";

export async function findAllArticles(limit = 10): Promise<Article[]> {
  const db = await getDb();
  const [rows] = await db.query(
    "SELECT * FROM articles ORDER BY created_at DESC LIMIT ?",
    [limit],
  );
  return rows as Article[];
}

export async function findArticleBySlug(slug: string): Promise<Article | null> {
  const db = await getDb();
  const [rows] = await db.query(
    "SELECT * FROM articles WHERE slug = ?",
    [slug],
  );
  const articles = rows as Article[];
  return articles[0] || null;
}

export async function findArticleById(id: number): Promise<Article | null> {
  const db = await getDb();
  const [rows] = await db.query(
    "SELECT * FROM articles WHERE id = ?",
    [id],
  );
  const articles = rows as Article[];
  return articles[0] || null;
}

export async function createArticle(data: CreateArticleDto): Promise<Article> {
  const db = await getDb();
  const [result] = await db.query(
    `INSERT INTO articles (title, slug, thumbnail, category, content_html) 
     VALUES (?, ?, ?, ?, ?)`,
    [
      data.title,
      data.slug,
      data.thumbnail || null,
      data.category || null,
      data.content_html,
    ],
  );
  const insertResult = result as { insertId: number };
  const article = await findArticleById(insertResult.insertId);
  if (!article) {
    throw new Error("Failed to create article");
  }
  return article;
}

export default {
  findAllArticles,
  findArticleBySlug,
  findArticleById,
  createArticle,
}