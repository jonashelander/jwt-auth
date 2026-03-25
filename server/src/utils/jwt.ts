import jwt from "jsonwebtoken";

export function signToken(userId: number) {
  return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
}

export function verifyToken(token: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    userId: number;
  };
  return decoded;
}
