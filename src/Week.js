import React from "react"

import Day from "./Day.js"


export default function Week() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return <div className="Week">
        {
            weekDays.map((day, i) => {
                return <Day key={day} day={day} dayIndex={i}></Day>
            })
        }
    </div>
}
