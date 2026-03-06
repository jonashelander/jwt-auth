# Express Basics

## Express handler

Express handlers usually return `void`.

Reason:  
Express ignores return values from the function.  
Responses must be sent using `res`.

Example:

```ts
export const helloWorld = (_req: Request, res: Response): void => {
  res.status(200).json({ message: "Hello World!" });
};
```

---

## req and res

`req`  
Incoming HTTP request.

`res`  
Object used to send response back to the client.

Example:

```ts
res.send("text");
res.json({ message: "Hello" });
res.status(200).json({ message: "Success" });
```

---

## Function reference in routes

Example:

```ts
router.post("/login", loginController);
```

We pass a function reference, not execute it.

Correct:

```ts
loginController;
```

Incorrect:

```ts
loginController();
```

Express will later call:

```ts
loginController(req, res);
```
