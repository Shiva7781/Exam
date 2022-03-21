const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(

    {
        body: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Comments = mongoose.model("comments", commentsSchema)

module.exports = Comments