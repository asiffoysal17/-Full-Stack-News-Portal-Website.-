import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getSingleNews,
  getTopNews,
  updateNews,
} from "../Controllers/newController";
import authMiddleware from "../Middleware/authMiddleware";

const router = express.Router();

router.get("/", getAllNews);
router.get("/top", getTopNews);
router.get("/:id", getSingleNews);
router.post("/", authMiddleware, createNews);
router.put("/:id", authMiddleware, updateNews);
router.delete("/:id", authMiddleware, deleteNews);

export default router;
