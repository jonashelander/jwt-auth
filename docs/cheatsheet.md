# Backend Cheat Sheet

## Start server

npm run dev

## Express response

res.send("text")

res.json({ key: value })

res.status(200).json({ message: "ok" })

## Route definition

router.get("/path", handler)

router.post("/path", handler)

## Testing

request(app).get("/endpoint")

expect(res.status).toBe(200)

expect(res.body).toEqual({...})
