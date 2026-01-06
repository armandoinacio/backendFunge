import express from "express";
import cors from "cors";
import userRoutes from "./infrastructure/web/routes/auth/user.routes";
import authRoutes from "./infrastructure/web/routes/auth/auth.routes";
import { authMiddleware } from "./shared/middleware/auth.middleware";
import planRoutes from "./infrastructure/web/routes/plan/plan.routes";

 export const  app = express();

app.use(express.json());
app.use(cors({
    origin: '*', // Apenas para teste
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
  
app.use("/api", userRoutes);
app.use("/auth", authRoutes);


