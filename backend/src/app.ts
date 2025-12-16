import cors from "cors";
import express, { Express } from "express";
import articleRoutes from "./routes/article-routes.js";
import logRoutes from "./routes/log-routes.js";
import uploadRoutes from "./routes/upload-routes.js";

const app: Express = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend API is running" });
});

// Routes
app.use("/api/article", articleRoutes);
app.use("/api/log", logRoutes);
app.use("/api/upload", uploadRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;

