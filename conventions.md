# Project Conventions

## General

- Use TypeScript throughout the project.
- Prefer explicit types over `any`.
- Keep functions small and focused.
- Avoid over-engineering.
- Use meaningful variable names.
- Use async/await instead of `.then()`.

---

## Project Structure (Backend)

- `app.ts` must configure and export the Express app.
- `server.ts` must start the HTTP server.
- Do not call `app.listen()` inside `app.ts`.
- Separate concerns:
  - routes
  - controllers
  - middleware
  - services (if needed)

---

## Authentication

- Use JWT for authentication.
- Use bcrypt for password hashing.
- Never store plain-text passwords.
- Never hardcode secrets.
- Use environment variables via dotenv.

---

## Testing (TDD)

- Follow Test-Driven Development.
- Write tests before implementation.
- Use Jest as the test runner.
- Use Supertest for HTTP endpoint testing.
- Tests must not depend on a running external server.
- Tests must be deterministic and isolated.

---

## Docker

- The application must run inside Docker.
- The Docker image must build successfully using `docker build`.
- The container must start using `docker run`.
- TypeScript must be compiled during the Docker build step.
- Do not commit `node_modules`.
- Use a `.dockerignore` file to exclude unnecessary files.

---

## CI

- CI must build the Docker image.
- CI must run tests.
- The pipeline must fail if tests fail.

---

## Frontend (React)

- Use React with TypeScript.
- Use functional components only.
- Prefer hooks over class components.
- Use fetch for API calls unless otherwise required.

---
