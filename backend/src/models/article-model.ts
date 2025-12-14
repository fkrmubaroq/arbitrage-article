import contentService from "@/services/content-service.js";
import { getDb } from "../lib/db.js";

export async function findAllArticles(limit = 10): Promise<Article[]> {
  const db = await getDb();
  const [rows] = await db.query(
    "SELECT * FROM articles ORDER BY createdAt DESC LIMIT ?",
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
  const pool = await getDb();
  const connection = await pool.getConnection();

  // Start transaction
  await connection.beginTransaction();

  try {
    console.log("BEGIN")
    // Insert article
    const [result] = await connection.query(
      `INSERT INTO articles (
        title, slug, excerpt, category_id, tags, status, 
        cover_image_url, meta_title, meta_description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.slug,
        data.excerpt || null,
        data.category_id || null,
        data.tags ? JSON.stringify(data.tags) : null,
        data.status || "draft",
        data.cover_image_url || null,
        data.meta_title || null,
        data.meta_description || null,
      ],
    );

    console.log("result", result, data)

    const insertResult = result as { insertId: number };
    const articleId = insertResult.insertId;

    console.log("articleId", articleId)

    const splitContent = await contentService.splitContentIntoPages(articleId, data.contents);
    if (!splitContent) {
      throw new Error("Failed to split content into pages");
    }


    for (const page of splitContent) {
      await connection.query(
        `INSERT INTO article_pages (article_id, page_index, title, contents)
           VALUES (?, ?, ?, ?)`,
        [
          page.article_id,
          page.page_index,
          page.title || null,
          page.contents,
        ],
      );
    }

    // Commit transaction
    await connection.commit();

    // Release connection back to pool
    connection.release();

    const article = await findArticleById(articleId);
    if (!article) {
      throw new Error("Failed to create article");
    }
    return article
  } catch (error) {
    console.log("error", error)
    // Rollback on error
    await connection.rollback();
    // Release connection back to pool
    connection.release();
    throw error;
  }
}

export default {
  findAllArticles,
  findArticleBySlug,
  findArticleById,
  createArticle,
}