import React from "react"
import TimeBlock from "./TimeBlock.js"
// import styles from "./Day.module.css"

function handleMouseOver(e){
    console.log(e)
    if (e.buttons === 1) {
        e.target.style.backgroundColor = "red"
    }
}

const Day = ({day, dayIndex}) => {
    const blocks = []
    for (let i=0; i!=24*4; i++) {
        blocks.push({
            key:i,
            onMouseOver:handleMouseOver
        })
    }

    return <div className="Day">
        <h3>{day}</h3>
        {blocks.map(block => <TimeBlock {...block}/>)}
    </div>
}
export default Day

