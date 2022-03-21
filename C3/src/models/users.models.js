const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema(

    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        profileImages:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Users = mongoose.model("users", usersSchema)

module.exports = Users