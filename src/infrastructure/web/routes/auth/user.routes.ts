import { Router } from "express";
import { CreateUserController } from "../../controllers/auth/CreateUserController";
import { AuthController } from "../../controllers/auth/AuthController";
import { PlanController } from "../../controllers/plan/planController";
import { authMiddleware } from "../../../../shared/middleware/auth.middleware";
import { SubsController } from "../../controllers/sub/SubsController";
const routes = Router();

// Auth
routes.post("/auth/login", new AuthController().login);
routes.post("/users/signup", new CreateUserController().handle);
routes.get("/users/phone/:telefone",authMiddleware, new CreateUserController().findByPhone);
// Plan
routes.post("/plan/create",authMiddleware, new PlanController().createPlan);
routes.get("/plan/get",authMiddleware, new PlanController().getAll);
routes.get("/plan/:id",authMiddleware, new PlanController().getById);
routes.delete("/plan/:id",authMiddleware, new PlanController().remove);
routes.put("/plan/update",authMiddleware, new PlanController().update);
// Sub
routes.post("/sub/new",authMiddleware, new SubsController().subscribe);
routes.get("/sub/get",authMiddleware, new SubsController().getSubscribers);
routes.get("/subb/:id",authMiddleware, new SubsController().getSubscriberById);
routes.delete("/sub/:id",authMiddleware, new SubsController().unsubscribe);
export default routes;
