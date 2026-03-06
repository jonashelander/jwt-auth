# Testing (Jest + Supertest)

Supertest allows sending HTTP requests to the Express app during tests.

No real server is started.

Example test:

```ts
import request from "supertest";
import app from "../src/app";

it("POST /api/auth/placeholder returns 200", async () => {
  const res = await request(app).post("/api/auth/placeholder");

  expect(res.status).toBe(200);
  expect(res.body).toEqual({ message: "placeholder" });
});
```

---

## How request(app) works

`request(app)`

Creates a test client connected directly to the Express app.

Flow:

```
Supertest
↓
Express app
↓
router
↓
controller
↓
response
```

---

## res.body vs res.text

```ts
res.json({...})
```

→ use `res.body` in tests

```ts
res.send("text");
```

→ use `res.text`
