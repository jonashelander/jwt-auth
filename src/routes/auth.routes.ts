import { Router } from "express";
import { placeholder, helloWorld } from "../controllers/auth.controller";

const router = Router();

// Placeholder route — implementation pending
router.post("/placeholder", placeholder);
router.get("/helloWorld", helloWorld);

export default router;
