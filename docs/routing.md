# Routing

Routes define API endpoints.

Example:

router.post("/placeholder", placeholder);

Meaning:

HTTP method: POST
Path: /placeholder
Handler: placeholder

## Router mounting

In app.ts:

app.use("/api/auth", authRoutes);

This adds a prefix to all routes in the router.

Example:

router.post("/login")

becomes:

POST /api/auth/login
