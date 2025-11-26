import { Request, Response } from "express";
import articleModel, { findAllArticles } from "../models/article-model.js";
import type { CreateArticleDto } from "../types/article.js";

async function getArticles(req: Request, res: Response) {
  try {
    const limit = Number.parseInt(req.query.limit as string || "10", 10);
    const articles = await findAllArticles(limit);
    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
}

async function createArticle(req: Request, res: Response) {
  try {
    const { title, slug, thumbnail, category, content_html } = req.body;

    if (!title || !slug || !content_html) {
      return res.status(400).json({
        error: "Title, slug, and content are required",
      });
    }

    const articleData: CreateArticleDto = {
      title,
      slug,
      thumbnail,
      category,
      content_html,
    };

    const article = await articleModel.createArticle(articleData);
    res.status(201).json({ success: true, article });
  } catch (error: unknown) {
    console.error("Error creating article:", error);
    if (error instanceof Error && error.message.includes("Duplicate entry")) {
      return res.status(400).json({
        error: "An article with this slug already exists",
      });
    }
    res.status(500).json({ error: "Failed to create article" });
  }
}

export default {
  getArticles,
  createArticle,
}