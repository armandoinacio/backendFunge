import express from "express";
import cors from "cors";
import userRoutes from "./infrastructure/web/routes/auth/user.routes";
import authRoutes from "./infrastructure/web/routes/auth/auth.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/auth", authRoutes)
