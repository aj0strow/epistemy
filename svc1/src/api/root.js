const express = require("express")

const app = express.Router()

app.get("/", function (req, res, next) {
  res.status(200).json({
    app: "epistemy",
    service: "1",
    author: "AJ Ostrow",
    stats: {}
  })
})

module.exports = app
