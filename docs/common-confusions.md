# Common Confusions

## Express handlers return void

Express ignores return values.
Always send responses with res.

Wrong:

return "Hello World"

Correct:

res.json({ message: "Hello World" })

## res.body vs res.text

res.json(...)
→ use res.body

res.send("text")
→ use res.text

## Function references

Routes expect a function reference.

Correct:

router.post("/login", loginController)

Incorrect:

router.post("/login", loginController())

## JSON response structure

Example:

res.json({ message: "Hello World" })

Client receives:

{
  "message": "Hello World"
}

message is just a property name.
