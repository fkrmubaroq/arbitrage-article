import { Request, Response } from "express";

async function uploadImage(req: Request, res: Response) {
    try {
        // const file = req.file;
        // console.log("file", file);
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ error: "Failed to upload file" });
    }
}

export default {
    uploadImage,
}