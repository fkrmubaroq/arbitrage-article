import express, { Router } from "express";
import articleController from "../controllers/article-controller.js";

const router: Router = express.Router();

router.get("/", articleController.getArticles);
router.post("/", articleController.createArticle);

export default router;
