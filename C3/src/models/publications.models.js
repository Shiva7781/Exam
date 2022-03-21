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

const Publications = mongoose.model("publication", publicationsSchema)

module.exports = Publications