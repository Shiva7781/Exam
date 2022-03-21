const express = require("express")

const app = express()

app.use(express.json())

const usersControlles = require("./controllers/users.controllers")
const booksControlles = require("./controllers/books.controllers")
const commentssControlles = require("./controllers/comments.controllers")
const publicationsControlles = require("./controllers/publications.controllers")


app.use("/users", usersControlles)

app.use("/books", booksControlles)

app.use("/comments", commentssControlles)

app.use("/publication", publicationsControlles)


const connect = require("./configs/db")

module.exports = app