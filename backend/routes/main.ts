import express from "express";
import main from "../controller/main";
// import { requireAuth } from "../middleware/main";
const router = express.Router();

router.get("/test", main.doesThisWork);

export default router;

