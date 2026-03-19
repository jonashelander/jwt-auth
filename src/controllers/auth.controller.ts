import { Request, Response } from "express";
import { login as loginService, register as registerService } from "../services/auth.service";

export const register = (_req: Request, res: Response): void => {
  const { email, password } = _req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Missing credentials" });
    return;
  }

  try {
    const user = registerService(email, password);

    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    if (error instanceof Error && error.message === "Email already in use") {
      res.status(409).json({ message: "Email already in use" });
      return;
    }

    throw error;
  }
};

export const login = (_req: Request, res: Response): void => {
  const { email, password } = _req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Missing credentials" });
    return;
  }

  try {
    const token = loginService(email, password);
    res.status(200).json({ accessToken: token });
  } catch {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const me = (_req: Request, res: Response): void => {
  const user = (_req as any).user;

  if (!user || typeof user.id !== "number") {
    res.status(500).json({ message: "User not found on request" });
    return;
  }

  res.status(200).json({ userId: user.id });
};
