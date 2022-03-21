const app = require("./index")

const connect = require("./configs/db")

app.listen(5100, async () => {
    try {
        await connect()
    } catch (error) {
        console.log("listening on port 5100");

    }
})