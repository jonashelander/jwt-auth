import { Request, Response } from "express";

// Placeholder — authentication logic not yet implemented
export const placeholder = (_req: Request, res: Response): void => {
  res.status(200).json({ message: "placeholder" });
};

export const helloWorld = (_req: Request, res: Response): void => {
  res.status(200).json({ message: "Hello World!" });
};
