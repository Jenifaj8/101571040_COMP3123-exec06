# COMP3123 – Exercise 06: Books REST API

**Student:** Jenifa Joseph  
**Student ID:** 101571040  
**Course:** COMP3123 – Full Stack Development I

## Project Description

This exercise implements a Books REST API using Node.js, Express.js, MongoDB Atlas, and Mongoose. The application allows users to add, retrieve, update, delete, and sort books.

The project was forked from the professor's GitHub repository and extended to connect to MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman

## API Endpoints

Base URL: `http://localhost:3001/api/v1`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieve all books |
| POST | `/books` | Add a new book |
| GET | `/book/:bookid` | Retrieve a book by ID |
| PUT | `/book/:bookid` | Update a book by ID |
| DELETE | `/book/:bookid` | Delete a book by ID |
| GET | `/books/sort` | Retrieve books sorted by title |

## Sample JSON Request

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
2. Run `npm install`.
3. Create a `.env` file containing your MongoDB connection string:

   `MONGODB_URI=your_mongodb_connection_string`

4. Start the application using `node server.js`.
5. Test the endpoints using Postman at `http://localhost:3001/api/v1`.

## Testing

All six API endpoints were tested locally using Postman, including adding, retrieving, updating, deleting, and sorting books.

## GitHub Repository

https://github.com/Jenifaj8/101571040_COMP3123-exec06

## Deployment

Vercel deployment will be configured separately.