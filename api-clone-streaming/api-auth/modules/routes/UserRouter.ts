import { Router, Request, Response } from "express";
import UserController from "../controllers/UserController.ts";

const router = Router();
const controller = new UserController();

router.post("/login", (req, res) => controller.login(req, res));
router.post("/register", (req, res) => controller.register(req, res));

export default router;