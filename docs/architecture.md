# Architecture Overview

Project structure follows a common Express backend pattern.

Request flow:

Client
↓
server.ts
↓
app.ts
↓
routes
↓
controllers
↓
response

## File responsibilities

server.ts
Starts the server and loads environment variables.

app.ts
Creates and configures the Express app.
Registers middleware and routes.

routes/
Defines API endpoints and maps them to controller functions.

controllers/
Contains business logic and sends responses.

repositories/
Handles data access (database, storage, etc).

tests/
Contains Jest + Supertest tests.
