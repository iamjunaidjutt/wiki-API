# Wiki RESTful API — Node.js & MongoDB

A RESTful API built with Node.js, Express, and MongoDB that supports complete CRUD operations for Wikipedia-style articles.

## API Endpoints

### Collection Routes (`/articles`)
- `GET /articles` — Retrieve all articles
- `POST /articles` — Create a new article (requires `title` and `content`)
- `DELETE /articles` — Delete all articles

### Specific Article Routes (`/articles/:articleTitle`)
- `GET /articles/:articleTitle` — Fetch a single article by title
- `PUT /articles/:articleTitle` — Completely replace an existing article
- `PATCH /articles/:articleTitle` — Update specific fields of an article
- `DELETE /articles/:articleTitle` — Delete a single article by title

## Tech Stack

- **Node.js**
- **Express.js 4.18** (`app.route()` route chaining)
- **MongoDB & Mongoose 6**
- **body-parser**

## How to Run It Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/iamjunaidjutt/wiki-API.git
   cd wiki-API
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your MongoDB connection string (or run local MongoDB):
   ```bash
   export MONGODB_URL="mongodb://127.0.0.1:27017/wikiDB"
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Test API endpoints using Postman or `curl` at `http://localhost:3000/articles`.
