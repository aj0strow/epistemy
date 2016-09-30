const app = require("api")
const env = require("env")

app.listen(env.port, () => {
  console.log("listening at http://localhost:%s", env.port)
})
