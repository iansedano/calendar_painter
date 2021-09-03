import React from "react"
// import styles from "./TimeBlock.module.css"

function handleMouseOver(e){
    console.log(e)
    if (e.buttons === 1) {
        e.target.style.backgroundColor = "red"
    }
}

export default function TimeBlock(props) {
    return <div
        {...props}
        className="TimeBlock"
        
        onMouseOver={(e) => {
            console.log(e)
            if (e.buttons === 1) {
                e.target.style.backgroundColor = "red"
            }
        }}
    />
}
