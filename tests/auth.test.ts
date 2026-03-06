import request from "supertest";
import app from "../src/app";

describe("Auth routes", () => {
  it("POST /api/auth/placeholder returns 200", async () => {
    const res = await request(app).post("/api/auth/placeholder");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "placeholder" });
  });

  it("GET /helloWorld returns 200", async () => {
    const res = await request(app).get("/api/auth/helloWorld");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello World!!!!!!" });
  });
});
