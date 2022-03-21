const express = require("express")

const Publications = require("../models/publications.models")

const app = express()

app.get("/", async (req, res) => {
    try {
        const publications = await Publications.find().lean().exec();

        return res.status(201).send({ publications: publicatios })
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

app.post("/", async (req, res) => {
    try {
        const publicatios = await Publications.create(req.body)

        return res.status(201).send(publicatios)
        
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

module.export = app