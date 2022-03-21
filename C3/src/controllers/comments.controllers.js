const express = require("express")

const Comments = require("../models/comments.models")

const app = express()

app.get("/", async (req, res) => {
    try {
        const comments = await Comments.find().lean().exec();

        return res.status(201).send({ comments: comments })
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

app.post("/", async (req, res) => {
    try {
        const comments = await Comments.create(req.body)

        return res.status(201).send(comments)
        
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

module.exports = app