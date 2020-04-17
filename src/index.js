import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

import * as smoothscroll from "smoothscroll-polyfill"
// kick off the polyfill!
smoothscroll.polyfill()

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
