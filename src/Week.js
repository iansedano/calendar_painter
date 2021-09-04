import React, {useContext} from "react"

import {settings} from 'Calendar'
import WeekRow from 'WeekRow'


export default function Week() {
    const headers = ["Times", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    const labelSize = useContext(settings).labelSize
    const rows = 24 * 60 * 60 / labelSize
         
    return <table className="Week">
       <WeekRow type="header" data={headers}/>
       {
           new Array(rows).fill("").map((_,i) => {
               return <WeekRow
                key={i}
                type="normal"
                data={i}
               />
           })
       }
    </table>
}
