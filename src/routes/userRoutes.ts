import { Router } from "express";
import { createUserController } from "../controllers/createUserController";

const router = Router();

router.post("/users", createUserController.createUser);

export default router;
