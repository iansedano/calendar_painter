import React, {useContext} from "react"

import TimeBlock from "TimeBlock"
import settings from "Calendar"

export default function WeekRow({type, data}) {
    if (type === "header"){
        return <HeaderRow headers={data}/>
    } else if (type === "normal") {
        return <TimeBlockRow index={data}/>
    }
}

function HeaderRow({headers}){
    return (
        <tr className="row HeaderRow">
            {headers.map((header,i) => {
                return <th key={header} className="cell">{header}</th>
            })}
        </tr>
    )
}

function TimeBlockRow({index}){
    const timeBlockSize = useContext(settings)
    const divisions = 60 / 15
    
    const timeString = String(index).length === 1 ? `0${index}:00` : `${index}:00`
    
    return (
        <tr className="row TimeBlockRow" index={index}>
            <th className="row-label">{timeString}</th>
            {
                new Array(7).fill('').map((_, i) => {
                    return <TimeBlock key={i} divisions={divisions}/>
                })
            }
        </tr>
    )
}