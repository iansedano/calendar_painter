import React, {useContext} from "react"

import {EVENT_COLOR_MAP} from "state"
import {settings} from "Calendar"

export default function TimeBlock({
  divisions, sliceIndices, setWeekEvents, weekEvents, hourIndex, weekDayIndex
}) {
  
  const state = useContext(settings).state
  
  return (
    <td className="cell" index={hourIndex + 1}>
    {
      new Array(divisions).fill('').map((_, i) =>{
        return (
          <div
          key={i}
          className="sub-cell"
          style={{
            backgroundColor: EVENT_COLOR_MAP.get(weekEvents[sliceIndices[0] + i][weekDayIndex])
          }}
          onMouseOver={(e) => {
            if (e.buttons === 1) {
              console.log("fire")
              const newWeekEvents = [...weekEvents]
              newWeekEvents[hourIndex * 4 + i][weekDayIndex] = state.selectedEventType
              setWeekEvents(newWeekEvents)
            }
            return false
          }}
          ></div>
        )
      })
    }
    </td>
  )
 }
    