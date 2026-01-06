import { Router } from "express";
import { AuthController } from "../../controllers/auth/AuthController";

const routes = Router();
const authController = new AuthController();

routes.get("/login", authController.login);

export default routes;
