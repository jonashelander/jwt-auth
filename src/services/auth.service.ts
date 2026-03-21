import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt";
import { createUser, findUserByEmail } from "../repositories/auth.repository";

const SALT_ROUNDS = 10;

export async function register(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = findUserByEmail(normalizedEmail);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const user = createUser(normalizedEmail, hashedPassword);
  return user;
}

export async function login(email: string, password: string): Promise<string> {
  const normalizedEmail = email.trim().toLowerCase();
  const user = findUserByEmail(normalizedEmail);
  if (user && (await bcrypt.compare(password, user.password))) {
    return signToken(user.id);
  }
  throw new Error("Invalid credentials");
}
