import express from "express";
import { createNewRegistration, deleteRegistration, getRegistrations, updateRegistration } from "../Controllers/eventRegistrationController.js";
import { validateRegistrationBody } from "../Middleware/eventRegistrationUserMiddleware.js";
import { validateIdParam } from "../Middleware/validateParam.js";
import { validateJwt } from "../Middleware/validateJwtMiddleware.js";

const router = express.Router();

router.get("/", validateJwt, getRegistrations);
router.post("/", validateRegistrationBody ,createNewRegistration);
router.put("/:id", validateIdParam ,validateRegistrationBody ,updateRegistration);
router.delete("/:id", validateIdParam ,deleteRegistration);

export default router;