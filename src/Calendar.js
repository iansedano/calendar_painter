import React from "react"
import Week from "./Week.js"
import Palette from "./Palette.js"
import "./index.css"

export const settings = React.createContext({})

export default function Calendar() {
    
    return(
        <div
            className="unselectable Calendar" // unselectable CSS used as fallback to JavaScript below
            ref={(node)=>node.addEventListener("selectstart", (e)=>{
                e.preventDefault()
                return false
            })} // adding via ref as per https://github.com/facebook/react/issues/16521
            onMouseDown={()=> false}
            onMouseOver={(e) => {
                console.log(e)
                if (e.buttons === 1 && e.target.classList.contains("brushable")) {
                    e.target.style.backgroundColor = "red"
                }
                return false
            }}
        >
            <settings.Provider value={{
                timeBlockSize : 60 * 15, // 15 minutes
                labelSize : 60 * 60, // 1 hour
                timeBlockSizeEnum : [60*15, 60*30, 60*60]
            }}>
                <Week/>
                <Palette/>
            </settings.Provider>
        </div>
    )
}


