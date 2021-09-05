import React, {useContext, useState} from "react"

import {settings} from 'Calendar'
import WeekRow from 'WeekRow'


export default function Week() {
  const headers = ["Times", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  const context = useContext(settings).state
  const labelSize = context.labelSize
  const rows = 24 * 60 * 60 / labelSize
  
  const timeBlockSize = context.timeBlockSize
  const divisions = 60 * 60 / timeBlockSize
  
  console.log(divisions, "dIVS")
  
  const weekEventState = new Array(7)
  for (let i = 0; i != 7; i++) weekEventState[i] = new Array(24*divisions)
  
  const [weekEvents, setWeekEvents] = useState(weekEventState)
  
  console.log(weekEvents)
  
  return <table className="Week">
    <thead>
      <WeekRow type="header" data={headers}/>
    </thead>
    <tbody>
      {
        new Array(rows).fill("").map((_,i) => {
          return <WeekRow
            key={i}
            type="normal"
            data={i}
          />
        })
      }
    </tbody>
  </table>
}
