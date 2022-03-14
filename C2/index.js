const express = require("express")

const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const connect = () => {
    return mongoose.connect("mongodb+srv://mybank:mybank123@cluster0.64laa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

//schema's
// User
// BranchDetail
// MasterAccount
// SavingsAccount
// FixedAccount

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: false },

}, {
    timestamps: true,
})

const branchDetailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },

}, {
    timestamps: true,
})

const masterAccountSchema = new mongoose.Schema({
    balance: { type: Number, required: true },

}, {
    timestamps: true,
})

const savingsAccountSchema = new mongoose.Schema({
    account_number: { type: Number, required: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },

}, {
    timestamps: true,
})

const fixedAccountSchema = new mongoose.Schema({
    account_number: { type: Number, required: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    starDate: { type: String, required: true },
    maturityDate: { type: String, required: true },

}, {
    timestamps: true,
})

//model
User = mongoose.model("user", userSchema)

BranchDetail = mongoose.model("BranchDetail", branchDetailSchema)

MasterAccount = mongoose.model("MasterAccount", masterAccountSchema)

SavingsAccount = mongoose.model("SavingsAccount", savingsAccountSchema)

FixedAccount = mongoose.model("FixedAccount", fixedAccountSchema)


//CRUD
app.get("/user", async (req, res) => {
    try {

        const users = await User.find().lean().exec()

        return res.status(200).send({ users: users })

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

app.post("/user", async (req, res) => {
    try {

        const user = await User.create(req.body)
        return res.status(201).send()

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

//
app.get("/branchDetail", async (req, res) => {
    try {

        const branchDetails = await BranchDetail.find().lean().exec()

        return res.status(200).send({ branchDetails: branchDetails })

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

app.post("branchDetail", async (req, res) => {
    try {

        const branchDetail = await BranchDetail.create(req.body)
        return res.status(201).send()

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})
//
app.get("/masterAccount", async (req, res) => {
    try {

        const masterAccounts = await MasterAccount.find().lean().exec()

        return res.status(200).send({ masterAccounts: masterAccounts })

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

app.post("/masterAccount", async (req, res) => {
    try {

        const masterAccount = await MasterAccount.create(req.body)
        return res.status(201).send()

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})
//
app.get("/savingsAccount", async (req, res) => {
    try {

        const savingsAccounts = await SavingsAccount.find().lean().exec()

        return res.status(200).send({ savingsAccounts: savingsAccounts })

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

app.post("/savingsAccount", async (req, res) => {
    try {

        const savingsAccount = await SavingsAccount.create(req.body)
        return res.status(201).send()

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})
//
app.get("/fixedAccount", async (req, res) => {
    try {

        const fixedAccounts = await FixedAccount.find().lean().exec()

        return res.status(200).send({ fixedAccounts: fixedAccounts })

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})

app.post("/fixedAccount", async (req, res) => {
    try {

        const fixedAccount = await FixedAccount.create(req.body)
        return res.status(201).send()

    } catch (error) {
        return res.status(500).send({ message: "went wrong" })

    }
})


app.listen(4000, async () => {
    try {
        await connect()

        console.log("Listening on port 4000")

    } catch (error) {
        console.log('error:', error)


    }
})