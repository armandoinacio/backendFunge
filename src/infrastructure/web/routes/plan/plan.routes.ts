import { Router } from "express";
import { PlanController } from "../../controllers/plan/planController";
import { authMiddleware } from "../../../../shared/middleware/auth.middleware";
const routes=Router()

routes.get('/test', (req, res) => {
    res.send('Teste rota planos');
  });
  routes.post('/create',authMiddleware, new PlanController().createPlan)
export default routes

