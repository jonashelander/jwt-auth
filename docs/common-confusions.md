# Common Confusions

## Express handlers return void

Express ignores return values.  
Always send responses with `res`.

Wrong:

```ts
return "Hello World";
```

Correct:

```ts
res.json({ message: "Hello World" });
```

---

## res.body vs res.text

```ts
res.json(...)
```

→ use `res.body`

```ts
res.send("text");
```

→ use `res.text`

---

## Function references

Routes expect a **function reference**.

Correct:

```ts
router.post("/login", loginController);
```

Incorrect:

```ts
router.post("/login", loginController());
```

---

## JSON response structure

Example:

```ts
res.json({ message: "Hello World" });
```

Client receives:

```json
{
  "message": "Hello World"
}
```

`message` is just a property name.
