
const express = require("express")

const BookModel = require("../models/BookModel.js")

const routes = express.Router()

//Get All Books
routes.get("/books", async (req, res) => {
    try {
        const books = await BookModel.find()
        res.status(200).send(books)

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not retrieve books"
        })
    }
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    try {
        const book = new BookModel({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            price: req.body.price
        })

        const savedBook = await book.save()
        res.status(201).send(savedBook)

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not add new book"
        })
    }
})

//Update existing Book By Id
routes.put("/book/:bookid", async (req, res) => {
    try {
        const updatedBook = await BookModel.findByIdAndUpdate(
            req.params.bookid,
            {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                price: req.body.price
            },
            { new: true, runValidators: true }
        )

        if (!updatedBook) {
            return res.status(404).send({
                message: "Book not found"
            })
        }

        res.status(200).send(updatedBook)

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not update book"
        })
    }
})

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    try {
        const deletedBook = await BookModel.findByIdAndDelete(
            req.params.bookid
        )

        if (!deletedBook) {
            return res.status(404).send({
                message: "Book not found"
            })
        }

        res.status(200).send({
            message: "Book deleted successfully"
        })

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not delete book"
        })
    }
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.bookid)

        if (!book) {
            return res.status(404).send({
                message: "Book not found"
            })
        }

        res.status(200).send(book)

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not retrieve book"
        })
    }
})

//Get All Books in sorted order
routes.get("/books/sort", async (req, res) => {
    try {
        const books = await BookModel.find().sort({ title: 1 })
        res.status(200).send(books)

    } catch (error) {
        res.status(500).send({
            message: error.message || "Could not retrieve sorted books"
        })
    }
})

module.exports = routes
