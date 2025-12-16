import uploadController from "@/controllers/upload-controller";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/image", uploadController.uploadImage);

export default router;