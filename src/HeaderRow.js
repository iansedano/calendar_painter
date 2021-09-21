import React, {useContext} from "react"

export function HeaderRow({headers}){
    return (
        <tr className="row HeaderRow">
            {headers.map((header,i) => {
                return <th key={header} index={i} className="cell">{header}</th>
            })}
        </tr>
    )
}