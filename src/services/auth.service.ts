import { signToken } from "../utils/jwt";
import { createUser, findUserByEmail } from "../repositories/auth.repository";

export function login(email: string, password: string): string {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return signToken(user.id);
  }
  throw new Error("Invalid credentials");
}

export function register(email: string, password: string) {
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const user = createUser(email, password);
  return user;
}
