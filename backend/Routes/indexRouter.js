import express from "express";
import signUpUserRouter from "../Routes/signUpUserRouter.js";
import eventRegistrationUserRouter from "../Routes/eventRegistrationUserRouter.js";

const router = express.Router();

router.use("/", signUpUserRouter);
router.use("/registration", eventRegistrationUserRouter);

export default router;