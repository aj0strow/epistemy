import React from "react"
import ReactDOM from "react-dom"

import Home from "./home"

const app = <Home />

document.addEventListener('DOMContentLoaded', () => {
  const view = document.createElement("div")
  document.body.appendChild(view)
  ReactDOM.render(app, view)
}, false)
