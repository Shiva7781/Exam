const mongoose = require("mongoose");

const publicationsSchema = new mongoose.Schema(

    {
        name: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Publications = mongoose.model("publication", commentsSchema)

module.exports = Publications