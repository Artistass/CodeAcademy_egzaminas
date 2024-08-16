import express from "express";
import { loginUser, registerNewUser } from "../Controllers/signUpController.js";
import { validateSignUpBody } from "../Middleware/signUpUserMiddleware.js";

const router = express.Router();

router.post("/register", validateSignUpBody ,registerNewUser);
router.post("/login", validateSignUpBody ,loginUser);

export default router;