const express = require("express")

const router = express.Router()

const authenticate = require("../middlewares/authenticate")

const Todomodel = require("../models/todo.models")

router.post("", authenticate, async (req, res) => {
    req.body.user_id = req.userID
    try {
        const todo = await Todomodel.create(req.body)

        return res.status(200).send(todo)
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
})

router.get("", async (req, res) => {
    try {
        const todo = await Todomodel.find()
        return res.status(200).send(todo)
    
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
})

router.patch("/:id", authenticate, async (req, res) => {
    try {
        const todo = await Todomodel.findByIdAndUpdate(req.param.id, req.body, { new: true });

        return res.status(400).send(todo
        )
    } catch (err) {
        return res.status(400).send({ err });
    }
});

router.delete("./id", authenticate, async (req, res) => {
    
    try {
        const todo = await Todomodel.findByIdAndDelete(req.param.id)
        return res.status(200).send({ todo: todo });
    } catch (error) {
       return res.status(500).send({ message: error.message })
    }
})

module.exports = router