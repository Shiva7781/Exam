const express = require("express")

const Users = require("../models/users.models")

const app = express()

app.get("/", async (req, res) => {
    try {
        const users = await Users.find().lean().exec();

        return res.status(201).send({ users: users })
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

app.post("/", async (req, res) => {
    try {
        const users = await Users.create(req.body)

        return res.status(201).send(users)
        
    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

module.export = app