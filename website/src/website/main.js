import React from "react"
import ReactDOM from "react-dom"

const app = <p>Epistemy</p>

document.addEventListener('DOMContentLoaded', () => {
  const view = document.createElement("div")
  document.body.appendChild(view)
  ReactDOM.render(app, view)
}, false)
