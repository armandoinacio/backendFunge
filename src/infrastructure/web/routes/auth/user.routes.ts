import { Router } from "express";
import { CreateUserController } from "../../controllers/auth/CreateUserController";
import { AuthController } from "../../controllers/auth/AuthController";
import { PlanController } from "../../controllers/plan/planController";
import { authMiddleware } from "../../../../shared/middleware/auth.middleware";
const routes = Router();

routes.post("/auth/login", new AuthController().login);
routes.post("/plan/create",authMiddleware, new PlanController().createPlan);
routes.post("/users/signup", new CreateUserController().handle);
routes.get("/users/phone/:telefone", new CreateUserController().findByPhone);
export default routes;
