import { Request, Response } from "express";
import { login as loginService } from "../services/auth.service";

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
