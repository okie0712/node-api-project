# Node.js REST API (JWT Auth)

## Overview
This is a backend API built with Node.js and Express that demonstrates:
- RESTful API design
- CRUD operations
- JWT authentication
- Middleware usage
- Structured architecture (routes/controllers)

## Tech Stack
- Node.js
- Express
- JSON Web Tokens (JWT)

## Features
- User CRUD operations
- Protected routes using JWT middleware
- Login authentication with token generation
- Modular structure (routes + controllers)

## Getting Started

### Install dependencies

npm install

### Run the server

node index.js

Server runs on:

http://localhost:3000

---

## Authentication Flow

### 1. Login
POST `/login`

Body:

```json
{
	"username": "admin",
	"password": "1234"
}
```

Response:

```json
{
	"success": true,
	"token": "YOUR_JWT_TOKEN"
}
```

### 2. Access Protected Routes

Add header:

Authorization: Bearer YOUR_JWT_TOKEN

Example:

GET /users

## API Endpoints

### Users
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

All require authentication.

## Notes

This project simulates a backend service with authentication and structured architecture, similar to production systems.