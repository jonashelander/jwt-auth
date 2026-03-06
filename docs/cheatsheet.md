# Backend Cheat Sheet

## Start server

```bash
npm run dev
```

## Express response

```ts
res.send("text");

res.json({ key: value });

res.status(200).json({ message: "ok" });
```

## Route definition

```ts
router.get("/path", handler);

router.post("/path", handler);
```

## Testing

```ts
request(app).get("/endpoint")

expect(res.status).toBe(200)

expect(res.body).toEqual({...})
```
