import React from "react"
import ColorScheme from "color-scheme"

import Week from "./Week.js"
import Palette from "./Palette.js"
import "./index.css"

export const settings = React.createContext({})

export default function Calendar() {
    
    const eventType = ["Sleep",
        "S",
        "F",
        "SW",
        "DW",
        "M",
        "W",
        "IS",
        "E",
        "H",
        "P",
        "C"
    ]
    
    const scheme = new ColorScheme;
    scheme.from_hue(21)
          .scheme('tetrade')
          
    const colors = scheme.colors()
    
    const colorMap = eventType.reduce((o, eventName, i) => {
        o[eventName] = colors[i]
        return o
    }, {})
    
    
    return(
        <div
            className="unselectable Calendar" // unselectable CSS used as fallback to JavaScript below
            ref={(node)=>node.addEventListener("selectstart", (e)=>{
                e.preventDefault()
                return false
            })} // adding via ref as per https://github.com/facebook/react/issues/16521
            onMouseDown={()=> false}
            onMouseOver={(e) => {
                if (e.buttons === 1 && e.target.classList.contains("brushable")) {
                    e.target.style.backgroundColor = "red"
                }
                return false
            }}
        >
            <settings.Provider value={{
                timeBlockSize : 60 * 15, // 15 minutes
                labelSize : 60 * 60, // 1 hour
                timeBlockSizeEnum : [60*15, 60*30, 60*60],
                colorMap: colorMap,
                selectedEventType: null
            }}>
                <Week/>
                <Palette/>
            </settings.Provider>
        </div>
    )
}


