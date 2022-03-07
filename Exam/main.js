const express = require("express");
// console.log('express:', express)

const app = express();

app.listen(3000, () => {
    console.log("lestening on port 3000");
});

app.get("/books", logger, (req, res) => {
    return res.send({ route: "/books" });
});

app.get("/libraries", logger, checkPermission("librarian"), (req, res) => {
    return res.send({ route: "/libraries", permission: req.permission });
});

app.get("/authors", logger, checkPermission("author"), (req, res) => {
    return res.send({ route: "/authors", permission: req.permission});
});



function logger(req, res, next) {
    if (req.path == "/books") {
        console.log(req.path);
        next();

    }
    else if (req.path == "libraries") {
        console.log(req.path);
        next();

    }
    else if (req.path == "authors") {
        console.log(req.path);
        next();
    }
}


function checkPermission(permission) {
    return function logger1(req, res, next) {
        if (permission == "librarian") {
            req.permission = true

        }
        else if (permission == "author") {
            req.permission = true

        }
        next ()
    };
}
