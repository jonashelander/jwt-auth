import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(400).json({ message: "Authorization header missing" });
    return;
  }

  if (!authHeader.startsWith("Bearer ")) {
    res.status(400).json({ message: "Invalid authorization header format" });
    return;
  }

  const token = authHeader.slice("Bearer ".length).trim();

  if (!token) {
    res.status(400).json({ message: "Token missing" });
    return;
  }

  try {
    const payload = verifyToken(token);
    (req as any).user = { id: payload.userId };
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
