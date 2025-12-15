import articleSchema from "@/validation/article-schema.js";
import { Request, Response } from "express";
import * as v from "valibot";
import articleModel, { findAllArticles } from "../models/article-model.js";

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
    const result = v.safeParse(articleSchema.createArticleSchema, req.body);

    if (!result.success) {
      const errors = result.issues.map((issue) => ({
        path: issue.path?.map((p) => p.key).join(".") || "root",
        message: issue.message,
      }));

      return res.status(400).json({
        error: "Validation failed",
        details: errors,
      });
    }

    const validatedData = result.output;

    const articleData: CreateArticleDto = {
      title: validatedData.title,
      slug: validatedData.slug,
      excerpt: validatedData.excerpt,
      category_id: validatedData.category_id,
      tags: validatedData.tags,
      status: validatedData.status || "draft",
      cover_image_url: validatedData.cover_image_url,
      meta_title: validatedData.meta_title,
      meta_description: validatedData.meta_description,
      contents: validatedData.contents,
    };

    await articleModel.createArticle(articleData);

    res.status(201).json({ message: "Article created successfully" });
  } catch (error: unknown) {
    console.error("Error creating article:", error);
    if (error instanceof Error && error.message.includes("Duplicate entry")) {
      return res.status(400).json({
        error: "An article with this slug already exists",
      });
    }
    res.status(500).json({ error: "Failed to create article" });
  }
  finally {
    res.end();
  }
}

export default {
  getArticles,
  createArticle,
}