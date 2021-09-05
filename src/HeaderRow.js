import React, {useContext} from "react"

export default function HeaderRow({headers}){
    return (
        <tr className="row HeaderRow">
            {headers.map((header,i) => {
                return <th key={header} index={i} className="cell">{header}</th>
            })}
        </tr>
    )
}