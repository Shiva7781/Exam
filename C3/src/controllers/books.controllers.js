const express = require("express")

const Books = require("../models/books.models")

const app = express()

app.get("/", async (req, res) => {
    try {
        const books = await Books.find().lean().exec();

        return res.status(201).send({ books: books })
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

app.post("/", async (req, res) => {
    try {
        const books = await Books.create(req.body)

        return res.status(201).send(books)
        
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

module.export = app