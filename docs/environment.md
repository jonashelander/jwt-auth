# Environment Variables

Node provides environment variables through:

process.env

Example:

process.env.PORT
process.env.JWT_SECRET

## .env file

.env is just a text file.

Example:

PORT=5001
JWT_SECRET=mysecret

Node does not read this file automatically.

## dotenv

dotenv loads variables from .env into process.env.

Usage:

import dotenv from "dotenv";
dotenv.config();

After this:

process.env.PORT === "5001"

## Important rule

dotenv.config() should run before other imports.

Example:

import dotenv from "dotenv";
dotenv.config();

import app from "./app"
