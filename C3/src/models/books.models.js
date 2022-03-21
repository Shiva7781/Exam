const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(

    {
        likes: { type: Number, required: true },
        coverImage: { type: String, required: true },
        content: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Books = mongoose.model("books", booksSchema)

module.exports = Books