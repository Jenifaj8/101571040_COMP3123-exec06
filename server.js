
require("dotenv").config()

const express = require("express")

const mongoose = require("mongoose")

const booksRoutes = require("./routes/books")

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 3001
const DB_URL = process.env.MONGODB_URI

app.use(express.json())
app.use(express.urlencoded())


app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas")
        app.listen(SERVER_PORT, () => {
            console.log(`Server running at http://localhost:${SERVER_PORT}/`)
        })
    })
    .catch((error) => {
        console.log(error)
        console.log("Could not connect to MongoDB Atlas")
        process.exit(1)
    })
