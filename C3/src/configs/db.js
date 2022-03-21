const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivac3:shivaC3@cluster0.zanu0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
