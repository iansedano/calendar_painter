import React from "react"
import TimeBlock from "./TimeBlock.js"
// import styles from "./Day.module.css"



const Day = ({day, dayIndex}) => {
    const blocks = []
    const number = 24 * 4
    for (let i=0; i!=number; i++) {
        blocks.push({key:i, timeblockindex:i, style:{height:`${100/number}%`}})
    }

    return <div className="Day">
        <h3>{day}</h3>
        <div className="time-block-container">
            {blocks.map(block => <TimeBlock {...block}/>)}
        </div>
    </div>
}
export default Day

