const User = require("../models/users.models");

const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
require("dotenv").config();

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
    try {
        let user = await User.findone({
            email: req.body.eamil,
        });
        if (user) {
            return res.status(400).send({
                message: "Email already exists",
            });
        }
        user = await User.create(req.body);

        const token = generateToken(user);
        return res.status(200).send({ User, token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(400).send("Wrong Email or Password");
        }

        const match = user.checkPassword(req.body.password);

        if (!match) {
            return res.status(400).send({
                message: "Wrong Email or Password",
            });
        }

        const token = generateToken(user);

        return res.status(200).send({ user, token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


module.exports = {register, login}