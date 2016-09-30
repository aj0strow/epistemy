const express = require("express")

const app = express()

app.use("/", require("./root"))

module.exports = app
