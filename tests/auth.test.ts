import request from "supertest";
import app from "../src/app";
import jwt from "jsonwebtoken";

const login = (body: any) => request(app).post("/api/auth/login").send(body);

describe("POST /api/auth/login", () => {
  it("returns 400 if credentials are missing", async () => {
    const res = await login({});
    expect(res.status).toBe(400);
  });

  it("returns 401 if credentials are invalid", async () => {
    const res = await login({
      email: "invalid@example.com",
      password: "invalidpassword",
    });
    expect(res.status).toBe(401);
  });

  it("returns accessToken when credentials are valid", async () => {
    const res = await login({
      email: "valid@example.com",
      password: "validpassword",
    });
    expect(res.status).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  it("returns a valid JWT when credentials are valid", async () => {
    const res = await login({
      email: "valid@example.com",
      password: "validpassword",
    });

    const token = res.body.accessToken;

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: number;
    };

    expect(decoded.userId).toBeDefined();
  });
});
