import React from "react"
import TimeBlock from "./TimeBlock.js"




const Day = ({day, dayIndex}) => {
    const number = 24 * 4
    
    return <div>
        <h3 className="column-header">{day}</h3>
        <div className="time-block-container">
            {new Array(number).fill('').map((_,i) => {
                return <TimeBlock
                    key={i}
                    index={i}
                />
            })}
        </div>
    </div>
}
export default Day

