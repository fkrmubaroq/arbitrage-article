import cloudinary from "@/lib/cloudinary";
import { Request, Response } from "express";

async function uploadImage(req: Request, res: Response) {
    try {
        const buffer = req
        const folder = "uploads/images";
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
              {
                folder,
                resource_type: "image", // image, video, pdf, dll
              },
              (error, result) => {
                if (error) reject(error);
                resolve(result);
              }
            ).end(buffer);
          });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ error: "Failed to upload file" });
    }
}

export default {
    uploadImage,
}