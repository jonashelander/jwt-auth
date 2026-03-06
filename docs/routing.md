# Routing

Routes define API endpoints.

Example:

```ts
router.post("/placeholder", placeholder);
```

Meaning:

```
HTTP method: POST
Path: /placeholder
Handler: placeholder
```

---

## Router mounting

In `app.ts`:

```ts
app.use("/api/auth", authRoutes);
```

This adds a prefix to all routes in the router.

Example route in the router:

```ts
router.post("/login");
```

Becomes the final endpoint:

```
POST /api/auth/login
```
