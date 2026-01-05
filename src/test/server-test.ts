import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Rota mínima de teste
app.post("/api/auth/login", (req: Request, res: Response) => {
  console.log("Login handler reached!");
  console.log("Body:", req.body);
  res.status(200).json({ message: "Login route OK" });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
