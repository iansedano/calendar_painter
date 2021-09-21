import React, {useContext, useState} from "react"

import {settings} from 'Calendar'
import {HeaderRow} from 'HeaderRow'
import TimeBlockRow from 'TimeBlockRow'


export default function Week() {
  const headers = ["Times", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  const context = useContext(settings).state
  const labelSize = context.labelSize
  const rows = 24 * 60 * 60 / labelSize // 24 usually
  
  const timeBlockSize = context.timeBlockSize
  const divisions = 60 * 60 / timeBlockSize
  
  // TODO Don't create array every time?
  // But maybe I need to, if I am going to change increments...
  // But if I'm going to change increments, then there will need to be a conversion
  // of the state array...
  const blankWeekEventState = new Array(24*divisions)
  for (let i = 0; i != 24*divisions; i++) blankWeekEventState[i] = new Array(7)
  
  const [weekEvents, setWeekEvents] = useState(blankWeekEventState)
  
  return <table className="Week">
    <thead>
      <HeaderRow headers={headers}/>
    </thead>
    <tbody>
      {
        new Array(rows).fill("").map((_,i) => {
          return <TimeBlockRow
            key={i}
            index={i}
            weekEvents={weekEvents}
            sliceIndices={[i*divisions, i*divisions + 4]}
            setWeekEvents={setWeekEvents}
          />
        })
      }
    </tbody>
  </table>
}
