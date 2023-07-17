# Book Review API

This repository is the final project for the IBM Full Stack Software Developer Certificate, part of the "Developing Back-End Apps with Node.js and Express" course. More information about the course can be found at:

https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express/

## Key Features
- JWT-based authentication using express-session and jsonwebtoken
- User registration and login routes (issues JWT tokens)
- Public endpoints:
  - GET /books                — List all books
  - GET /books/:isbn          — Retrieve book details by ISBN
  - GET /author/:author       — Search books by author
  - GET /title/:title         — Search books by title
  - GET /review/:isbn         — View all reviews for a book
- Protected endpoints (require valid JWT):
  - POST /review/:isbn        — Add or update your review
  - DELETE /review/:isbn      — Delete your review
- In-memory data store (books and reviews) — no external database required

## Project Structure
```
final_project/
├── index.js           # Server setup & middleware configuration
└── router/
    ├── auth_users.js  # User registration & login routes
    ├── general.js     # Public book retrieval routes
    └── booksdb.js     # Protected review management routes
screenshots/           # Example API call screenshots
```

## Getting Started
1. Change into the project directory:
   ```bash
   cd final_project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
The API runs by default on http://localhost:3000

## License
MIT
