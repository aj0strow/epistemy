// Keep track of app configuration.

const _ = require("lodash")

function getEnv(key, defaultValue) {
  const value = process.env[key]
  if (value === undefined) {
    return defaultValue
  }
  return value
}

// Configurations.

const deploy = {
  name: getEnv("NODE_ENV", "development"),
  port: getEnv("PORT", 8000),
}

// Combine into one environment object.

function withEnv(config) {
  return config[deploy.name]
}

const items = [
  deploy,
]

const config = {}
_.each(items, item => {
  _.assign(config, item)
})
module.exports = config
