const express = require("express")

const app = express()

app.use(express.json())

const usersControlles = require("./controllers/usersControlles")
const booksControlles = require("./controllers/booksControlles")
const commentssControlles = require("./controllers/commentssControlles")
const publicationsControlles = require("./controllers/publicationsControlles")


app.use("/users", usersControlles)

app.use("/books", booksControlles)

app.use("/comments", commentssControlles)

app.use("/publication", publicationsControlles)


const connect = require("./configs/db")

module.exports = app