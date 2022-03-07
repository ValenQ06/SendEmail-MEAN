import express from "express";
import user from "../controllers/user.js";
import email from "../controllers/emailController.js";
import auth from "../middlewares/auth.js";
import userMidd from "../middlewares/user.js";

const router = express.Router();

router.post("/register",userMidd.existingUser, user.registerUser);
router.post("/login", user.login);
router.post("/email",auth,email.sendEmail);

export default router;
