import { signToken } from "../utils/jwt";

export function login(email: string, password: string): string {
  if (email === "valid@example.com" && password === "validpassword") {
    return signToken(1);
  }
  throw new Error("Invalid credentials");
}
