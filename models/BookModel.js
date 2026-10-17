/*
Purpose:
Define the Book schema for MongoDB using Mongoose
*/

const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Book", BookSchema)