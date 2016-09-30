const express = require("express")

const app = express()

app.get("/", function (req, res, next) {
  res.status(200).json({
    app: "epistemy",
    service: "1",
    author: "AJ Ostrow",
    stats: {}
  })
})

app.listen(process.env.PORT || 8000)
