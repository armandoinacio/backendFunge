// jwt.ts
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET || "k@erew";

interface JwtPayload {
  sub: string;
  phone?: string;
}

export function generateToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "365d",
  });
}
