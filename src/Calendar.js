import React from "react"
import Week from "./Week.js"
import Palette from "./Palette.js"
import "./index.css"

const activeBrush = React.createContext(null)

export default function Calendar() {
    return <>
        <activeBrush.Provider value={null}>
            <Week/>
            <Palette/>
        </activeBrush.Provider>
    </>
}


