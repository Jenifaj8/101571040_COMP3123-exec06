# COMP3123 – Exercise 06: Books REST API

**Student Name:** Jenifa Joseph  
**Student ID:** 101571040  
**Course:** COMP3123 – Full Stack Development I

## Project Description

This exercise implements a Books REST API using Node.js, Express.js, MongoDB Atlas, and Mongoose.

The application allows users to add, retrieve, update, delete, and sort books stored in MongoDB.

The project was forked from the professor's GitHub repository and extended to include MongoDB connectivity and CRUD operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman
- Docker
- Vercel

## API Endpoints

**Base URL:** `http://localhost:3001/api/v1`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieve all books |
| POST | `/books` | Add a new book |
| GET | `/book/:bookid` | Retrieve a book by ID |
| PUT | `/book/:bookid` | Update an existing book |
| DELETE | `/book/:bookid` | Delete a book |
| GET | `/books/sort` | Retrieve books sorted by title |

## Sample JSON Request

The following JSON can be used to add a book using Postman:

```json
{
  "title": "Introduction to JavaScript",
  "author": "John Smith",
  "genre": "Programming",
  "price": 29.99
}
```

## Running the Project Locally

1. Clone the repository.
2. Open the project folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project folder and add your MongoDB Atlas connection string:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the application:

   ```bash
   node server.js
   ```

6. Open the API in your browser or Postman:

   http://localhost:3001/api/v1/books

## Testing

All six API endpoints were tested locally using Postman.

Testing included adding new books, retrieving all books, retrieving a book by ID, updating book information, deleting a book, and sorting books alphabetically by title.

## Vercel Deployment

The Books REST API was successfully deployed on Vercel and connected to MongoDB Atlas.

**Live API:**

https://101571040-comp-3123-exec06.vercel.app/api/v1/books

The deployed API was tested successfully and returned the books stored in MongoDB.

## Docker Deployment

The Books REST API was also successfully built and tested using Docker.

### Build the Docker Image

```bash
docker build -t comp3123-books-api .
```

### Run the Docker Container

```bash
docker run -d --name comp3123-books-container -p 3001:3001 --env-file .env comp3123-books-api
```

### Test the Docker API

Open the following URL in your browser:

http://localhost:3001/api/v1/books

The Docker container connects to MongoDB Atlas and retrieves the stored books.

The `.dockerignore` file prevents `.env` and `node_modules` from being copied into the Docker image.

## GitHub Repository

https://github.com/Jenifaj8/101571040_COMP3123-exec06

**Original Repository:** https://github.com/pritamworld/nodejs_express_mongoose