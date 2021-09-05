import React, {useContext} from "react"

import TimeBlock from "TimeBlock"
import {settings} from "Calendar"


export default function TimeBlockRow({
    index, weekEvents, sliceIndices, setWeekEvents
}){
    
    const timeBlockSize = useContext(settings).state.timeBlockSize
    const divisions = 60 * 60 / timeBlockSize
    
    const timeString = String(index).length === 1 ? `0${index}:00` : `${index}:00`
    
    return (
        <tr className="row TimeBlockRow" index={index}>
        <th className="row-label" index={0}>{timeString}</th>
            {
                new Array(7).fill('').map((_, i) => {
                    return <TimeBlock
                        key={i}
                        hourIndex={index}
                        weekDayIndex={i}
                        divisions={divisions}
                        sliceIndices={sliceIndices}
                        weekEvents={weekEvents}
                        setWeekEvents={setWeekEvents}
                    />
                })
            }
        </tr>
    )
}
