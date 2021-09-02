import React from "react"
import ReactDOM from "react-dom"

import Calendar from "./Calendar.js"

const root = document.getElementById("root")

const App = () => <Calendar/>

ReactDOM.render(<App/>, root)