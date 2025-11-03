import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to your dashboard!",
    user: req.user, // decoded user info from JWT
  });
});

export default router;
