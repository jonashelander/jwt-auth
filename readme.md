# Auth Service – Express + JWT + TypeScript

A minimal authentication service built with:

- Express
- TypeScript
- JWT
- Jest (TDD)
- Docker
- React (frontend)

The goal of this project is to implement a clean, test-driven authentication system with a production-ready structure.

---

## Tech Stack

### Backend

- Node.js (LTS)
- TypeScript
- Express
- JSON Web Tokens (JWT)
- bcrypt
- Jest
- Supertest
- Docker

### Frontend

- React
- TypeScript

---

## Features

- User registration
- User login
- JWT-based authentication
- Protected routes
- Test-driven development (TDD)
- Dockerized backend
- CI pipeline

---

## Project Structure

```
.
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── app.ts
│   └── server.ts
├── tests/
├── docs/
├── Dockerfile
├── .dockerignore
├── package.json
└── tsconfig.json
```

### Architecture Notes

- `app.ts` configures and exports the Express application.
- `server.ts` starts the HTTP server.
- Tests import `app.ts` directly (no running server required).
- The application is designed for containerized execution.

---

## Getting Started

### 1. Clone the repository

```
git clone <your-repo-url>
cd <project-name>
```

---

## Running with Docker

### Build the image

```
docker build -t auth-service .
```

### Run the container

```
docker run -p 3000:3000 auth-service
```

The server will be available at:

```
http://localhost:3000
```

---

## Running Tests

Locally:

```
npm test
```

Or via Docker:

```
docker run auth-service npm test
```

---

## Environment Variables

Create a `.env` file in the root:

```
JWT_SECRET=your-secret-key
PORT=3000
```

Secrets must never be hardcoded.

---

## Development

If running locally without Docker:

```
npm install
npm run dev
```

---

## CI

The project includes a CI pipeline that:

- Builds the Docker image
- Runs the test suite
- Fails on any test error

---

## Roadmap

- Database integration
- Refresh tokens
- Role-based access control
- Production deployment setup

---

## License

MIT
