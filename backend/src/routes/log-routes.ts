import express, { Router } from "express";
import { logEvent, logPageview } from "../controllers/log-controller.js";

const router: Router = express.Router();

router.post("/", logPageview);
router.post("/event", logEvent);

export default router;

