const express = require("express");
const lodash = require("lodash");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const serialize = require("serialize-javascript");
const minimist = require("minimist");
const moment = require("moment");

const app = express();

app.use(express.json());


app.get("/", async (req, res) => {

    const user = {
        name: "admin",
        role: "admin"
    };


    const token = jwt.sign(
        user,
        "secret-key"
    );


    const data = _.template(
        "Hello <%= name %>"
    )({
        name: user.name
    });


    res.json({
        message: data,
        token: token,
        date: moment()
    });

});


app.listen(3000, () => {
    console.log("Server running");
});