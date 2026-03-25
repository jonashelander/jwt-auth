import request from "supertest";
import app from "../src/app";
import jwt from "jsonwebtoken";

const login = (body: any) => request(app).post("/api/auth/login").send(body);

const register = (body: any) =>
  request(app).post("/api/auth/register").send(body);

describe("POST /api/auth/register", () => {
  it("returns 400 if email or password is missing", async () => {
    const res = await register({});

    expect(res.status).toBe(400);
  });

  it("returns 201 when registering a new user", async () => {
    const res = await register({
      email: "newuser@example.com",
      password: "newpassword",
    });

    expect(res.status).toBe(201);
  });

  it("returns 409 when email already exists", async () => {
    // first register succeeds
    await register({
      email: "duplicate@example.com",
      password: "somepassword",
    });

    // second register with same email should fail
    const res = await register({
      email: "duplicate@example.com",
      password: "anotherpassword",
    });

    expect(res.status).toBe(409);
  });
});

describe("POST /api/auth/login", () => {
  it("returns 400 if credentials are missing", async () => {
    const res = await login({});
    expect(res.status).toBe(400);
  });

  it("returns 401 if credentials are invalid", async () => {
    await register({
      email: "testuser401@example.com",
      password: "correctpassword",
    });

    const res = await login({
      email: "testuser401@example.com",
      password: "wrongpassword",
    });
    expect(res.status).toBe(401);
  });

  it("returns accessToken when credentials are valid", async () => {
    await register({
      email: "testuser200@example.com",
      password: "testpassword",
    });

    const res = await login({
      email: "testuser200@example.com",
      password: "testpassword",
    });
    expect(res.status).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  it("returns a valid JWT when credentials are valid", async () => {
    await register({
      email: "testuserjwt@example.com",
      password: "jwtpassword",
    });

    const res = await login({
      email: "testuserjwt@example.com",
      password: "jwtpassword",
    });

    const token = res.body.accessToken;

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: number;
    };

    expect(decoded.userId).toBeDefined();
  });
});

describe("GET /api/auth/me", () => {
  it("returns 400 if Authorization header is missing", async () => {
    const res = await request(app).get("/api/auth/me");

    expect(res.status).toBe(400);
  });

  it("returns 401 if token is invalid", async () => {
    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", "Bearer invalid.token.here");

    expect(res.status).toBe(401);
  });

  it("returns 200 and userId when token is valid", async () => {
    await register({
      email: "testuserme@example.com",
      password: "mepassword",
    });

    const loginRes = await login({
      email: "testuserme@example.com",
      password: "mepassword",
    });

    const token = loginRes.body.accessToken;

    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.userId).toBeDefined();
  });
});
