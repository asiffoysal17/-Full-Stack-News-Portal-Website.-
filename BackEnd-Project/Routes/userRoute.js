import express from "express";
import authMiddleware from "../Middleware/authMiddleware";
import {
  getMyNews,
  getProfile,
  updateProfile,
} from "../Controllers/userController";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.get("/my-news", authMiddleware, getMyNews);

export default router;
